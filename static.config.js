import axios from 'axios'
import path from 'path'
import fs from 'fs-extra'
import markdown from 'markdown-it';
import yaml from 'js-yaml';
import { watch } from 'chokidar';
import { reloadRoutes } from 'react-static/node';
import { orderBy, escapeRegExp, omit } from 'lodash';
import React from 'react';
import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';
import 'ts-node/register';
import theme from './src/theme';

import markdownItPrism from '@iktakahiro/markdown-it-prismjs';

const md = new markdown();
md.use(markdownItPrism);

// Paths Aliases defined through tsconfig.json
const typescriptWebpackPaths = require('./webpack.config.js')

/**
 * @param {string} filepath
 */
async function parsePost(filepath) {
  const basename = path.basename(filepath, ".md");

  const metadata = {
    id: basename,
  };

  const raw_content = await fs.readFile(filepath, 'utf-8');
  /**
   * @var {string} body
   */
  let body;
  if (raw_content.startsWith("---")) {
    const meta_end = raw_content.indexOf("---", 3);
    body = raw_content.substring(meta_end + 3);
    Object.assign(metadata, yaml.load(raw_content.substring(3, meta_end)));
  } else {
    metadata.title = basename;
  }

  return {
    ...metadata,
    body: md.render(body)
  };
}

/**
 * @param {string} root
 * @param {function} filter
 * @param {function} processor
 */
function loadData(root, filter, processor) {
  return fs.readdir(
    root
  ).then(
    ps => ps.filter(o => filter(o))
  ).then(
    ps => Promise.all(
      ps.map(
        async p => await processor(path.join(root, p))
      )
    ),
  );
}

function pickPostSummary(posts) {
  return posts.map(post => omit(post, ['tags', 'body']));
}

const data_root = path.join(__dirname, 'data');
watch(data_root).on('all', () => reloadRoutes())

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  extractCssChunks: true,
  siteRoot: 'https://www.perlmint.app',
  getSiteData: () => ({
    title: 'Perlmint',
  }),
  getRoutes: async () => {
    const post_root = path.join(data_root, 'posts');
    const posts = orderBy(
      await loadData(post_root, p => p.endsWith(".md"), parsePost),
      post => post.date,
      'desc'
    );
    const postsSummary = pickPostSummary(posts);

    const tags = {};
    for (let idx = 0; idx < posts.length; idx++) {
      const post = posts[idx];
      if (!post.tags) {
        continue;
      }
      for (const tag of post.tags) {
        if (tags[tag] === undefined) {
          tags[tag] = [];
        }

        tags[tag].push(postsSummary[idx]);
      }
    }

    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
        getData: async () => ({
          summary: (await fs.readFile(
            path.join(data_root, 'about', 'summary.yml'),
            { encoding: 'utf-8' }
          ).then(yaml.load)),
          links: (await fs.readFile(
            path.join(data_root, 'about', 'links.yml'),
            { encoding: 'utf-8' }
          ).then(yaml.load)),
          careers: (await loadData(path.join(data_root, 'about', 'careers'), p => p.endsWith(".yml"), async p => {
            const raw_content = await fs.readFile(p, 'utf-8');

            return yaml.load(raw_content);
          })).reverse(),
        }),
      },
      {
        path: '/blog',
        component: 'src/containers/Posts',
        getData: () => ({
          title: 'all',
          posts: postsSummary,
        }),
        children: [...posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })), ...Object.keys(tags).sort().map(tag => ({
          path: `/tags/${tag.replace(/\+/g, '__')}`,
          component: 'src/containers/Posts',
          getData: () => ({
            title: `tag - ${tag}`,
            posts: tags[tag],
          }),
        }))],
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    // Create a sheetsRegistry instance.
    const sheetsRegistry = new SheetsRegistry()

    // Create a MUI theme instance.
    const muiTheme = createMuiTheme(theme)

    const generateClassName = createGenerateClassName()

    const html = render(
      <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
        <MuiThemeProvider theme={muiTheme} sheetsManager={new Map()}>
          <Comp />
        </MuiThemeProvider>
      </JssProvider>
    )

    meta.jssStyles = sheetsRegistry.toString()

    return html
  },
  Document: ({
    Html, Head, Body, children, renderMeta,
  }) => <Html>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Body>
      {children}
      <style id="jss-server-side">{renderMeta.jssStyles}</style>
    </Body>
  </Html>,
  webpack: (config, { defaultLoaders, stage }) => {
    // Add .ts and .tsx extension to resolver
    config.resolve.extensions.push('.ts', '.tsx')

    // Add TypeScript Path Mappings (from tsconfig via webpack.config.js)
    // to react-statics alias resolution
    config.resolve.alias = typescriptWebpackPaths.resolve.alias

    // We replace the existing JS rule with one, that allows us to use
    // both TypeScript and JavaScript interchangeably
    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: defaultLoaders.jsLoader.exclude, // as std jsLoader exclude
            use: [
              {
                loader: 'babel-loader',
              },
              {
                loader: require.resolve('ts-loader'),
                options: {
                  transpileOnly: true,
                },
              },
            ],
          },
          defaultLoaders.cssLoader,
          defaultLoaders.fileLoader,
        ],
      }
    ];

    if (stage != 'dev') {
      config.plugins.push(new ExtractCssChunks());
    }

    return config
  },
}

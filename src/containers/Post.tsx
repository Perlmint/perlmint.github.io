import React from 'react';

import { Head, Link, withRouteData } from 'react-static';

import {
  Chip, createStyles, Divider, Grid, List, ListItem,
  ListItemText, Paper, Typography, withStyles, WithStyles
} from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeftRounded';

import convert from 'htmr';
import { defaultTo, reduce } from 'lodash';

import { IPost } from '../types';
import TagList from './TagList';

import 'prismjs/themes/prism-solarizedlight.css';

interface IProps {
  post: IPost;
}

const styles = createStyles({
  'post': {
    lineHeight: 1.5,
  },
  '@media (min-width: 1024px)': {
    post: {
      paddingLeft: '2em',
    },
  },
});

export default withStyles(styles)(withRouteData(({ post, classes }: IProps & WithStyles<typeof styles>) => (
  <Grid container justify='center' style={{ padding: '1em', paddingTop: 0 }}>
    <Grid item xs={12} lg={6}>
      <Paper style={{ padding: '2em', }}>
        <Head>
          <title>{post.title}</title>
          <meta name='keywords' content={defaultTo(post.tags, []).join(',')} />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:title' content={post.title} />
        </Head>
        <div style={{ flexDirection: 'row', display: 'flex', }}>
          <div>
            <Link to='/blog'>
              <KeyboardArrowLeft style={{ fontSize: '2em', }} />
            </Link>
          </div>
          <div>
            <Typography variant='headline'>
              {post.title}
            </Typography>
            <Typography variant='subheading'>{new Date(post.date).toLocaleString()}</Typography>
          </div>
        </div>
        <Divider />
        <div className={classes.post}>
          {convert(post.body)}
        </div>
        <Divider />
        <List>
            <ListItem>
              <ListItemText primary={
                <Typography variant='subheading'>Categories</Typography>
              } secondary={
                reduce(
                  post.categories,
                  (ret, cat) => (
                    ret.push(<Chip variant='outlined' component='span' key={cat} label={cat} />, ' '),
                    ret
                  ),
                  []
                )
              } />
            </ListItem>
            <TagList tags={post.tags} />
        </List>
      </Paper>
    </Grid>
  </Grid>
)));

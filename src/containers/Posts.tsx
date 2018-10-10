import React from 'react';

import { Head, Link, withRouteData } from 'react-static';

import { Card, CardContent, Chip, Grid, Typography } from '@material-ui/core';

import { IPost } from '../types';

interface IProps {
  title?: string;
  posts: IPost[];
}

export default withRouteData(({ posts, title }: IProps) => {
  const titleName = ['Posts'].concat(title).join(' : ');
  return <div style={{ padding: 20 }}>
    <Head>
      <title>{ titleName }</title>
    </Head>
    <Grid container spacing={40}>
      <Grid item xs={12}>
        <Typography variant='display1'>{ titleName }</Typography>
      </Grid>
      {posts.map((post) => (
          <Grid item xs={12} md={4} key={post.id}>
            <Link to={`/blog/post/${post.id}/`}>
            <Card>
              <CardContent>
                <Typography component='h2' variant='headline'>
                  {post.title}
                </Typography>
                <Typography variant='subheading' color='textSecondary'>
                  {new Date(post.date).toLocaleDateString()}
                </Typography>
                {
                  post.categories.map(
                    (cat) => <Chip variant='outlined' key={cat} label={cat} />
                  )
                }
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  </div>;
});

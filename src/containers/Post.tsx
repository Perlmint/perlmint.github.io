import React from 'react';

import { Head, Link, withRouteData } from 'react-static';

import { Chip, Divider, Grid, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeftRounded';

import convert from 'htmr';
import { reduce } from 'lodash';

import { IPost } from '../types';
import TagList from './TagList';

interface IProps {
  post: IPost;
}

export default withRouteData(({ post }: IProps) => (
  <Grid container justify='center' style={{ padding: '1em', paddingTop: 0 }}>
    <Grid item xs={12} lg={6}>
      <Paper style={{ padding: '2em', }}>
        <Head>
          <title>{post.title}</title>
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
        <div style={{ paddingLeft: '2em', lineHeight: 1.5 }}>
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
));

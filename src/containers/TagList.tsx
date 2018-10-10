import React from 'react';

import { Link } from 'react-static';

import { Chip, ListItem, ListItemText, Typography } from '@material-ui/core';

import { reduce } from 'lodash';

export default function TagList({ tags }: { tags?: string[]}) {
    if (tags === undefined) {
        return <span></span>;
    }

    return <ListItem>
        <ListItemText primary={
        <Typography variant='subheading'>Tags</Typography>
        } secondary={
        reduce(tags, (ret, tag) => (
            ret.push(<Link to={`/blog/tags/${tag.replace(/\+/g, '__')}`} key={tag}>
                <Chip variant='outlined' component='span' label={tag} />
            </Link>, ' '),
            ret),
            []
        )
        } />
    </ListItem>;
}

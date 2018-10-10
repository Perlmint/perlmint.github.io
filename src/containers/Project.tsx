import React from 'react';

import { Chip, createStyles, ListItem, ListItemText, Theme, WithStyles, withStyles } from '@material-ui/core';
import { IProject } from '../types';

export interface IProjectProp extends WithStyles<typeof styles> {
    project: IProject;
}

const styles = (theme: Theme) => createStyles({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    secionHeading: {
        paddingTop: theme.typography.pxToRem(20),
        paddingLeft: theme.typography.pxToRem(20),
    }
});

export default withStyles(styles)(class ProjectItem extends React.Component<IProjectProp, any> {
    public render() {
        const { project } = this.props;

        return [<ListItem key={0}>
            <ListItemText primary={project.name} secondary={project.description} />
        </ListItem>,
        <ListItem key={1}>
            {project.tech.map((tech, idx) => <Chip label={tech} key={idx} />)}
        </ListItem>];
    }
});

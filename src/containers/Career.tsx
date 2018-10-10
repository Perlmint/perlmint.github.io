import React from 'react';

import {
    createStyles, ExpansionPanel, ExpansionPanelDetails,
    ExpansionPanelSummary, List, ListSubheader,
    Theme, Typography,
    WithStyles, withStyles,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { ICareer } from '../types';
import DateItem from './DateItem';
import Project from './Project';

export interface ICareerProp extends WithStyles<typeof styles> {
    career: ICareer;
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
    noDeco: {
        textDecoration: 'none',
    },
    secionHeading: {
        paddingTop: theme.typography.pxToRem(20),
        paddingLeft: theme.typography.pxToRem(20),
    }
});

export default withStyles(styles)(class CareerItem extends React.Component<ICareerProp, any> {
    public render() {
        const { career, classes } = this.props;
        return <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>{career.company}</Typography>
                <Typography className={classes.secondaryHeading}>
                    <DateItem date={career.begin} />&nbsp;~&nbsp;<DateItem date={career.end} />
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                {career.projects ? <List>
                    <ListSubheader>프로젝트</ListSubheader>
                    {career.projects.map((project, idx) => <Project key={idx} project={project} />)}
                </List> : '' }
            </ExpansionPanelDetails>
        </ExpansionPanel>;
    }
});

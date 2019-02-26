import React from 'react';

import { Head, RouteData } from 'react-static';

import { Chip, Grid, List, ListItem, ListItemText, Paper } from '@material-ui/core';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { capitalize, reduce } from 'lodash';

import { ICareer } from '../types';
import CareerItem from './Career';
import Links, { ILink } from './Links';

const styles = (theme: Theme) => createStyles({
  root: {
    width: '100%',
    padding: 20,
    },
    secionHeading: {
        paddingTop: theme.typography.pxToRem(20),
        paddingLeft: theme.typography.pxToRem(20),
    },
});

interface IData {
    summary: Array<[string, string | string[]]>;
    careers: ICareer[];
    links: ILink[];
}

interface IAboutProps extends WithStyles<typeof styles> {
}

interface IAboutState {
}

class AboutPage extends React.Component<IAboutProps, IAboutState> {
    public render() {
        const { classes } = this.props;

        return <RouteData render={({ summary, careers, links }: IData) =>
            <div className={classes.root}>
                <Head>
                    <title>About</title>
                </Head>
                <Grid container spacing={16}>
                    <Grid item xs={false} md={1} lg={3}></Grid>
                    <Grid item xs={12} md={10} lg={6} >
                        <Grid container spacing={16}>
                            <Grid item xs={12}>
                                <Paper>
                                    <Typography
                                        className={classes.secionHeading}
                                        component='div'
                                        variant='headline'
                                    >
                                        Summary
                                    </Typography>
                                    <List component='nav'>
                                        {summary.map(([key, value], idx) => <ListItem key={idx}>
                                            <ListItemText
                                                primary={capitalize(key)}
                                                secondary={<span>{(typeof value === 'string') ?
                                                    value : reduce<string, React.ReactNode[]>(
                                                        value,
                                                        (ret, item, iidx) => (ret.push(
                                                            <Chip component='span' key={iidx} label={item} />,
                                                            ' ',
                                                        ), ret),
                                                        []
                                                    )}
                                                </span>} />
                                        </ListItem>)}
                                    </List>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper>
                                    <Typography
                                        className={classes.secionHeading}
                                        component='div'
                                        variant='headline'
                                        gutterBottom
                                    >
                                        Career
                                    </Typography>
                                    {careers.map((career, idx) => <CareerItem career={career} key={idx} />)}
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper>
                                    <Typography
                                        className={classes.secionHeading}
                                        component='div'
                                        variant='headline'
                                    >
                                        Links
                                    </Typography>
                                    <Links links={links} />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={1} lg={3}></Grid>
                </Grid>
            </div>}
        />;
    }
}

export default withStyles(styles)(AboutPage);

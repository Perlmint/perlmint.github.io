import React from 'react';

import { hot } from 'react-hot-loader';
import { Router } from 'react-static';
import Routes from 'react-static-routes';

import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import Menu from './Menu';

import './app.css';

const styles = (theme: Theme) => createStyles({
    layout: {
        marginTop: '1em',
    },
});

interface IAppProps extends WithStyles<typeof styles> {
}

interface IAppState {
}

class App extends React.Component<IAppProps, IAppState> {
    public state: IAppState = {
        selected: 0,
    };

    public componentDidMount() {
        const jssStyles = document.getElementById('jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    public render() {
        const { classes } = this.props;

        return <Router>
            <div>
                <CssBaseline />
                <Menu />
                <main className={classes.layout}>
                    <Routes />
                </main>
            </div>
        </Router>;
    }
}

export default hot(module)(withStyles(styles)(App));

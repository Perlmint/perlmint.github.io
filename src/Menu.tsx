import React from 'react';

import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-static';

import { Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import { findIndex } from 'lodash';

const style = (theme: Theme) => createStyles({
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
    },
});

interface IMenuProps extends WithStyles<typeof style>, RouteComponentProps<any> {
}

interface IMenuState {
    selected: number | undefined;
}

const menus: Array<{
    url: string;
    title: string;
    isExact?: boolean;
}> = [
    { url: '/', title: 'Home', isExact: true },
    { url: '/about', title: 'About' },
    { url: '/blog', title: 'Posts' },
];

class Menu extends React.Component<IMenuProps, IMenuState> {
    public state = {
        selected: undefined,
    } as IMenuState;

    public componentWillMount() {
        const idx = findIndex(
            menus,
            (menu) => menu.isExact ?
                this.props.location.pathname === menu.url :
                this.props.location.pathname.startsWith(menu.url),
        );
        this.setState({
            selected: idx !== -1 ? idx : undefined,
        });
    }

    protected handleTabChange(value: number) {
        this.setState({
            selected: value,
        });
    }

    public render() {
        const { classes } = this.props;

        return <AppBar position='static'>
            <Toolbar variant='dense' className={classes.toolbarSecondary}>
                <Tabs
                    onChange={(_, v) => this.handleTabChange(v)}
                    value={this.state.selected}
                    centered
                    style={{flex: 1}}
                >
                    {menus.map(
                        (menu, idx) => <Tab key={idx} component={
                            (props: any) => <Link {...props} to={menu.url} exact={menu.isExact} />
                        } label={menu.title} />
                    )}
                </Tabs>
            </Toolbar>
        </AppBar>;
    }
}

export default withRouter(withStyles(style)(Menu));

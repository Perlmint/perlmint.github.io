import React from 'react';
import ReactDOM from 'react-dom';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

// Your top level component
import App from './App';

import theme from './theme';

// Export your top level component as JSX (for static rendering)
export default App;

// Render your app
if (typeof document !== 'undefined') {
    const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render;
    const muiTheme = createMuiTheme(theme);

    renderMethod(<MuiThemeProvider theme={muiTheme}>
        <App />
    </MuiThemeProvider>, document.getElementById('root'));
}

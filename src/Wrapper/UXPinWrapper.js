import React from 'react';
import { MuiThemeProvider , createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme ({
    palette: {
        primary: blue,
    }
});


export default function UXPinWrapper ({ children }) {

    let roboto = document.createElement('link');
    roboto.setAttribute('rel', 'stylesheet');
    roboto.setAttribute('href', 'hhttps://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
    
    let icons = documents.createElement('link');
    icons.setAttribute('rel', 'stylesheet');
    icons.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
    
    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
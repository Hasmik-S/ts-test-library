import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from "@material-ui/core/colors/blue";


const theme = createMuiTheme({
  palette: {
    primary:  blue,  
  },
});

export default function UXPinWrapper({ children }) {
  let icons = document.createElement('link');
  icons.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
  icons.setAttribute('rel', 'stylesheet');

  let roboto = document.createElement('link');
  roboto.setAttribute('href', 'https://fonts.googleapis.com/css?family=Roboto:300,400,500');
  roboto.setAttribute('rel', 'stylesheet');
  
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

import React from 'react';
import ReactDOM from 'react-dom';
import { HeroesApp } from './HeroesApp';

import './styles.css';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121'
    },
    secondary: {
      main: red[50],
    }
  },
  typography: {
    fontFamily: [
      'Poppins',
      'serif',
    ].join(','),
  },
});

ReactDOM.render(
  <ThemeProvider theme={ theme }>
    <HeroesApp />
  </ThemeProvider>,
    
  document.getElementById('root')
);

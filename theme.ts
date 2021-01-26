import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export const themeOptions: ThemeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#dddddd',
      light: '#e3e3e3',
      dark: '#9a9a9a',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    secondary: {
      main: '#f50057',
      light: '#f73378',
      dark: '#ab003c',
      contrastText: '#ffffff',
    },
    error: {
      main: '#f44336',
      light: '#f6685e',
      dark: '#aa2e25',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ff9800',
      light: '#ffac33',
      dark: '#b26a00',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    info: {
      main: '#2196f3',
      light: '#4dabf5',
      dark: '#1769aa',
      contrastText: '#ffffff',
    },
    success: {
      main: '#4caf50',
      light: '#6fbf73',
      dark: '#357a38',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    divider: 'rgba(0,0,0,0.12)',
  },
};
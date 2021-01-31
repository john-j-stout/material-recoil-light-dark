import React from 'react';
import { useRecoilValue } from 'recoil';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { themeAtom } from './atoms';
import { DarkModeDemo } from './components';

function App() {
  const theme = useRecoilValue(themeAtom);
  const themeConfig = createMuiTheme(theme);

  return (
    <MuiThemeProvider theme={themeConfig}>
      <CssBaseline />
      <DarkModeDemo />
    </MuiThemeProvider>
  );
}

export default App;

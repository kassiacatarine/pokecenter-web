import React, { useState, useEffect } from 'react';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import Header from './components/Header';
import usePersistedState from './utils/usePersistedState';
import { ETheme } from './utils/ETheme';

function App() {
  const [themeActive, setThemeActive] = usePersistedState('theme', ETheme.Light);
  const [theme, setTheme] = useState(light);

  function toggleTheme(theme: ETheme) {
    setThemeActive(theme);
  }
  
  useEffect(() => {
    setTheme(themeActive === ETheme.Light ? dark : light);
  }, [themeActive]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Routes />
    </ThemeProvider>
  );
}

export default App;

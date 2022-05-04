import { useRoutes } from 'react-router-dom';
import routes from './routing';
import { ThemeProvider } from '@material-ui/core';
import React, { useEffect } from 'react';
import theme from 'src/theme';

const App = () => {
  const routing = useRoutes(routes);

  useEffect(() => {
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {routing}
    </ThemeProvider>
  );
};

export default App;

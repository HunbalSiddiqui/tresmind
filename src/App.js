import { ThemeProvider } from '@material-ui/core';
import { useRoutes } from 'react-router';
import GlobalStyles from './components/GlobalStyles';
import routes from './routes';
import theme from './theme/theme';

function App() {
  const routing = useRoutes(routes())
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
}

export default App;

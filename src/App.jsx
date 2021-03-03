
import { AppProvider } from 'vendor'
import renderRoutes from 'vendor/router/renderRoutes';
import routers from './routers';
import reducers from './redux/reducers'
import { Link } from 'react-router-dom';

function App() {
  return (
    <AppProvider reducers={reducers}>
      <Link to="/about">About</Link>
      <Link to="/">Home</Link>
      {renderRoutes(routers)}
    </AppProvider>
  );
}

export default App;

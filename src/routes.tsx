import { HashRouter, Route, BrowserRouter, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { Mosaic } from './pages/Mosaic';

export function Routes() {
  const routes = (
    <>
      <Route path='/' exact component={Home} />
      <Route path='/:id' exact component={Mosaic} />
    </>
  );

  return process.env.REACT_APP_GH_PAGES_DEPLOY === '1' ? (
    <HashRouter basename='/'>{routes}</HashRouter>
  ) : (
    <BrowserRouter>
      <Switch>{routes}</Switch>
    </BrowserRouter>
  );
}

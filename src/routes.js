import React from 'react';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Mosaic from './pages/Mosaic'

export default function Routes() {
  return (
    process.env.REACT_APP_GH_PAGES_DEPLOY ? (
      <HashRouter basename="/">
        <Route path="/" exact component={Home} />
        <Route path="/mosaic/:id" component={Mosaic} />
      </HashRouter>
    ) : (
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/mosaic/:id" component={Mosaic} />
        </BrowserRouter>
      )
  )
}
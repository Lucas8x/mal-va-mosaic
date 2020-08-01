import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Mosaic from './pages/Mosaic'

export default function Routes() {
  return (
    <HashRouter basename="/">
      <Route path="/" exact component={Home} />
      <Route path="/:id" component={Mosaic} />
    </HashRouter>
  )
}
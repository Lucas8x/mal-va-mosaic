import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Mosaic from './pages/Mosaic'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/mosaic/:id" component={Mosaic} />
    </BrowserRouter>
  )
}
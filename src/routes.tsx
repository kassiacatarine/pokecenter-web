import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import PokemonDetails from './pages/PokemonDetails';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path='/' exact />
      <Route component={PokemonDetails} path='/pokemon/:id' exact />
    </BrowserRouter>
  );
};

export default Routes;

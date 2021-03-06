import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

import RandomDish from './modules/RandomDish/pages/RandomDish';
import Layout from './common/layout/Layout';
import Favourites from './modules/Favourites/pages/Favourites';

const Routes = () => {
  return (
    <Switch location={location} key={location.pathname}>
      <Route path="/" element={<Layout />}>
        <Route path="favourites" element={<Favourites />} />

        <Route path="/" element={<RandomDish />} />
        <Route path="*" element={<div>Not found!</div>} />
      </Route>
    </Switch>
  );
};

export default Routes;

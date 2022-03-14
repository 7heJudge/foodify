import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import styled from 'styled-components';

import RandomDish from './modules/RandomDish/pages/RandomDish';
import Layout from './common/layout/Layout';
import Favourites from './modules/Favourites/pages/Favourites';

const Routes = () => {
  return (
    <RouterContainer>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route path="favourites" element={<Favourites />} />

            <Route path="/" element={<RandomDish />} />
            <Route path="*" element={<div>Not found!</div>} />
          </Route>
        </Switch>
      </AnimatePresence>
    </RouterContainer>
  );
};

const RouterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  position: relative;
`;

export default Routes;

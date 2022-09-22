import React from 'react';
import { Route } from 'react-router-dom';
import Home from '@routes/Home';

const Routes: React.FC = () => {
  return <Route path="/" exact component={Home} />;
};

export default Routes;

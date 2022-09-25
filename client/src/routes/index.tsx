import React from 'react';
import { Route } from 'react-router-dom';
import Home from '@routes/Home';
import Room from '@routes/Room';

const Routes: React.FC = () => {
  return (
    <>
      <Route path="/" exact component={Home} />;
      <Route path="/room" component={Room} />;
    </>
  );
};

export default Routes;

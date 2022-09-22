import React from 'react';
import Avatar from '@components/UserProfile/Avatar';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './contexts/UserContext';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;

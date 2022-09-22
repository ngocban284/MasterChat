import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './contexts/UserContext';
import GlobalStyle from './styles/GlobalStyle';
import { darkTheme, lightTheme } from './styles/Themes';
import { Sun, Moon } from './components/Common/Icon';
import Routes from './routes';

const ThemeButton = styled.button`
  position: fixed;
  right: 2.5rem;
  bottom: 2rem;
  z-index: 1;
  svg {
    fill: ${({ theme }) => theme.text};
  }
  @media (max-width: ${({ theme }) => theme.mediaSize}) {
    right: 1rem;
    bottom: 0.5rem;
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;

const App: React.FC = () => {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <UserContextProvider>
        <GlobalStyle />
        <ThemeButton onClick={toggleTheme}>
          {theme ? <Sun size={36} /> : <Moon size={36} />}
        </ThemeButton>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </UserContextProvider>
    </ThemeProvider>
  );
};

export default App;

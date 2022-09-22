import React, { useState } from 'react';
import styled from 'styled-components';
import { useUserState } from '@contexts/UserContext';
import UserProfile from '@/components/UserProfile';

const Wrapper = styled.div`
  min-width: inherit;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-self: center;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const Container = styled.div`
  width: 30%;
  min-width: 360px;
  padding: 3rem;
  @media (max-width: ${({ theme }) => theme.mediaSize}) {
    padding: 0.5rem 3rem;
  }
`;

const Home: React.FC = () => {
  const [isNicknameValid, setIsNicknameValid] = useState(true);
  const { nickname } = useUserState();
  const isValid = isNicknameValid && nickname.length > 0;

  return (
    <Wrapper>
      <Container>
        <UserProfile
          isNicknameValid={isNicknameValid}
          setIsNicknameValid={setIsNicknameValid}
        />
      </Container>
    </Wrapper>
  );
};

export default Home;

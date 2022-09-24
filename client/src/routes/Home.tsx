import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import client, { wsClient } from '@/apollo/Client';
import styled from 'styled-components';
import { Theme } from '@/styles/Themes';
import { useUserState } from '@contexts/UserContext';
import UserProfile from '@/components/UserProfile';
import Button from '@/components/Common/Button';
import { CREATE_ROOM } from '@/queries/room.queries';
import { CREATE_SYSTEM_MESSAGE } from '@/queries/message.queries';
import { CreateRoomResponse, MutationCreateRoomArgs } from '@/generated/types';
import { getText } from '@/constants/localization';
import encrypt from '@/utils/encryption';
import Modal from '@/components/Modal';
import Footer from '@/components/Common/Footer';

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

const FooterWrapper = styled.div`
  margin: 3rem 0%;
  @media (max-width: ${({ theme }) => theme.mediaSize}) {
    margin: 2rem 0;
  }
`;

const Home: React.FC = () => {
  const [isNicknameValid, setIsNicknameValid] = useState(true);
  const { avatar, nickname, lang } = useUserState();
  const history = useHistory();

  const { greenColor } = Theme;
  const { createRoom, enterRoom } = getText(lang);
  const [visible, setVisible] = useState(false);
  const isValid = isNicknameValid && nickname.length > 0;

  const [createRoomMutation] = useMutation<
    { createRoomResponse: CreateRoomResponse },
    MutationCreateRoomArgs
  >(CREATE_ROOM, {
    variables: {
      nickname,
      lang,
      avatar,
    },
  });

  const [createSystemMessageMutation] = useMutation(CREATE_SYSTEM_MESSAGE, {
    variables: {
      source: 'in',
    },
  });

  const onClickEnterRoom = async () => {
    if (!isValid) {
      setIsNicknameValid(false);
      return;
    }
    setVisible(true);
  };

  const onClickCreateRoom = async () => {
    if (!isValid) {
      setIsNicknameValid(false);
      return;
    }

    const { data } = await createRoomMutation();
    if (!data) {
      return;
    }

    const { roomId, code, userId } = data.createRoomResponse;
    localStorage.setItem('token', data.createRoomResponse.token);
    await createSystemMessageMutation();
    history.push({
      pathname: `/room/${encrypt(`${roomId}`)}`,
      state: {
        roomId,
        userId,
        code,
        lang,
      },
    });
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      localStorage.removeItem('token');
      client.resetStore();
      wsClient.close();
    }
  }, []);

  return (
    <Wrapper>
      <Container>
        <Modal visible={visible} setVisible={setVisible} />
        <UserProfile
          isNicknameValid={isNicknameValid}
          setIsNicknameValid={setIsNicknameValid}
        />
        <Button text={enterRoom} onClick={onClickEnterRoom} isValid={isValid} />
        <Button
          text={createRoom}
          color={greenColor}
          onClick={onClickCreateRoom}
          isValid={isValid}
        />
        <FooterWrapper>
          <Footer color={Theme.darkGrayColor} />
        </FooterWrapper>
      </Container>
    </Wrapper>
  );
};

export default Home;

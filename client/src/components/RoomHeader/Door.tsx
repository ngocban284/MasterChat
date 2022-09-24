import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { DoorIcon } from '@components/Common/Icon';
import { DELETE_USER } from '@/queries/user.queries';
import { CREATE_SYSTEM_MESSAGE } from '@/queries/message.queries';
import client, { wsClient } from '@/apollo/Client';

const DoorButton = styled.button`
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-left: 1rem;
  svg {
    fill: ${({ theme }) => (theme.isLight ? theme.blackColor : '#545759')};
  }
  @media (max-width: ${({ theme }) => theme.mediaSize}) {
    margin-top: 3px;
    margin-left: 0.5rem;
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;

const Door: React.FC = () => {
  const history = useHistory();

  const [deleteUser] = useMutation(DELETE_USER);

  const [createSystemMessageMutation] = useMutation(CREATE_SYSTEM_MESSAGE, {
    variables: {
      source: 'out',
    },
  });

  const handleLeaveRoom = async () => {
    await createSystemMessageMutation();
    await deleteUser();
    localStorage.removeItem('token');
    history.push('/');
    client.resetStore();
    wsClient.close();
  };

  return (
    <DoorButton onClick={handleLeaveRoom}>
      <DoorIcon size={24} />
    </DoorButton>
  );
};

export default Door;

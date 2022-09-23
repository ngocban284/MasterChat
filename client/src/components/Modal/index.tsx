import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import Button from '../Common/Button';
import Toast from '../Common/Toast';
import floatToast from '@/utils/floatToast';
import encrypt from '@/utils/encryption';
import { useUserState } from '@/contexts/UserContext';
import { EnterRoomResponse, MutationEnterRoomArgs } from '@/generated/types';
import { ENTER_ROOM } from '@/queries/room.queries';
import { CREATE_SYSTEM_MESSAGE } from '@/queries/message.queries';
import { getText } from '@/constants/localization';
import Code from './Code';
import OverLay from './OverLay';

const Wrapper = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 10%);
  display: ${(props) => (props.visible ? 'block' : 'none')};
  width: 400px;
  height: 350px;
  min-width: 250px;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.blackColor};
  overflow: hidden;
  z-index: 2;

  @media (max-width: 400px) {
    width: 25vw;
  }
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ModalHeader = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 20%;
  color: ${(props) => props.theme.whiteColor};
`;

const ModalBody = styled.div`
  height: 45%;
  margin-top: 1.5rem;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35%;
  margin-bottom: 1rem;
  padding: 0 20px;
`;

const Text = styled.div`
  font-size: 15px;
`;

interface Props {
  visible: boolean;
  onClick?: () => void;
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<Props> = ({ visible, onClick, setVisible }) => {
  const history = useHistory();
  const [pinValue, setPinValue] = useState('');
  const { nickname, lang, avatar } = useUserState();
  const { enterCode, submitCode, wrongCode } = getText(lang);

  const onClickOverLay = () => {
    if (setVisible) {
      setVisible(!visible);
    }
  };

  const [enterRoomMutation] = useMutation<
    { enterRoomResponse: EnterRoomResponse },
    MutationEnterRoomArgs
  >(ENTER_ROOM, {
    variables: {
      nickname,
      lang,
      avatar,
      code: pinValue,
    },
  });

  const [createSystemMessageMutation] = useMutation(CREATE_SYSTEM_MESSAGE, {
    variables: {
      source: 'in',
    },
  });

  const onClickEnter = async () => {
    if (pinValue.length < 6) {
      floatToast('.modal-toast');
      return;
    }

    try {
      const { data } = await enterRoomMutation();
      if (!data) {
        return;
      }

      const { roomId, userId } = data.enterRoomResponse;
      localStorage.setItem('token', data.enterRoomResponse.token);

      await createSystemMessageMutation();
      history.push({
        pathname: `/room/${roomId}`,
        state: {
          userId,
          nickname,
          lang,
          code: pinValue,
        },
      });
    } catch (error) {
      floatToast('.modal-toast');
    }
  };

  return (
    <>
      <OverLay visible={visible} onClick={onClickOverLay} />
      <Wrapper visible={visible}>
        <ModalContainer>
          <ModalHeader>
            <Text>{enterCode}</Text>
          </ModalHeader>
          <ModalBody>
            <Code
              pinValue={pinValue}
              setPinValue={setPinValue}
              visible={visible}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClickEnter} text={submitCode}></Button>
          </ModalFooter>
        </ModalContainer>
      </Wrapper>
      <Toast className="modal-toast" text={wrongCode} />
    </>
  );
};

export default Modal;

import React from 'react';
import Avatar from './Avatar';
import Language from './Language';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface Props {
  isNicknameValid: boolean;
  setIsNicknameValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserProfile: React.FC<Props> = ({
  isNicknameValid,
  setIsNicknameValid,
}) => {
  return (
    <ProfileWrapper>
      <Avatar />
      <Language />
    </ProfileWrapper>
  );
};

export default UserProfile;

import React, { useEffect } from 'react';
import styled from 'styled-components';
import Input from './Input';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px;
  justify-content: space-around;
  align-items: center;
`;

interface Props {
  visible?: boolean;
  pinValue?: string;
  setPinValue: React.Dispatch<React.SetStateAction<string>>;
}

const Code: React.FC<Props> = ({ visible, pinValue, setPinValue }) => {
  useEffect(() => {
    if (!visible) {
      setPinValue('');
    }
  }, [visible]);
  return (
    <Container>
      <Input value={pinValue} onChange={setPinValue} numInputs={6} />
    </Container>
  );
};

export default Code;

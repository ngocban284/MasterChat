import React from 'react';
import styled from 'styled-components';

interface Props {
  visible: boolean;
  onClick: () => void;
}

const Container = styled.div<Props>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${(props) => props.theme.Overlay};
  z-index: 1;
`;

const OverLay: React.FC<Props> = ({ visible, onClick }) => {
  return <Container visible={visible} onClick={onClick} />;
};

export default OverLay;

import React from 'react';
import styled from 'styled-components';

interface Props {
  text?: string;
  isTimeVisible?: boolean;
}

const Text = styled.div<Props>`
  display: ${(props) => (props.isTimeVisible ? 'inline-block' : 'none')};
  margin-right: 0.3rem;
  color: ${({ theme }) => theme.reverseColor};
  @media (max-width: ${({ theme }) => theme.mediaSize}) {
    font-size: 10px;
  }
`;

const TimeText: React.FC<Props> = ({ text, isTimeVisible }) => (
  <Text isTimeVisible={isTimeVisible}>{text}</Text>
);

export default TimeText;

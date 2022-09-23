import React from 'react';
import styled from 'styled-components';
import { Theme } from '@/styles/Themes';

const { blueColor } = Theme;

interface StyleProps {
  isValid: boolean | undefined;
}

interface Props {
  text: string;
  color?: string;
  onClick?: () => void;
  isValid?: boolean;
}

const Container = styled.button<StyleProps>`
  width: 100%;
  height: 4rem;
  margin: 0.3rem 0;
  padding: 15px 0px;
  color: white;
  border: 0;
  background-color: ${(props) => props.color};
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: 20px;
  font-weight: 400;
  text-align: center;

  opacity: ${(props) => (props.isValid ? '' : '0.6')};
`;

const Button: React.FC<Props> = ({
  text,
  color = blueColor,
  onClick,
  isValid,
}) => {
  return (
    <Container color={color} onClick={onClick} isValid={isValid}>
      {text}
    </Container>
  );
};

Button.defaultProps = {
  text: '',
  color: blueColor,
  isValid: true,
};

export default Button;

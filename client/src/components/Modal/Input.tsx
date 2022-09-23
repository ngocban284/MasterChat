import React from 'react';
import CSS from 'csstype';
import OtpInput from 'react-otp-input';

interface Props {
  value?: string;
  onChange?: React.Dispatch<React.SetStateAction<string>>;
  numInputs?: number;
}

const containerStyle: CSS.Properties = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
};

const InputStyle: CSS.Properties = {
  width: '3rem',
  height: '4rem',
  margin: '.2rem',
  color: 'black',
  background: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '20px',
};

const Input: React.FC<Props> = ({ value, onChange, numInputs }) => {
  return (
    <OtpInput
      value={value}
      onChange={onChange}
      numInputs={numInputs}
      isInputNum
      separator={<span>-</span>}
      inputStyle={InputStyle}
      containerStyle={containerStyle}
    />
  );
};

export default Input;

import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Copy } from '../Common/Icon';
import Toast from '../Common/Toast';
import { getText } from '@/constants/localization';
import floatToast from '@/utils/floatToast';
import styled from 'styled-components';

const CodeWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  cursor: pointer;
  svg {
    fill: ${({ theme }) => (theme.isLight ? theme.blackColor : '#e5e5e5')};
  }
  @media (max-width: ${({ theme }) => theme.mediaSize}) {
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;
const CodeText = styled.div`
  margin-right: 0.3rem;
  font-size: 20px;
  font-weight: 500;
  @media (max-width: ${({ theme }) => theme.mediaSize}) {
    font-size: 14px;
  }
`;

interface Props {
  code: string;
  lang: string;
}

const Code: React.FC<Props> = ({ code, lang }) => {
  const { copyCode } = getText(lang);
  const toast = () => {
    floatToast('.coppy-toast');
  };

  return (
    <>
      <CopyToClipboard text={code} onCopy={toast}>
        <CodeWrapper>
          <CodeText>#{code}</CodeText>
          <Copy size={20} />
        </CodeWrapper>
      </CopyToClipboard>
      <Toast className="coppy-toast" text={copyCode} />
    </>
  );
};

export default Code;

import * as R from 'ramda';
import React, { ChangeEvent, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Typography from 'common/components/Typography/Typography';
import theme from 'theme/theme';

type TextareaProps = {
  value: string;
  error?: string;
  placeholder?: string;
  withBottomLine?: boolean;
  setValue: (value: string) => void;
};

const MAX_TEXT_LENGTH = 500;

const Textarea: React.FC<TextareaProps> = ({
  value,
  setValue,
  placeholder,
  error,
  withBottomLine,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [contentLength, setLength] = useState<number>(0);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const currentText = e.currentTarget.value;
    const currentTextLength = currentText.length;

    if (currentTextLength < MAX_TEXT_LENGTH) {
      setLength(currentTextLength);
      setValue(currentText);
    }
  };

  useLayoutEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '30px';
      textareaRef.current.style.height = `${Math.max(textareaRef.current.scrollHeight, 40)}px`;
    }
  }, [value]);

  return (
    <Container>
      <TextareaContainer
        value={value}
        ref={textareaRef}
        onChange={onChange}
        placeholder={placeholder}
      />
      <Length>{contentLength + `/${MAX_TEXT_LENGTH}`}</Length>
      {withBottomLine && <BottomLine />}
      {!R.isNil(error) && (
        <ErrorContainer>
          <Typography text={error} fontSize="fz12" fontColor={theme.colors.black} />
        </ErrorContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding-bottom: 15px;
`;

const TextareaContainer = styled.textarea`
  width: 100%;
  border: none;
  resize: none;
  display: block;
  overflow-y: auto;
  font-size: 18px;
  min-height: 30px;
  max-height: 200px;
  line-height: 20px;
  color: ${theme.colors.black};
  background: ${theme.colors.lightGray};
  font-family: HKGrotesk-Regular, sans-serif;

  &:focus {
    outline: none;
  }
`;

const Length = styled.span`
  right: 0;
  bottom: 3px;
  position: absolute;
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.fz12 + 'px'};
`;

const ErrorContainer = styled.div`
  bottom: 2px;
  position: absolute;
`;

const BottomLine = styled.div`
  bottom: 0;
  height: 1px;
  width: 100%;
  opacity: 0.5;
  position: absolute;
  background-color: ${(props) => props.theme.colors.black};
  background: linear-gradient(
    0.25turn,
    ${(props) => props.theme.colors.black},
    ${(props) => props.theme.colors.black},
    ${(props) => props.theme.colors.transparent}
  );
`;

export default Textarea;

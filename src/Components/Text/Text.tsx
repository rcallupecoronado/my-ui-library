import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';
import { omit } from 'lodash';

const StyledText = styled.p<{
  size?: string;
  color?: string;
  disabled?: boolean;
  backgroundColor?: string; // Add backgroundColor type
}>`
  font-size: ${(props) => props.size || '16px'};
  color: ${(props) => (props.disabled ? '#ccc' : props.color || '#000')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  background-color: ${(props) =>
    props.backgroundColor || 'transparent'}; //Use background color.
`;

const Text: React.FC<TextProps> = ({
  content,
  size,
  color,
  disabled,
  backgroundColor,
  ...rest
}) => {
  const filteredProps = omit(rest, ['disabled', 'backgroundColor']);
  return (
    <StyledText
      size={size}
      color={color}
      disabled={disabled}
      backgroundColor={backgroundColor}
      {...filteredProps}
    >
      {content}
    </StyledText>
  );
};

export default Text;

import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  color: ${(props) => (props.disabled ? '#ccc' : '#333')};
  font-size: 16px;
  background-color: ${(props) =>
    props.backgroundColor || 'transparent'}; // Use background color
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

const Label: React.FC<LabelProps> = ({ text, disabled, backgroundColor }) => {
  return (
    <StyledLabel disabled={disabled} backgroundColor={backgroundColor}>
      {text}
    </StyledLabel>
  );
};

export default Label;

import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  margin-right: 5px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <StyledLabel>
      <StyledInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(event) => onChange(event)}
      />
      {label}
    </StyledLabel>
  );
};

export default RadioButton;

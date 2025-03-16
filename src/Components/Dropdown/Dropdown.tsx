import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface DropdownProps {
  options: { value: string; label: string }[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  defaultValue: string;
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  disabledBackgroundColor?: string;
}

const StyledSelect = styled.select<{
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  disabledBackgroundColor?: string;
}>`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${({
    disabled,
    backgroundColor,
    disabledBackgroundColor,
  }) =>
    disabled
      ? disabledBackgroundColor || '#e0e0e0'
      : backgroundColor || 'white'};
  color: ${({ textColor }) => textColor || 'black'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onChange,
  defaultValue,
  disabled,
  backgroundColor,
  textColor,
  disabledBackgroundColor,
}) => {
  return (
    <StyledSelect
      onChange={onChange}
      defaultValue={defaultValue}
      disabled={disabled}
      backgroundColor={backgroundColor}
      textColor={textColor}
      disabledBackgroundColor={disabledBackgroundColor}
    >
      <option disabled value="">
        Select an option
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;

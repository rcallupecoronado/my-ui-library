import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  background-color: ${(props) =>
    props.disabled
      ? '#ccc'
      : props.backgroundColor || '#007bff'}; // Use background color
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Button: React.FC<ButtonProps> = ({
  label,
  disabled = false,
  onClick,
  backgroundColor,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      backgroundColor={backgroundColor}
    >
      {label}
    </StyledButton>
  );
};

export default Button;

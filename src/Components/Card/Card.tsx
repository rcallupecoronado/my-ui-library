import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{
  $backgroundColor?: string;
  $disabled?: boolean;
  $textColor?: string;
}>`
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 5px;
  max-width: 300px;
  background-color: ${({ $backgroundColor }) => $backgroundColor || 'white'};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  color: ${({ $textColor }) => $textColor || 'black'};
`;

const Card: React.FC<CardProps> = ({
  title,
  description,
  content,
  children,
  backgroundColor,
  disabled,
  textColor,
}) => {
  return (
    <StyledCard
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      $textColor={textColor}
      role="region"
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{content}</p>
      {children && <div>{children}</div>}
    </StyledCard>
  );
};

export default Card;

import React from 'react';

export interface CardProps {
  title: string;
  content: string;
  children?: React.ReactNode;
  backgroundColor?: string;
  disabled?: boolean;
  textColor?: string;
}

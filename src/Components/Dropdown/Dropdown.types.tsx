import { ChangeEvent } from 'react';

export interface DropdownProps {
  options: { value: string; label: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  disabledBackgroundColor?: string;
}

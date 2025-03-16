export interface TableProps {
  headers: string[];
  rows: (string | number)[][];
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  headerBackgroundColor?: string;
  headerTextColor?: string;
  disabled?: boolean;
  disabledBackgroundColor?: string;
}

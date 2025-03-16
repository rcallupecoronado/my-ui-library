import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
  display: block;
  background-color: ${({
    backgroundColor,
    disabled,
    disabledBackgroundColor,
  }) =>
    disabled
      ? disabledBackgroundColor || '#e0e0e0'
      : backgroundColor || 'white'};
  color: ${({ textColor }) => textColor || 'black'};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

const StyledTh = styled.th<TableProps>`
  background-color: ${({ headerBackgroundColor }) =>
    headerBackgroundColor || '#f4f4f4'};
  color: ${({ headerTextColor }) => headerTextColor || 'black'};
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;

const StyledTd = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const Table: React.FC<TableProps> = ({
  headers = [],
  rows = [],
  backgroundColor,
  textColor,
  headerBackgroundColor,
  headerTextColor,
  disabled,
  disabledBackgroundColor,
  ...props
}) => {
  return (
    <StyledTable
      aria-label="Data Table"
      backgroundColor={backgroundColor}
      textColor={textColor}
      disabled={disabled}
      disabledBackgroundColor={disabledBackgroundColor}
    >
      <thead>
        <tr>
          {headers.length > 0 &&
            headers.map((header, index) => (
              <StyledTh
                key={index}
                headerBackgroundColor={headerBackgroundColor}
                headerTextColor={headerTextColor}
              >
                {header}
              </StyledTh>
            ))}
        </tr>
      </thead>
      <tbody>
        {rows.length > 0 &&
          rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <StyledTd key={cellIndex}>{cell}</StyledTd>
              ))}
            </tr>
          ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;

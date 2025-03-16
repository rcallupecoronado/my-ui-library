import React from 'react';
import styled from 'styled-components';

interface TableProps {
  headers: string[];
  rows: (string | number)[][];
  backgroundColor?: string;
  textColor?: string;
  headerBackgroundColor?: string;
  headerTextColor?: string;
}

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
  color: ${({ textColor }) => textColor || 'black'};
`;

const StyledTh = styled.th<TableProps>`
  background-color: ${({ headerBackgroundColor }) =>
    headerBackgroundColor || '#f2f2f2'};
  color: ${({ headerTextColor }) => headerTextColor || 'black'};
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
`;

const StyledTd = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

const Table: React.FC<TableProps> = ({
  headers,
  rows,
  backgroundColor,
  textColor,
  headerBackgroundColor,
  headerTextColor,
}) => {
  return (
    <StyledTable
      headers={headers} // ✅ Ensure headers are passed
      rows={rows} // ✅ Ensure rows are passed
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      <thead>
        <tr>
          {headers.map((header, index) => (
            <StyledTh
              key={index}
              headers={headers}
              rows={rows}
              headerBackgroundColor={headerBackgroundColor}
              headerTextColor={headerTextColor}
            >
              {header}
            </StyledTh>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
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

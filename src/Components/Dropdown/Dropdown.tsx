import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledSelect = styled.select<DropdownProps>`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: ${({ backgroundColor, disabled, disabledBackgroundColor }) =>
        disabled ? disabledBackgroundColor || "#e0e0e0" : backgroundColor || "white"};
    color: ${({ textColor }) => textColor || "black"};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
    opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const Dropdown: React.FC<DropdownProps> = ({
    options,
    onChange,
    disabled,
    backgroundColor,
    textColor,
    disabledBackgroundColor,
}) => {
    return (
        <StyledSelect
            options={options}
            onChange={onChange}
            defaultValue=""
            disabled={disabled}
            backgroundColor={backgroundColor}
            textColor={textColor}
            disabledBackgroundColor={disabledBackgroundColor}
        >
            <option value="" disabled>Select an option</option>
            {options.map((option, index) => (
                <option key={`${option.value}-${index}`} value={option.value}>
                    {option.label}
                </option>
            ))}
        </StyledSelect>
    );
};

export default Dropdown;
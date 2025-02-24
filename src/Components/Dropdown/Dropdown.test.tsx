import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dropdown from "./Dropdown";
import { omit } from 'lodash';
import { DropdownProps } from "./Dropdown.types";

const TestWrapper: React.FC<DropdownProps> = ({
    options,
    onChange,
    disabled,
    backgroundColor,
    textColor,
    disabledBackgroundColor,
    ...rest
}) => {
    const filteredProps = omit(rest, ['backgroundColor', 'textColor', 'disabledBackgroundColor']);
    return (<Dropdown
        options={options}
       onChange={onChange}
        disabled={disabled}
        backgroundColor={backgroundColor}
        textColor={textColor}
        disabledBackgroundColor={disabledBackgroundColor}
        {...filteredProps}
    />);
}

describe("Dropdown Component", () => {
    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
    ];

    test("renders the dropdown component", () => {
        render(<Dropdown options={options} onChange={() => {}} />);
        expect(screen.getByRole("combobox")).toBeInTheDocument();
    });



    test("renders disabled dropdown when disabled is true", () => {
        render(<Dropdown options={options} onChange={() => {}} disabled />);
        expect(screen.getByRole("combobox")).toBeDisabled();
    });

    test("renders the default selected option", () => {
        render(<Dropdown options={options} onChange={() => {}} />);
        expect(screen.getByRole("combobox")).toHaveValue("");
    });

    test("applies custom background and text color when provided", () => {
        render(<TestWrapper options={options} onChange={() => {}} backgroundColor="lightblue" textColor="darkblue" />);
        const selectElement = screen.getByRole("combobox");
        expect(getComputedStyle(selectElement).backgroundColor).toBe("lightblue");
        expect(getComputedStyle(selectElement).color).toBe("darkblue");
    });

    test("applies disabled background color and styles when disabled", () => {
        render(<TestWrapper options={options} onChange={() => {}} disabled disabledBackgroundColor="lightgray" />);
        const selectElement = screen.getByRole("combobox");
        expect(getComputedStyle(selectElement).backgroundColor).toBe("lightgray");
        expect(selectElement).toBeDisabled();
        expect(selectElement).toHaveStyle("cursor: not-allowed");
        expect(selectElement).toHaveStyle("opacity: 0.6");
    });
});
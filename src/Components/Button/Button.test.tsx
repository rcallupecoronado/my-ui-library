import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
    test("renders the button with given label", () => {
        render(
            <Button label="Click Me" onClick={() => {}} disabled={false} />
        );
        expect(screen.getByText("Click Me")).toBeInTheDocument();
    });

    test("button should be disabled when disabled prop is true", () => {
        render(
            <Button label="Disabled" onClick={() => {}} disabled={true} />
        );
        expect(screen.getByText("Disabled")).toBeDisabled();
    });

    test("calls onClick function when clicked", () => {
        const handleClick = jest.fn(); // Mock function
        render(
            <Button label="Click Me" onClick={handleClick} disabled={false} />
        );
        fireEvent.click(screen.getByText("Click Me"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("checks that the component is visible", () => {
        const { getByText } = render(<Button label="Visible" onClick={() => {}} />);
        expect(getByText("Visible")).toBeVisible();
    });

    test("checks that the background color changed when disabled", () => {
        const { getByRole } = render(<Button label="Test" disabled={true} onClick={() => {}} />);
        expect(getByRole('button')).toHaveStyle('background-color: rgb(204, 204, 204);');
    });
});
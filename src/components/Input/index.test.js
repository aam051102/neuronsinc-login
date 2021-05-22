import { render, screen } from "@testing-library/react";
import Input from "./";

test("renders password field", () => {
    render(<Input type="password" />);

    const passwordField_DOM = screen.getByTestId(/password-field/i);
    expect(passwordField_DOM).toBeInTheDocument();
});

test("renders field with correct type property", () => {
    render(<Input type="email" />);

    const inputField_DOM = screen.getByTestId(/input-field/i);
    expect(inputField_DOM).toHaveAttribute("type", "email");
});

test("renders field with correct name property", () => {
    render(<Input name="custom-name" />);

    const inputField_DOM = screen.getByTestId(/input-field/i);
    expect(inputField_DOM).toHaveAttribute("name", "custom-name");
});

test("renders field and label with correlating ids", () => {
    render(<Input id="custom-id" />);

    const inputField_DOM = screen.getByTestId(/input-field/i);
    const inputLabel_DOM = screen.getByTestId(/input-label/i);
    expect(inputField_DOM).toHaveAttribute("id", "custom-id");
    expect(inputLabel_DOM).toHaveAttribute("for", "custom-id");
});

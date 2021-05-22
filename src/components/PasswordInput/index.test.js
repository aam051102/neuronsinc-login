import { render, screen } from "@testing-library/react";
import PasswordInput from "./";

test("renders password field", () => {
    render(<PasswordInput />);

    const inputField_DOM = screen.getByTestId(/input-field/i);
    expect(inputField_DOM).toBeInTheDocument();
});

test("changes password field type", () => {
    render(<PasswordInput />);

    const inputField_DOM = screen.getByTestId(/input-field/i);
    const showPasswordButton_DOM = screen.getByTestId(/show-password-button/i);

    // Before click
    expect(inputField_DOM).toHaveAttribute("type", "password");

    // After click once
    showPasswordButton_DOM.click();
    expect(inputField_DOM).toHaveAttribute("type", "text");

    // After click twice
    showPasswordButton_DOM.click();
    expect(inputField_DOM).toHaveAttribute("type", "password");
});

test("passes properties to input", () => {
    render(<PasswordInput name="custom-name" id="custom-id" />);

    const inputField_DOM = screen.getByTestId(/input-field/i);
    expect(inputField_DOM).toHaveAttribute("name", "custom-name");
});

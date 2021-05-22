import { render, screen } from "@testing-library/react";
import Form from "./";
import Input from "../Input";

test("validates pattern correctly", () => {
    const testOutput = jest.fn();

    render(
        <Form
            onFormValid={() => {
                testOutput(true);
            }}
        >
            <Input name="custom-field" type="text" pattern="^_[A-z]*_$" />

            <button type="submit" data-testid="submit-button"></button>
        </Form>
    );

    const submitButton_DOM = screen.getByTestId(/submit-button/i);
    const inputField_DOM = screen.getByTestId(/input-field/i);

    // Test correct pattern
    inputField_DOM.value = "_test_";
    submitButton_DOM.click();
    expect(testOutput).toHaveBeenCalledTimes(1);

    // Test incorrect pattern
    inputField_DOM.value = "test";
    submitButton_DOM.click();
    expect(testOutput).toHaveBeenCalledTimes(1);
});

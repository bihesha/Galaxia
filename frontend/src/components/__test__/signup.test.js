import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Signup from '../signup/signup';

test('Fullname input should be rendered', () => {
    render(<Signup />);
    const fullnameInputElement = screen.getByPlaceholderText(/Enter your fullname/i);
    expect(fullnameInputElement).toBeTruthy();
});

test('Email input should be rendered', () => {
    render(<Signup />);
    const emailInputElement = screen.getByPlaceholderText(/Enter your email/i);
    expect(emailInputElement).toBeTruthy();
});

test('Job Status input should be rendered', () => {
    render(<Signup />);
    const jobStatusInputElement = screen.getByPlaceholderText(/Enter your job status/i);
    expect(jobStatusInputElement).toBeTruthy();
});

test('Password input should be rendered', () => {
    render(<Signup />);
    const passwordInputElement = screen.getByPlaceholderText(/Enter your password/i);
    expect(passwordInputElement).toBeTruthy();
});

test('Confirm Password input should be rendered', () => {
    render(<Signup />);
    const confirmPasswordInputElement = screen.getByPlaceholderText(/Enter your confirm password/i);
    expect(confirmPasswordInputElement).toBeTruthy();
});

test('Button input should be rendered', () => {
    render(<Signup />);
    const buttonInputElements = screen.getAllByRole("button");
    expect(buttonInputElements.length).toBe(3);
});

test('Fullname input should be empty', () => {
    render(<Signup />);
    const fullnameInputElement = screen.getByPlaceholderText(/Enter your fullname/i);
    expect(fullnameInputElement.value).toBe("");
});

test('Email input should be empty', () => {
    render(<Signup />);
    const emailInputElement = screen.getByPlaceholderText(/Enter your email/i);
    expect(emailInputElement.value).toBe("");
});

test('Job Status input should be empty', () => {
    render(<Signup />);
    const jobStatusInputElement = screen.getByPlaceholderText(/Enter your job status/i);
    expect(jobStatusInputElement.value).toBe("");
});

test('Password input should be empty', () => {
    render(<Signup />);
    const passwordInputElement = screen.getByPlaceholderText(/Enter your password/i);
    expect(passwordInputElement.value).toBe("");
});

test('Confirm Password input should be empty', () => {
    render(<Signup />);
    const confirmPasswordInputElement = screen.getByPlaceholderText(/Enter your confirm password/i);
    expect(confirmPasswordInputElement.value).toBe("");
});

test('Error message should be displayed for mismatcheds passwords', () => {
    render(<Signup />);
    const passwordInputElement = screen.getByPlaceholderText(/Enter your password/i);
    const confirmPasswordInputElement = screen.getByPlaceholderText(/Enter your confirm password/i);
    const signUpButton = screen.getByRole("button", { name: /sign up/i });

    fireEvent.change(passwordInputElement, { target: { value: 'dil123' } });
    fireEvent.change(confirmPasswordInputElement, { target: { value: 'dil456' } });

    fireEvent.click(signUpButton);

    const errorMessage = screen.getByText(/passwords do not match/i);
    expect(errorMessage).toBeInTheDocument();
});
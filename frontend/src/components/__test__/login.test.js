import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../login/login';
  
test('Email input should be rendered', () => {
    render(<Login/>);
    const emailInputElement = screen.getByPlaceholderText(/Enter your email/i);
    expect(emailInputElement).toBeTruthy();
})

test('Password input should be rendered', () => {
    render(<Login/>);
    const passwordInputElement = screen.getByPlaceholderText(/Enter your password/i);
    expect(passwordInputElement).toBeTruthy();
})

test('Button input should be rendered', () => {
    render(<Login/>);
    const buttonInputElements = screen.getAllByRole("button");
    expect(buttonInputElements.length).toBe(3);
})

test('Email input should be empty', () => {
    render(<Login/>);
    const emailInputElement = screen.getByPlaceholderText(/Enter your email/i);
    expect(emailInputElement.value).toBe("");
})

test('Password input should be empty', () => {
    render(<Login/>);
    const passwordInputElement = screen.getByPlaceholderText(/Enter your password/i);
    expect(passwordInputElement.value).toBe("");
})


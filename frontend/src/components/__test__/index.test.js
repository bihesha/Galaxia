import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import '@testing-library/jest-dom';
import Index from '../Index/index';

test('renders the title Galaxia', () => {
    render(
        <Router>
          <Index />
        </Router>
    );
    const titleElement = screen.getAllByText(/Galaxia/i);
    expect(titleElement).toEqual(expect.arrayContaining(titleElement));
});

test('renders the Login button', () => {
    render(
        <Router>
          <Index />
        </Router>
    );
    const loginButton = screen.getByRole('link', { name: /login/i });
    expect(loginButton).toBeInTheDocument();
});

test('renders the Signup button', () => {
    render(
        <Router>
          <Index />
        </Router>
    );
    const signupButton = screen.getByRole('link', { name: /signup/i });
    expect(signupButton).toBeInTheDocument();
});
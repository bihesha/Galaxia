import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Mars from '../MARS/mars';
import axios from 'axios';

jest.mock('axios');

test('renders Mars component', () => {
    render(<Mars />);
    const headingElement = screen.getByText('Mars Rover Photos');
    expect(headingElement).toBeInTheDocument();
});

test('displays form elements', () => {
    render(<Mars />);
    const searchElement = screen.getByText('Search');
    const solInputElement = screen.getByPlaceholderText('Enter Sol range');
    const comboBoxElement = screen.getByRole('combobox');

    expect(searchElement).toBeInTheDocument();
    expect(solInputElement).toBeInTheDocument();
    expect(comboBoxElement).toBeInTheDocument();
});

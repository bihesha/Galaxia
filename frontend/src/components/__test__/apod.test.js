import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import APOD from '../APOD/apod';

test('renders A Picture of the Day title', () => {
    render(<APOD/>);
    const headingElement = screen.getByText('A Picture of the Day');
    expect(headingElement).toBeInTheDocument();
});
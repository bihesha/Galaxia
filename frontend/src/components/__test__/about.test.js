import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../About/about';

test('renders the title Most Famous Astronauts', () => {
    render(<About/>);
    const titleElement = screen.getByText(/Most Famous Astronauts/i);
    expect(titleElement).toBeInTheDocument();
});

test('renders all astronaut cards', () => {
    render(<About/>);
    const astronautCards = screen.getAllByRole('img', { name: /Astronaut/i });
    expect(astronautCards.length).toBe(8); 
});
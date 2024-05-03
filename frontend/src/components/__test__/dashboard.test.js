import { render , screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from '../Dashboard/dashboard';

test('renders slider images', () => {
    render(<Dashboard />);
    const sliderImages = screen.getAllByAltText(/Slide/);
    expect(sliderImages.length).toBe(5);
});

test('renders Features heading', () => {
    render(<Dashboard />);
    const featuresHeading = screen.getByText('Features');
    expect(featuresHeading).toBeInTheDocument();
});

test('renders Astronomy Picture of the Day card', () => {
    render(<Dashboard />);
    const apodCardTitle = screen.getByText('Astronomy Picture of the Day');
    expect(apodCardTitle).toBeInTheDocument();
});
  
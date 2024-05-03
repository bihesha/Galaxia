import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import EPICSearch from "../EPIC/epic";
import axios from 'axios';

jest.mock('axios');

test('renders EPICSearch component', () => {
    render(<EPICSearch />);
    const headingElement = screen.getByText('Picture of the Earth');
    expect(headingElement).toBeInTheDocument();
});

// test('fetches EPIC data on component mount', async () => {
//     const mockData = {
//       data: [{
//         date: '2019-05-30',
//         image: 'epic_image_123',
//         caption: 'Earth from EPIC'
//       }]
//     };
//     axios.get.mockResolvedValue(mockData);
//     render(<EPICSearch />);
//     await waitFor(() => {
//       expect(axios.get).toHaveBeenCalledTimes(1);
//       expect(axios.get).toHaveBeenCalledWith('https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=kKSHGjiFgdVCGK3CcxyGLsxqKJnyGuIZaQAGpsnU');
//       expect(screen.getByAltText('Earth from EPIC')).toBeInTheDocument();
//       expect(screen.getByText('Earth from EPIC')).toBeInTheDocument();
//       expect(screen.getByText('2019-05-30')).toBeInTheDocument();
//     });
// });
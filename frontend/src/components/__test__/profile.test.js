import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Profile from '../Profile/profile';
import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';

describe('Profile', () => {
    let mockAxios;
  
    // beforeEach(() => {
    //   mockAxios = new MockAdapter(axios);
    // });

    // afterEach(() => {
    //   mockAxios.reset();
    // });

    test('renders User Profile heading', () => {
        render(<Profile/>);
        const headingElement = screen.getByText('User Profile');
        expect(headingElement).toBeInTheDocument();
    });

    // test('fetches and displays user data on mount', async () => {
    //     const UserData = {
    //       user: {
    //         Fullname: 'W A Sahan Gamage',
    //         Email: 'sahan@gmail.com',
    //         JobStatus: 'Software Engineer',
    //       }
    //     };
    
    //     mockAxios.onGet('http://localhost:8070/user/get/6633b74bb02fd3ccbeab1478').reply(200, UserData);
    
    //     render(<Profile />);
    
    //     await waitFor(() => {
    //       const fullnameElement = screen.getByText(`Full Name : ${UserData.user.Fullname}`);
    //       const emailElement = screen.getByText(`Email : ${UserData.user.Email}`);
    //       const jobStatusElement = screen.getByText(`Job Status : ${UserData.user.JobStatus}`);
    //       expect(fullnameElement).toBeInTheDocument();
    //       expect(emailElement).toBeInTheDocument();
    //       expect(jobStatusElement).toBeInTheDocument();
    //     });
    // });
});

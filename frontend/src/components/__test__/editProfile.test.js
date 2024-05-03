import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import EditForm from '../EditProfile/editProfile';
import axios from 'axios';

jest.mock('axios');

test('renders EditForm component', () => {
    render(<EditForm userId="6633b74bb02fd3ccbeab1478" onClose={() => {}} />);
    const headingElement = screen.getByText('Edit User Profile');
    expect(headingElement).toBeInTheDocument();
});

test('fetches user data on component mount', async () => {
    const mockUserData = {
      _id: '6633b74bb02fd3ccbeab1478',
      Fullname: 'W A Sahan Gamage',
      Email: 'sahan@gmail.com',
      JobStatus: 'Software Engineer',
      Password: '456'
    };

    axios.get = jest.fn().mockResolvedValue({ data: { user: mockUserData } });

    render(<EditForm userId="6633b74bb02fd3ccbeab1478" onClose={() => {}} />);
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith('http://localhost:8070/user/get/6633b74bb02fd3ccbeab1478');
      expect(screen.getByDisplayValue('W A Sahan Gamage')).toBeInTheDocument();
      expect(screen.getByDisplayValue('sahan@gmail.com')).toBeInTheDocument();
      expect(screen.getByDisplayValue('Software Engineer')).toBeInTheDocument();
      expect(screen.getByDisplayValue('456')).toBeInTheDocument();
    });
});

// test('updates user data on Save button click', async () => {
//     axios.put = jest.fn().mockResolvedValue({ data: true });

//     render(<EditForm userId="6633b74bb02fd3ccbeab1478" onClose={() => {}} />);
    
//     fireEvent.change(screen.getByLabelText('Full Name:'), { target: { value: 'Sahan Gamage' } });
//     fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'sahan@gmail.com' } });
//     fireEvent.change(screen.getByLabelText('Job Status:'), { target: { value: 'Software Engineer' } });
//     fireEvent.change(screen.getByLabelText('Password:'), { target: { value: '456' } });

//     fireEvent.click(screen.getByText('Save'));

//     await waitFor(() => {
//       expect(axios.put).toHaveBeenCalledTimes(1);
//       expect(axios.put).toHaveBeenCalledWith('http://localhost:8070/user/update/6633b74bb02fd3ccbeab1478', {
//         Fullname: 'Sahan Gamage',
//         Email: 'sahan@gmail.com',
//         Jobstatus: 'Software Engineer',
//         Password: '456'
//       });
//     });
// });

test('calls onClose callback on Cancel button click', () => {
    const onCloseMock = jest.fn();
    render(<EditForm userId="6633b74bb02fd3ccbeab1478" onClose={onCloseMock} />);
    fireEvent.click(screen.getByText('Cancel'));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
});
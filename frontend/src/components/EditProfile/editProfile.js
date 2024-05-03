import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

export default function EditForm ({userId, onClose}) {
    const [id, setId] = useState('');
    const [Fullname, setFullname] = useState('');
    const [Email, setEmail] = useState('');
    const [Jobstatus, setJobStatus] = useState("");
    const [Password, setPassword] = useState('');
    const params = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await axios.get(`https://galaxia-explorers.onrender.com/user/get/${userId}`);
                const userData = result.data.user;

                setId(userData._id);
                setFullname(userData.Fullname);
                setEmail(userData.Email);
                setJobStatus(userData.JobStatus);
                setPassword(userData.Password);
            } catch (error) {
                // console.error("Error fetching user data:", error);
            }
        }
        getData();
    },[userId]);

    const handleClose = () => {
        onClose();
    }

    const updateUser = async () => {
        try {
            const response = await axios.put(`https://galaxia-explorers.onrender.com/update/${params.id}`, {
                Fullname, Email, Jobstatus, Password }, 
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.data) {
                alert("Employee Updated Successfully..!");
                window.location.href = `/profile/${id}`;
            }
        } catch (error) {
            console.error("Error updating user:", error);
        }
    }

    return(
        <>
            <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-75">
                <div className="max-w-md p-8 bg-white rounded-md md:w-full">
                    <h2 className="mb-4 font-sans text-3xl font-bold">Edit User Profile</h2>
                    <form>
                        <div className="mb-4">
                            <label className="font-sans font-bold">Full Name:</label>
                            <input type="text" id="fullname" value={Fullname} onChange={(e) => setFullname(e.target.value)} className="w-full p-2 border rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label className="font-sans font-bold">Email:</label>
                            <input type="email" id="email" value={Email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label className="font-sans font-bold">Job Status:</label>
                            <input type="text" id="jobstatus" value={Jobstatus} onChange={(e) => setJobStatus(e.target.value)} className="w-full p-2 border rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label className="font-sans font-bold">Password:</label>
                            <input type="password" id="password" value={Password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded-md" />
                        </div>
                        <div className="flex justify-end">
                            <button type="button" className="px-4 py-2 mr-2 text-white bg-red-500 rounded-md" onClick={handleClose}>Cancel</button>
                            <button type="button" className="px-4 py-2 text-white bg-green-500 rounded-md" onClick={updateUser}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

import React, { useState , useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import userImg from '../../Images/user.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditForm from '../EditProfile/editProfile';

export default function Profile() {

    const [data, setData] = useState('');
    const [showEditForm, setShowEditForm] = useState(false);
    const params = useParams();

    useEffect(() => {
        getData();
    });

    const getData = async () => {
        try {
            let result = await axios.get(`http://localhost:8070/user/get/${params.id}`);

            if(result.status === 200 ){
                setData(result.data);
            }
        } catch (error) {
            // console.error("Error fetching user data:", error);
        }
    }

    //delete
    const deleteUser = async (_id) => {
        if (window.confirm("Are you sure that you want to delete this user account?")) {
            const res = await axios.delete(`http://localhost:8070/user/delete/${_id}`);
            if (res.status === 200) {
                window.location.href = `/`;
                toast.error('User account deleted..!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
    }

    return (
        <>
            <div className="pt-5 font-mono md:text-5xl text-3xl font-bold text-center">User Profile</div>
            <div className='grid h-screen place-items-center'>
                {showEditForm && <EditForm userId={params.id} onClose={() => setShowEditForm(false)}/>}
                    <div className='rounded-3xl p-4 md:p-6 w-[300px] md:w-[850px] text-white h-[550px] md:h-[450px] bg-purple-300'>
                        <div className='flex flex-col items-center justify-between md:flex-row'>
                        <img src={userImg} className='mb-4 rounded-full h-36 w-36 md:mb-0' alt="" />
                        <div className='md:ml-0'>
                            <div>
                                <span className='font-mono text-xl text-black md:text-4xl'>{data.user?.Fullname}</span><br/>
                                <span className='font-mono text-xs text-black md:text-xl'>{data.user?.JobStatus}</span>
                            </div>
                        </div>
                        <div className='md:ml-4'>
                            <div className='grid gap-2 mt-4'>
                                <button className="px-6 py-2 font-sans text-black duration-500 bg-white rounded hover:bg-green-600 hover:text-white"
                                        onClick={()=> setShowEditForm(true)}>Edit</button>
                            </div>
                            <div className='grid gap-2 mt-4 md:mt-3'>
                                <button className="px-6 py-2 font-sans text-black duration-500 bg-white rounded hover:bg-red-600 hover:text-white"
                                onClick={()=> deleteUser(params.id)}>Delete</button>
                            </div>
                        </div>
                        </div>
                        <div className='pt-10 pl-8'>
                            <div className='grid'>
                                <span className='font-mono text-xs text-black md:text-xl'>Full Name : {data.user?.Fullname}</span>
                            </div>
                            <div className='grid pt-4'>
                                <span className='font-mono text-xs text-black md:text-xl'>Email : {data.user?.Email}</span>
                            </div>
                            <div className='grid pt-4'>
                                <span className='font-mono text-xs text-black md:text-xl'>Job Status : {data.user?.JobStatus}</span>
                            </div>
                            <div className='grid pt-4'>
                                <span className='font-mono text-xs text-black md:text-xl'>Password : xxxx xxx xxx</span>
                            </div>
                        </div>
                    </div>
                <ToastContainer/>
            </div>
        </>
    );
}

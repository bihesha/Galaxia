import React, { useState } from "react";
import backIndex from '../../Images/backIndex.jpg';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {

  const [Fullname, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [JobStatus, setJobStatus] = useState("");
  const [Password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");

  function Submit(e) {
    e.preventDefault();

    const newUser = {
      Fullname, Email, JobStatus, Password, Confirmpassword
    };

    if (Password !== Confirmpassword) {
      toast.error('Passwords do not match...!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
      return;
    }

    axios.post("http://localhost:8070/auth/add", newUser).then(() => {
      alert("New User Created...");
      window.location.href = '/login';
    }).catch((error)=> {
      alert(error)
    })
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-cover" style={{backgroundImage: `url(${backIndex})`}}>
      <div className="absolute top-0 left-0 right-0 flex justify-between px-4 py-2">
        <a href="/" className="mt-5 ml-4 font-mono text-4xl font-bold text-white">Galaxia</a>
        <div className="absolute right-0 flex justify-between px-4 py-2 space-x-4 top-4">
          <button className="px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-800" onClick={() => window.location.href = '/login'}>Login</button>
          <button className="px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-800" onClick={() => window.location.href = '/add'}>Signup</button>
        </div>
      </div>
      <div className="w-full max-w-sm p-8 bg-white bg-opacity-50 rounded-lg shadow-lg md:max-w-md">
        <h1 className="mb-4 text-4xl font-bold text-center">Sign up</h1>
        <form className="space-y-4" onSubmit={Submit}>
            <div>
                <label className="block mb-1 text-xl font-semibold" htmlFor="fullname">Fullname</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type="text" id="fullname" name="fullname" placeholder="Enter your fullname" onChange={(e)=>{
                  setName(e.target.value);
                }} required/>
            </div>
            <div>
                <label className="block mb-1 text-xl font-semibold" htmlFor="email">Email</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type="email" id="email" name="email" placeholder="Enter your email" onChange={(e)=>{
                  setEmail(e.target.value);
                }} required/>
            </div>
            <div>
                <label className="block mb-1 text-xl font-semibold" htmlFor="jobstatus">Job Status</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type="text" id="jobstatus" name="jobstatus" placeholder="Enter your job status" onChange={(e)=>{
                  setJobStatus(e.target.value);
                }} required/>
            </div>
            <div>
                <label className="block mb-1 text-xl font-semibold" htmlFor="password">Password</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type="password" id="password" name="password" placeholder="Enter your password" onChange={(e)=>{
                  setPassword(e.target.value);
                }} required/>
            </div>
            <div>
                <label className="block mb-1 text-xl font-semibold" htmlFor="confirmpassword">Confirm Password</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type="password" id="confirmpassword" name="confirmpassword" placeholder="Enter your confirm password" onChange={(e)=>{
                  setConfirmPassword(e.target.value);
                }} required/>
            </div>
            <button className="w-full px-4 py-2 text-white transition duration-300 bg-purple-500 rounded-md hover:bg-purple-800">Sign up</button>

            <div className="mt-4 text-center text-gray-800">
              <span className="block mb-2">If you already have an account?</span>
              <a href="/login" className="text-purple-900 hover:underline">Login here</a>
            </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
}
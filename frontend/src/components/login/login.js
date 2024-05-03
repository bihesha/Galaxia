import React, { useState, useContext } from "react";
import backIndex from '../../Images/backIndex.jpg';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from '../ContextComponents/ContextComponent';

export default function Login() {

  const { setUser } = useContext(UserContext);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  function HandleLogin(e){
    e.preventDefault();

    const user = {
      Email, Password
    };

    axios.post("https://galaxia-explorers.onrender.com/auth/login", user).then((response)=>{
      setUser(response.data.user);
      toast.success('Login successful..!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      window.location.href = '/home';
    }).catch((error)=>{
      toast.error('Please enter correct details..!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover" style={{backgroundImage: `url(${backIndex})`}}>
      <div className="absolute top-0 left-0 right-0 flex justify-between px-4 py-2">
        <a href="/" className="mt-5 ml-4 font-mono text-4xl font-bold text-white">Galaxia</a>
        <div className="absolute right-0 flex justify-between px-4 py-2 space-x-4 top-4">
          <button className="px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-800" onClick={() => window.location.href = '/login'}>Login</button>
          <button className="px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-800" onClick={() => window.location.href = '/add'}>Signup</button>
        </div>
      </div>
      <div className="w-full max-w-sm p-8 bg-white bg-opacity-50 rounded-lg shadow-lg md:max-w-md">
        <h1 className="mb-4 text-3xl font-bold text-center md:text-4xl">Login</h1>
        <form className="space-y-4" onSubmit={HandleLogin}>
          <div>
            <label className="block mb-1 text-lg font-semibold md:text-xl" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 text-base border border-gray-300 rounded-md md:text-lg focus:outline-none focus:border-blue-500" type="email" id="email" name="email" placeholder="Enter your email" onChange={(e)=>{
              setEmail(e.target.value);
            }}/>
          </div>
          <div>
            <label className="block mb-1 text-lg font-semibold md:text-xl" htmlFor="password">Password</label>
            <input className="w-full px-3 py-2 text-base border border-gray-300 rounded-md md:text-lg focus:outline-none focus:border-blue-500" type="password" id="password" name="password" placeholder="Enter your password" onChange={(e)=>{
              setPassword(e.target.value);
            }}/>
          </div>
          <button className="w-full px-4 py-2 text-lg text-white transition duration-300 bg-purple-500 rounded-md md:text-xl hover:bg-purple-800">Login</button>
  
          <div className="mt-4 text-center text-gray-800">
            <span className="block mb-2">If you don’t have an account?</span>
            <a href="/add" className="text-purple-900 hover:underline">Signup here</a>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
  
}

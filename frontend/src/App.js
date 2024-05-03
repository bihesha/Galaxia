import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect} from "react";
import UserContext from "./components/ContextComponents/ContextComponent";

// Navbar and Footer
import Header from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

// UserManagementSystem
import Index from './components/Index';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Profile from './components/Profile/profile';

// Dashboard and Navbar pages
import Dashboard from './components/Dashboard/dashboard';
import APODSearch from './components/APOD/apod';
import Mars from './components/MARS/mars';
import EPICSearch from './components/EPIC/epic';
import About from './components/About/about';

function App() {

    // user details pass
    const [user, setUser] = useState(() => {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    });
    useEffect(() => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
      }
    }, [user]);

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Header/>
          <Routes>
            <Route path='' element={<Index/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/add' element={<Signup/>} />
            <Route path='/home' element={<Dashboard/>} />
            <Route path='/profile/:id' element={<Profile/>} />
            <Route path='/picture of the day' element={<APODSearch/>} />
            <Route path='/mars rovers pictures' element={<Mars/>} />
            <Route path='/picture of the earth' element={<EPICSearch/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
        <Footer/>
      </UserContext.Provider>
    </Router>
  );
}

export default App;

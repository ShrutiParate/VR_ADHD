/*
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './Homepage';
import RegistrationForm from './RegistrationForm';
import SignIn from './SignIn';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
       
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
          </ul>
        </nav>

        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>

    
  );
}

export default App;

*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import VRImage from './virtual-reality.jpg';
import About from './About';
import WhatWeOffer from './WhatWeOffer';
import Questions from './Questions';
import ContactUs from './ContactUs';
import Login from './Login';
import Register from './Register';

function App() {
  // Smooth scrolling to sections
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="container">
        <header className="header">
          <div className="logo">
            <h1>VRJoy</h1>
          </div>
          <nav className="navbar">
            <ul>
              <li><Link to="/" onClick={() => handleScroll('home')}>Home</Link></li>
              <li><Link to="/" onClick={() => handleScroll('about')}>About Us</Link></li>
              <li><Link to="/" onClick={() => handleScroll('offer')}>What We Offer</Link></li>
              <li><Link to="/" onClick={() => handleScroll('contact')}>Contact</Link></li>
              <li><Link to="/login">Login</Link></li>
              
              
            </ul>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          {/* Main page with sections */}
          <Route
            path="/"
            element={
              <div>
                <Home />
                <div id="about"><About /></div>
                <div id="offer"><WhatWeOffer /></div>
                <div id="questions"><Questions /></div>
                <div id="contact"><ContactUs /></div>
              </div>
            }
          />
          {/* Login and Register as separate pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

// Home Component
function Home() {
  return (
    <div id="home" className="main-content">
      <div className="text-content">
        <h2>The Virtual Reality therapy platform for ADHD children care</h2>
        <p>
          With the power of virtual reality, VRJoy provides effective solutions and therapy for children,
          revolutionizing the way therapy is delivered and experienced.
        </p>
        <button className="register-button"><li><Link to="/register">Register</Link></li></button>
      </div>
      <div className="image-content">
        <img src={VRImage} alt="Virtual Reality Therapy" />
      </div>
    </div>
  );
}

export default App;

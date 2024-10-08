import React, { useState } from 'react';
import './dash.css'; 
import logo from '../../images/vishnu.png'
import Home from '../home';
import Footer from '../footer';
import AboutUs from '../aboutus';

import { Link } from 'react-router-dom';


const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'interact':
        return (
          <div>
            <h2>Interact with Alumni</h2>
            <p>This is the Interact section content.</p>
          </div>
        );
      case 'donate':
        return (
          <div>
            <h2>Donate to the Alumni Fund</h2>
            <p>This is the Donate section content.</p>
          </div>
        );
      case 'aboutus':
        return <AboutUs />;
      case 'jobdiscussion':
        return (
          <div>
            <h2>Job Discussion</h2>
            <p>This is the Job Discussion section content.</p>
          </div>
        );
      default:
        return (
          <div>
            <h2>Welcome to VishnAlumni</h2>
          </div>
        );
    }
  };

  return (
    <div className="main-dash">
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" height="50" width="50" />
            <p>VishnAlumni</p>
          </div>
          <ul>

            <li>
              <a href="javascript:void(0)" onClick={(e) => {e.preventDefault(); setActiveSection('home')}}>
                Home
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" onClick={(e) => {e.preventDefault(); setActiveSection('interact')}}>
                Interact
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" onClick={(e) => {e.preventDefault(); setActiveSection('donate')}}>
                Donate
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" onClick={(e) => {e.preventDefault(); setActiveSection('jobdiscussion')}}>
                Job Discussion
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" onClick={(e) => {e.preventDefault(); setActiveSection('aboutus')}}>
                About Us
              </a>
            </li>
            <li>
              <a href="/signup">
                Login/SignUp
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>{renderSection()}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Dashboard;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ReactLogo from '../src/images/logo192.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='container'>
        <nav className='navbar'>
            <img src={ReactLogo} alt="React Logo" />
            <h3 className='reactfacts'>ReactFacts</h3>
            <h4 className='project1'>React Course Project-1</h4>
            </nav>
            <main className='main-contents'>
            <h1 className='fun'>Fun facts about React</h1>
              <ul className='list'>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
              </ul>
            </main>
        
    </div>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar';
import InTouch from './Components/InTouch';
import About from './Components/About';
import Projects from './Components/Projects';
import './CSS/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar />
    <InTouch />
    <About/>
    <Projects/>
  </>
);


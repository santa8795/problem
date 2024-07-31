import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About'; // Corrected import to match the component's file name
import Intro from './Components/Intro';
import Skill from './Components/Skill';
import Project from './Components/Project'; // Make sure to import the Project component
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<><Intro /><About /></>} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/projects" element={<Project />} />            
        </Routes>
        <Project/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

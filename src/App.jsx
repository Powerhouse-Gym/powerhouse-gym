import React from 'react';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Youth from './components/Youth';
import Training from './components/Training';
import Crossfit from './components/Crossfit';
import AfterSchool from './components/AfterSchool';
import Team from './components/Team';
import Footer from './components/Footer';
import skulls from "./assets/skulls.png"




function App() {
  return (
    <div className = "app">
      <Navbar />
    

      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/youth" element={<Youth /> } />
        <Route path="/training" element={<Training /> } />
        <Route path="/crossfit" element={ <Crossfit />} />
        <Route path="/afterschool" element={<AfterSchool /> } />
        <Route path="/team" element={<Team /> } />
      </Routes>

   <Footer />


    </div>
  );
}

export default App;
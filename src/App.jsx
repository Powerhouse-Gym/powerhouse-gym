// import React, {useContext} from 'react';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Training from './components/Training';
import Crossfit from './components/Crossfit';
import AfterSchool from './components/AfterSchool';
import Team from './components/Team';
// import Footer from './components/Footer';
import FooterTest from './components/FooterTest';
import PersonalTraining from './components/PersonalTraining';
import AboutUs from './components/AboutUs';
import Merch from './components/Merch';





function App() {

 
return (
    <div className = "app">
      <Navbar />  

 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal-training" element={<PersonalTraining />} />
        <Route path="/training" element={<Training />} />
        <Route path="/crossfit" element={<Crossfit />} />
        <Route path="/afterschool" element={<AfterSchool />} />
        <Route path="/team" element={<Team />} />
        <Route path = "/aboutus" element = {<AboutUs />} />
        <Route path = "/merch" element = {<Merch />} />
      </Routes>

      <FooterTest />


    </div>
  );
}

export default App;
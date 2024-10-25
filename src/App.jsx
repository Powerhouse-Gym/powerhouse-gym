import React, {useEffect, useContext} from 'react';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Training from './components/Training';
import Crossfit from './components/Crossfit';
import AfterSchool from './components/AfterSchool';
import Team from './components/Team';
import Footer from './components/Footer';
import PersonalTraining from './components/PersonalTraining';
import { DarkModeContext } from './context/DarkModeProvider';




function App() {

  const {isDarkMode} = useContext(DarkModeContext)
  useEffect(() => {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }
}, [isDarkMode]);
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
      </Routes>

      <Footer />


    </div>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WeightLoss from './pages/WeightLoss';
import Survey from './pages/Survey';
import MenstrualHealth from './pages/MenstrualHealth';
import GeneralHealth from './pages/GeneralHealth';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weight-loss" element={<WeightLoss />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/menstrual-health" element={<MenstrualHealth />} />
          <Route path="/general-health" element={<GeneralHealth />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
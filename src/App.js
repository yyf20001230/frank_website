import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import MergedAbout from './components/MergedAbout';
import Research from './components/Research';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Cinematography from './components/Cinematography';
import Behavior1K from './components/Behavior1K';
import EfficientSimplex from './components/EfficientSimplex';
import PolarExpress from './components/PolarExpress';
import DelayedRL from './components/DelayedRL';
import LLMSafety from './components/LLMSafety';
import Convoice from './components/Convoice';
import Reminiscia from './components/Reminiscia';
import Quadrotor from './components/Quadrotor';
import LieDetection from './components/LieDetection';
import GptSearch from './components/GptSearch';
import News from './components/News';
import './App.css';

function MainPage() {
  return (
    <main className="main-content">
      <section id="about">
        <MergedAbout />
      </section>
      <GptSearch />
      <section id="news">
        <News />
      </section>
      <section id="work">
        <WorkExperience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="research">
        <Research />
      </section>
    </main>
  );
}

function App() {
  const location = useLocation();
  const isMorePage = location.pathname === '/more';
  return (
    <div className="App">
      <Navigation dark={isMorePage} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/more" element={<Cinematography />} />
        <Route path="/behavior1k" element={<Behavior1K />} />
        <Route path="/efficient-simplex" element={<EfficientSimplex />} />
        <Route path="/polar-express" element={<PolarExpress />} />
        <Route path="/delayed-rl" element={<DelayedRL />} />
        <Route path="/llm-safety" element={<LLMSafety />} />
        <Route path="/convoice" element={<Convoice />} />
        <Route path="/reminiscia" element={<Reminiscia />} />
        <Route path="/quadrotor" element={<Quadrotor />} />
        <Route path="/lie-detection" element={<LieDetection />} />
      </Routes>
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

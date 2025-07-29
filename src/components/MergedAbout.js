import React, { useEffect, useRef, useState } from 'react';
import './MergedAbout.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt, FaGraduationCap } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const roles = [
  'a forward deployed engineer ',
  'a robotic researcher ',
  'an amateur filmmaker ',
];

function useTypewriter(words, delay = 2000) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const timeout = useRef();

  useEffect(() => {
    const currentWord = words[index];
    if (!isDeleting && charIndex < currentWord.length) {
      setDisplay(currentWord.substring(0, charIndex + 1));
      timeout.current = setTimeout(() => setCharIndex(charIndex + 1), 80);
    } else if (isDeleting && charIndex > 0) {
      setDisplay(currentWord.substring(0, charIndex - 1));
      timeout.current = setTimeout(() => setCharIndex(charIndex - 1), 40);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout.current = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((index + 1) % words.length);
    }
    return () => clearTimeout(timeout.current);
  }, [charIndex, isDeleting, index, words, delay]);

  useEffect(() => {
    setCharIndex(0);
    setIsDeleting(false);
  }, [index]);

  return display;
}

function MergedAbout() {
  const dynamicRole = useTypewriter(roles);
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className="merged-about-section" data-aos="fade-up">
      <div className="merged-about-container">
        <div className="merged-about-left">
          <h1 className="merged-about-title">Hello there!<br/>I'm <span className="theme-name">Frank Yang</span></h1>
          <div className="merged-about-role">I am<span className="merged-about-role-dynamic">{dynamicRole}</span></div>
          <div className="merged-about-content">
            <p>
              I am an incoming Forward Deployed Engineer at <a href="https://scale.com/" target="_blank" rel="noopener noreferrer">ScaleAI</a>.
            </p>
            <p>
              I recently graduated with a CS MS degree from Northwestern University, publishing a thesis on <a href="/assets/pdf/MS_Thesis_Frank.pdf" target="_blank" rel="noopener noreferrer">Safety-Assured autonomy of embodied AI agents</a> from my work at IDEAS Lab advised by Prof. <a href="http://zhulab.ece.northwestern.edu/" target="_blank" rel="noopener noreferrer">Qi Zhu</a>. Last summer, I interned at Stanford's Vision and Learning Lab advised byProf. <a href="https://profiles.stanford.edu/fei-fei-li" target="_blank" rel="noopener noreferrer">Fei-Fei Li</a>. I earned my Bachelor's in CS and Mathematics <strong>summa cum laude</strong> in 2024, also from Northwestern.
            </p>
            <p>
              I have worked at startups, research labs, and large tech companies, where I've turned ideas into marketable products. I'm fascinated by <strong>agenic AI and embodied AI</strong> applications in the industry. My research spans robot learning, safe autonomy, and control systems.
            </p>
          </div>
          <div className="merged-about-actions">
            <a className="merged-about-button" href="/assets/pdf/frank_cv.pdf" target="_blank" rel="noopener noreferrer"><FaFileAlt /> CV</a>
            <a className="merged-about-button" href="mailto:frankyang2024@northwestern.edu"><FaEnvelope /> Contact</a>
          </div>
          <div className="merged-about-social">
            <a href="https://github.com/yyf20001230" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/frankyang2000" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://scholar.google.com/citations?user=8vHoCFAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"><FaGraduationCap /></a>
          </div>
          <p className="merged-about-updated">Last updated: 07-24-2025</p>
        </div>
        <div className="merged-about-right">
          <img
            src="/assets/img/Frank.JPG"
            alt="Frank Yang headshot"
            className="merged-about-headshot"
            draggable="false"
          />
        </div>
      </div>
      <div className="scroll-indicator" onClick={() => {
        const el = document.getElementById('work');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }}>
        <span className="mouse-icon">
          <svg width="28" height="48" viewBox="0 0 28 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.5" y="1.5" width="25" height="45" rx="12.5" stroke="#bbb" strokeWidth="3" fill="none"/>
            <circle cx="14" cy="12" r="3" fill="#bbb"/>
            <text x="14" y="36" textAnchor="middle" fontSize="20" fill="#bbb" opacity="0.8" className="down-arrow-svg">&#8595;</text>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default MergedAbout; 
import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt, FaGraduationCap } from 'react-icons/fa';

const roles = [
  'a software engineer',
  'a robotics researcher',
  'an amateur filmmaker',
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

function About() {
  const dynamicRole = useTypewriter(roles);

  return (
    <div className="about-landing fullscreen no-orange">
      <div className="about-landing-inner">
        <div className="about-left about-left-centered">
          <h1 className="about-title">
            My name<br />is <span className="about-name"><b>Frank</b></span>
          </h1>
          <div className="about-role">
            <span className="about-role-static">I am</span>
            <span className="about-role-dynamic">{dynamicRole}</span>
          </div>
          <div className="about-links about-links-lower">
            <a href="mailto:frankyang2024@u.northwestern.edu" target="_blank" rel="noopener noreferrer" title="Email"><FaEnvelope /></a>
            <a href="/assets/pdf/frank_cv.pdf" target="_blank" rel="noopener noreferrer" title="CV"><FaFileAlt /></a>
            <a href="https://github.com/yyf20001230" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/frankyang2000" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
            <a href="https://scholar.google.com/citations?user=8vHoCFAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" title="Google Scholar"><FaGraduationCap /></a>
          </div>
        </div>
        <div className="about-right">
          <div className="headshot-container">
            <img
              src="assets/img/Frank.JPG"
              alt="Frank headshot"
              className="about-headshot-img"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
import React from 'react';
import './AboutMe.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

function AboutMe() {
  return (
    <div className="about-me-section">
      <div className="about-me-container">
        <div className="about-me-left">
          <h1 className="about-me-title">Hello there! I'm Frank Yang</h1>
          <p className="about-me-contact">Contact: frank.yang@northwestern.edu</p>
          
          <div className="about-me-content">
            <p>
              I am currently a <strong>Computer Science MS student</strong> at Northwestern University at the 
              <strong> Design Automation of Intelligent Systems Lab</strong> advised by Prof. 
              <strong> Qi Zhu</strong>. I also work closely with Prof. 
              <strong> Chao Huang</strong> at University of Southampton. I am also worked as a 
              <strong> Robotics Learning Intern</strong> at the Stanford Vision and Learning Lab advised by Prof. 
              <strong> Fei-Fei Li</strong>.
            </p>
            
            <p>
              I received my Bachelor's Degree with <strong>summa cum laude</strong> in Computer Science and Mathematics in 2024, 
              also from Northwestern University. I had the privilege of collaborating with Professor 
              <strong> Florian Willomitzer</strong> at the 3DIM Lab.
            </p>
            
            <p>
              I have a broad interest in <strong>robotic learning and control</strong>. I'm fascinated by the challenge of 
              building autonomous robots that navigate complex environments and perform long-horizon tasks efficiently and safely. 
              I am researching on equipping robots with safe learning and runtime decision-making capabilities within uncertain 
              environments subject to disturbances or observation delays. This interest extends from common applications like 
              self-driving vehicles to humanoid robotics.
            </p>
            
          </div>
          
          <div className="about-me-actions">
            <button className="about-me-button">
              <FaFileAlt /> CV
            </button>
            <button className="about-me-button">
              <FaEnvelope /> Contact
            </button>
          </div>
          
          <div className="about-me-social">
            <a href="https://github.com/yyf20001230" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/frank-yang-robotics/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:frank.yang@northwestern.edu" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
            </a>
          </div>
          
          <p className="about-me-updated">Last updated: 07-16-2025</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe; 
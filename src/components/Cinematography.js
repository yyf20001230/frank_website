import React from 'react';
import './Cinematography.css';

function Cinematography() {
  return (
    <div className="cinema-section">
      <div className="cinema-container">
        <div className="cinema-left">
          <h1 className="cinema-title">Cinematography & Photography</h1>
          <div className="cinema-content">
            <p>
              Outside of school, I am a freelance photographer taking landscape, portrait, and graduation photos. In my creative endeavor, I am a cinematographer working on film projects such as Applause For A Cause and TEDx. I am committed to creating cinematic lighting and true-story shots that evoke emotion.
            </p>
            <p>
              Check out my <a href="https://sashimiphotos.com" target="_blank" rel="noopener noreferrer">portfolio</a> for my fun side!
            </p>
          </div>
        </div>
        <div className="cinema-right">
          <img
            src="/assets/img/photography.png"
            alt="Cinematography"
            className="cinema-img"
            draggable="false"
          />
        </div>
      </div>

      {/* Band Section - Opposite Layout */}
      <div className="band-container">
        <div className="band-left">
          <img
            src="/assets/img/sanrensannian.PNG"
            alt="Allison Trio Band"
            className="band-img"
            draggable="false"
          />
        </div>
        <div className="band-right">
          <h2 className="band-title">Allison Trio</h2>
          <div className="band-content">
            <p>
              I play keyboard and compose songs for my band Allison Trio. We create original music that blends various genres and influences.
            </p>
          </div>
        </div>
      </div>

      {/* Teaching Section */}
      <div className="teaching-section">
        <div className="teaching-container">
          <h2 className="teaching-title">Teaching Experience</h2>
          <div className="teaching-content">
            <div className="teaching-item">
              <strong>Winter 2023</strong> - Graduate TA for <a href="https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/340.html" target="_blank" rel="noopener noreferrer">CS340: Computer Networking</a> taught by Alexandar Kuzmanovic
            </div>
            <div className="teaching-item">
              <strong>Fall 2023</strong> - Graduate TA for <a href="https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/310.html" target="_blank" rel="noopener noreferrer">CS310: Scalable Software Architectures</a> taught by Joe Hummel
            </div>
            <div className="teaching-item">
              <strong>Spring 2022</strong> - Undergraduate TA for <a href="https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/396-6.html" target="_blank" rel="noopener noreferrer">CS396: Intro to Web Development</a> taught by Sarah Van Wart
            </div>
            <div className="teaching-item">
              <strong>Winter 2022</strong> - Project Manager for Institute of Electrical and Electronics Engineers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cinematography; 
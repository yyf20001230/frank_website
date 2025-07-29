import React from 'react';
import './WorkExperience.css';

const experiences = [
  {
    title: 'Forward Deployed Engineer',
    company: 'ScaleAI',
    date: 'Present',
    description: 'Building and deploying AI solutions for real-world applications at ScaleAI. Working on large-scale data pipelines, model deployment, and customer-facing AI integrations.',
    logo: '/assets/img/scale.png',
    present: true,
    url: 'https://scale.com/',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Target',
    date: 'June 2023 - Aug 2023',
    description: 'Developed a Golang application within a Vela CI/CD pipeline to enforce security and compliance standards. Integrated Postgres with RestAPI for build lifecycle and versioning information retrieval and storage.',
    logo: '/assets/img/target.jpg',
    url: 'https://www.target.com/',
  },
  {
    title: 'SDE Intern',
    company: 'Amazon',
    date: 'Jun 2022 - Sep 2022',
    description: 'Implemented a Sagemaker site that provides benchmarked health & architecture evaluations for ML models. Presented a demo to Sagemaker engineers; received candidacy to beta-launch model cards on AWS Re:Invent.',
    logo: '/assets/img/aws.png',
    url: 'https://aws.amazon.com/sagemaker/',
  },
  {
    title: 'Robotic Research Assistant',
    company: 'Stanford Vision and Learning Lab',
    date: 'Jun 2024 - Nov 2024',
    description: 'Conducted robotic learning research and BEHAVIOR-1K benchmark development. Decomposed long-horizon tasks into learnable action primitives (pick, place, navigate) and implemented collision-free execution pipeline',
    logo: '/assets/img/stanford.png',
    url: 'https://behavior.stanford.edu/behavior-1k',
  },
  {
    title: 'Research Assistant',
    company: 'Northwestern IDEAS Lab',
    date: 'Oct 2023 - Present',
    description: 'Researched safety-assured autonomy of learning-enabled embodied AI agents. Developed runtime safety verification with POLAR-express and proposed safe online controller switch strategy for control system.',
    logo: '/assets/img/northwestern.png',
    url: 'http://zhulab.ece.northwestern.edu/',
  },
];

function WorkExperience() {
  return (
    <div className="work-section">
      <div className="work-container">
        <h1 className="work-title">Work Experience</h1>
        <div className="work-grid">
          {experiences.map((exp, idx) => (
            <a 
              href={exp.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="work-card-link"
              key={idx}
            >
              <div className={`work-card${exp.present ? ' present' : ''}`}>
                {exp.present && <div className="present-badge">Present</div>}
                <div className="work-logo-container">
                  <div className="work-logo">
                    <img src={exp.logo} alt={exp.company} width={80}/>
                  </div>
                </div>
                <div className="work-card-content">
                  <h3 className="work-card-title">{exp.title}</h3>
                  <p className="work-card-company">{exp.company}</p>
                  <p className="work-card-date">{exp.date}</p>
                  <p className="work-card-description">{exp.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkExperience; 
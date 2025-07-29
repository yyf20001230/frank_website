import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import { FaImage, FaExternalLinkAlt } from 'react-icons/fa';

const projectCategories = {
  ai: {
    title: 'AI Projects',
    color: '#ff7061',
    projects: [

      {
        title: 'Crowdlistening',
        date: 'Jan 2024 - Present',
        techStack: ['Python', 'MCP', 'Exa.ai', 'Gemini', 'Cursor'],
        description: 'MCP-powered crowd analysis and sentiment detection system for real-time event monitoring and public safety applications.',
        link: 'https://crowdlistening.com',
        media: {
          type: 'image',
          url: '/assets/img/listening.png'
        }
      },
      {
        title: 'Convoice',
        date: 'Sep 2023 - May 2024',
        techStack: ['Python', 'AWS', 'Pinecone', 'GPT', 'Google Cloud Voices', 'ElevenLabs'],
        description: 'Partnered with a student-led AI calling startup to provide businesses with context-aware voicebots featuring human-like voices and knowledge bases. Configured serverless file processing pipeline using AWS Lambda, S3, DynamoDB, and Pinecone for text and metadata extraction from file uploads.',
        link: '#',
        media: {
          type: 'image',
          url: '/assets/img/convoice.jpeg'
        }
      },
      {
        title: 'Reminiscia: Text-to-Image Search Application',
        date: 'Dec 2022 - May 2023',
        techStack: ['Python', 'CLIP', 'CoreML', 'SwiftUI'],
        description: 'Text-to-image search application using pretrained vision-language models with optimized inference speed.',
        link: 'https://github.com/yyf20001230/reminiscia',
        media: {
          type: 'image',
          url: '/assets/img/reminiscia.jpg'
        }
      },
      {
        title: 'Lie Detection: Multimodal Deception Detection System',
        date: 'Feb 2022 - Jan 2023',
        techStack: ['PyTorch', 'OpenCV', 'BERT', 'Inceptionv3', 'LSTM', 'Deep Learning'],
        description: 'Conceptualized and prototyped a multimodal deep learning model designed to detect lies using micro-facial, audio, and textual features. Achieved 76% out-of-sample classification accuracy, outperforming most existing lie detection models in scholarly research.',
        link: '#',
        media: {
          type: 'image',
          url: '/assets/img/lie.png'
        }
      }
    ]
  },
  fullstack: {
    title: 'Full Stack Projects',
    color: '#ff7061',
    projects: [
      {
        title: 'Skuy',
        date: 'Apr 2022 - Jun 2024   |   Lead Tech Engineer',
        techStack: ['React Native', 'Node.js', 'Firebase', 'RestAPI', 'Heroku', 'CI/CD'],
        description: 'Launched a cross-platform campus community network app using React Native; amassed 1000+ student users on App Store and Google Play. Led database migration from Heroku to Firebase and managed development for 8 tech engineers with CI/CD pipeline.',
        link: 'https://skuy.app',
        media: {
          type: 'image',
          url: '/assets/img/skuy.png'
        }
      },
      {
        title: 'MatchaNU',
        date: 'Jun 2021 - Feb 2022   |   Founder',
        techStack: ['SwiftUI', 'MapKit', 'CoreLocation', 'CoreData'],
        description: 'Founded a native iOS Swift application to assist 2000+ Northwestern undergraduates with course planning and building navigation. Web-scraped 5000+ course catalogs and integrated Google Geocoding API for optimal walking routes.',
        link: 'https://github.com/yyf20001230/MatchaNU',
        media: {
          type: 'image',
          url: '/assets/img/matcha.jpg'
        }
      }
    ]
  },
  robotics: {
    title: 'Robotics Projects',
    color: '#ff7061',
    projects: [
      {
        title: 'Quadrotor Design and Control',
        date: 'Mar 2024 - Jun 2024',
        techStack: ['C/C++', 'Raspberry Pi', 'PID Control'],
        description: 'Complete quadcopter flight control system developed over 9 weeks, achieving stable hover, multi-axis control, remote operation via UDP, and autonomous flight with Vive position tracking.',
        link: 'https://github.com/yyf20001230/CS410',
        media: {
          type: 'image',
          url: '/assets/img/quadrotor.jpg'
        }
      }
    ]
  }
};

function Projects() {
  const navigate = useNavigate();

  const handleConvoiceClick = () => {
    navigate('/convoice');
  };

  const handleReminisciaClick = () => {
    navigate('/reminiscia');
  };

  const handleQuadrotorClick = () => {
    navigate('/quadrotor');
  };

  const handleLieDetectionClick = () => {
    navigate('/lie-detection');
  };

  return (
    <div className="projects-section">
      <div className="projects-container">
        <div className="projects-left">
          <h1 className="projects-title">Projects</h1>
          
          {Object.entries(projectCategories).map(([categoryKey, category]) => (
            <div key={categoryKey} className="project-category">
              <h2 className="category-title" style={{ color: category.color }}>
                {category.title}
              </h2>
              <div className="category-projects">
                {category.projects.map((project, idx) => (
                  <div 
                    className={`project-card ${project.title === 'Convoice' || project.title === 'Reminiscia: Text-to-Image Search Application' || project.title === 'Quadrotor Design and Control' || project.title === 'Lie Detection: Multimodal Deception Detection System' ? 'detailed-page' : ''} ${project.title === 'Crowdlistening' || project.title === 'Convoice' || project.title === 'Reminiscia: Text-to-Image Search Application' || project.title === 'Quadrotor Design and Control' || project.title === 'Skuy' || project.title === 'MatchaNU' || project.title === 'Lie Detection: Multimodal Deception Detection System' ? 'clickable' : ''}`}
                    key={idx}
                    onClick={project.title === 'Crowdlistening' ? () => window.open('https://crowdlistening.com', '_blank') :
                           project.title === 'Convoice' ? handleConvoiceClick :
                           project.title === 'Reminiscia: Text-to-Image Search Application' ? handleReminisciaClick :
                           project.title === 'Quadrotor Design and Control' ? handleQuadrotorClick :
                           project.title === 'Lie Detection: Multimodal Deception Detection System' ? handleLieDetectionClick :
                           project.title === 'Skuy' ? () => window.open('https://skuy.app', '_blank') :
                           project.title === 'MatchaNU' ? () => window.open('https://github.com/yyf20001230/MatchaNU', '_blank') : undefined}
                    style={project.title === 'Crowdlistening' || project.title === 'Convoice' || project.title === 'Reminiscia: Text-to-Image Search Application' || project.title === 'Quadrotor Design and Control' || project.title === 'Skuy' || project.title === 'MatchaNU' || project.title === 'Lie Detection: Multimodal Deception Detection System' ? { cursor: 'pointer' } : {}}
                  >
                    <div className="project-image">
                      {project.media ? (
                        <img 
                          src={project.media.url} 
                          alt={project.title}
                          className="project-media"
                        />
                      ) : (
                        <div className="project-image-placeholder">
                          <FaImage size={60} color="#bbb" />
                          <span>Project Image</span>
                        </div>
                      )}
                    </div>
                    <div className="project-content">
                      <div className="project-header">
                        <div className="project-title-container">
                          <h3 className="project-title">{project.title}</h3>
                          {(project.title === 'Convoice' || project.title === 'Reminiscia: Text-to-Image Search Application' || project.title === 'Quadrotor Design and Control' || project.title === 'Lie Detection: Multimodal Deception Detection System') && (
                            <span className="clickable-icon">
                              <FaExternalLinkAlt />
                            </span>
                          )}
                        </div>
                        <span className="project-date">{project.date}</span>
                      </div>
                      <div className="project-desc">{project.description}</div>
                      <div className="project-bottom">
                        <div className="tech-tags">
                          {project.techStack.map((tech, techIdx) => (
                            <span key={techIdx} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="projects-right">
          {/* Empty space to match layout */}
        </div>
      </div>
    </div>
  );
}

export default Projects; 
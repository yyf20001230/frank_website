import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Convoice.css';
import { FaArrowLeft, FaPlay, FaTimes } from 'react-icons/fa';

function Convoice() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBack = () => {
    navigate('/');
    // Scroll to projects section after navigation
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handlePlayDemo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="convoice-section">
      <div className="convoice-container">
        <button className="back-button" onClick={handleBack}>
          <FaArrowLeft /> Back to Projects
        </button>
        
        <div className="convoice-content">
          <h1 className="convoice-title">Convoice: AI-Powered Voice Calling Service for Local Businesses</h1>
          
          <div className="convoice-overview">
            <div className="overview-left">
              <div className="convoice-demo-container">
                <video 
                  src="/assets/img/demo.MOV" 
                  alt="Convoice System Demo" 
                  className="convoice-image"
                  playsInline
                />
                <button className="play-demo-button" onClick={handlePlayDemo}>
                  <FaPlay />
                  <span>Play Demo</span>
                </button>
              </div>
              <p className="image-subtitle">Real-time voice conversation demo (click to play)</p>
            </div>
            <div className="overview-right">
              <h2>Project Overview</h2>
              <p>
                Convoice is an AI-powered voice calling service designed to replace traditional customer service 
                for local businesses. The motivation behind this project was to address the growing need for faster 
                service times and reduced service costs. A significant portion of customer service interactions 
                can be automated with AI agents, providing instant responses while maintaining a human-like experience.
              </p>
              
              <h3>Key Features</h3>
              <ul>
                <li><strong>Automated Customer Service:</strong> AI agents handle inbound calls for local businesses</li>
                <li><strong>Context-Aware Responses:</strong> AI retrieves business-specific information from Pinecone</li>
                <li><strong>Natural Voice Interaction:</strong> Human-like voice responses using ElevenLabs</li>
                <li><strong>Smart Question Workflow:</strong> Automated question progression with intelligent routing</li>
                <li><strong>Cost Optimization:</strong> Reduced service costs compared to human operators</li>
              </ul>
              
            </div>
          </div>
          
          <div className="convoice-details">
            <h2>System Workflow</h2>
            <h3>1. Business Onboarding</h3>
            <p>
              Local businesses upload their website/document containing service details and appointment hours. 
              The Convoice server automatically reads the multimodal content and generates a service context, 
              which is then stored in Pinecone for efficient retrieval.
            </p>
            
            <h3>2. Call Handling Process</h3>
            <p>
              When customers make inbound calls to the local business, Convoice AI retrieves the system context 
              from Pinecone and automatically answers questions based on the business-specific information.
            </p>
            
            <h3>3. Technology Pipeline</h3>
            <ul>
              <li><strong>Speech-to-Text:</strong> Google Cloud Voice for transcription and speech interruption detection</li>
              <li><strong>AI Processing:</strong> Azure GPT-3.5 for answering transcribed text once the AI is confident the user has finished talking</li>
              <li><strong>Voice Generation:</strong> ElevenLabs service to convert AI responses into natural-sounding audio</li>
              <li><strong>Real-time Delivery:</strong> Audio response returned to the user during the call</li>
            </ul>

            <h2>Conversation Intelligence</h2>
            <p>
              To make conversations as natural and efficient as possible, I built a question automation workflow. 
              The Convoice AI remembers what questions should be asked for each service (e.g., making an appointment 
              for a haircut). The AI proceeds through questions systematically, but users may not ask questions in order.
            </p>
            
            <h3>Smart Question Routing</h3>
            <ul>
              <li><strong>Embedding System:</strong> Created embeddings for Q&A pairs and built a tree structure</li>
              <li><strong>Relevance Search:</strong> AI searches for the most relevant question the customer is likely answering/asking about</li>
              <li><strong>Dynamic Routing:</strong> AI jumps back to the most relevant question and updates information as needed</li>
              <li><strong>Auto-Completion:</strong> AI automatically closes the call when all required questions are answered and no further questions remain</li>
            </ul>

            <h2>Some Note...</h2>
            <p>
                We were truly ahead of our time. While modern AI agents can build this faster and better in 2025, 
                back in 2023 when context windows were small and GPT-3.5 wasn't very smart with complex content, 
                we made numerous optimizations to make this service work. We spotted the opportunity early and 
                successfully implemented it. The main bottleneck at the time was cost - AI speech generation was 
                even more expensive than real human service costs.
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="convoice-modal-overlay" onClick={handleCloseModal}>
          <div className="convoice-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={handleCloseModal}>
              <FaTimes />
            </button>
            <video 
              src="/assets/img/demo.MOV" 
              alt="Convoice System Demo" 
              className="convoice-modal-video"
              controls
              autoPlay
            />
            <h3>Convoice Demo</h3>
            <p>Real-time voice conversation analysis and transcription system demonstration</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Convoice; 
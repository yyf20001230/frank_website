import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Reminiscia.css';
import { FaArrowLeft } from 'react-icons/fa';

function Reminiscia() {
  const navigate = useNavigate();

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

  return (
    <div className="reminiscia-section">
      <div className="reminiscia-container">
        <button className="back-button" onClick={handleBack}>
          <FaArrowLeft /> Back to Projects
        </button>
        
        <div className="reminiscia-content">
          <h1 className="reminiscia-title">Reminiscia: Text-to-Image Search Application</h1>
          
          <div className="reminiscia-overview">
            <div className="overview-left">
              <img 
                src="/assets/img/reminiscia.jpg" 
                alt="Reminiscia App Demo" 
                className="reminiscia-image"
              />
              <p className="image-subtitle">Text-to-image search with optimized inference speed</p>
            </div>
            <div className="overview-right">
              <h2>Project Overview</h2>
              <p>
                Reminiscia is a text-to-image search application that leverages CLIP (Contrastive Language-Image Pre-training) 
                to enable semantic search across local phone album photos. The system allows users to find images using natural 
                language descriptions, with optimized inference speed for real-time applications on mobile devices.
              </p>
              
              <h3>Key Features</h3>
              <ul>
                <li><strong>Local Photo Search:</strong> Index and search through all local phone album photos</li>
                <li><strong>CLIP Integration:</strong> Leverage OpenAI's CLIP model for semantic understanding</li>
                <li><strong>Cosine Similarity Ranking:</strong> Rank images based on similarity with text queries</li>
                <li><strong>Model Distillation:</strong> Reduced model size using Simplex-Based encoding</li>
                <li><strong>On-Device Inference:</strong> Fast inference optimized for mobile computation</li>
              </ul>
              
              <div className="reminiscia-links">
                <a href="https://github.com/yyf20001230/reminiscia" target="_blank" rel="noopener noreferrer" className="link-button">
                  View Code
                </a>
              </div>
            </div>
          </div>
          
          <div className="reminiscia-details">
            <h2>What is CLIP?</h2>
            <p>
              CLIP (Contrastive Language-Image Pre-training) is a neural network developed by OpenAI that learns 
              visual concepts from natural language supervision. It can understand images and text in the same 
              representation space, making it possible to find images that match text descriptions and vice versa. 
              CLIP was trained on 400 million image-text pairs from the internet, allowing it to understand a 
              wide range of visual concepts and their relationships to language.
            </p>
            
            <h2>Technical Implementation</h2>
            <p>
              Reminiscia builds image indices for all local phone album photos using CLIP's image encoder. 
              When a user enters a text query, we generate a textual embedding using CLIP's text encoder. 
              The system then ranks all indexed images based on cosine similarity between the textual embedding 
              and each image's embedding, returning the most semantically similar results.
            </p>
            
            <h3>Search Process</h3>
            <ul>
              <li><strong>Image Indexing:</strong> Generate CLIP embeddings for all local photos</li>
              <li><strong>Text Processing:</strong> Convert user queries to CLIP text embeddings</li>
              <li><strong>Similarity Calculation:</strong> Compute cosine similarity between text and image embeddings</li>
              <li><strong>Ranking:</strong> Sort images by similarity score and return top results</li>
            </ul>

            <h3>Technology Stack</h3>
            <ul>
              <li><strong>Python:</strong> Core development language</li>
              <li><strong>CLIP:</strong> OpenAI's vision-language model</li>
              <li><strong>CoreML:</strong> iOS machine learning framework</li>
              <li><strong>SwiftUI:</strong> Native iOS application interface</li>
              <li><strong>Simplex-Based Encoding:</strong> Model distillation technique</li>
            </ul>

            <h2>Performance Optimization</h2>
            <p>
              To enable faster on-device inference time, we adopted our paper's method from Simplex-Based encoding 
              to distill the CLIP model. This approach further reduces the model size and allows faster inference 
              and index building even with limited mobile computation power. The distillation process maintains 
              the model's semantic understanding capabilities while significantly reducing computational requirements.
            </p>

            <h2>App Screenshots</h2>
            <div className="app-screenshots">
              <div className="screenshot-container">
                <img 
                  src="/assets/img/reminiscia_landing.jpg" 
                  alt="Reminiscia Landing Page" 
                  className="app-screenshot"
                />
                <p className="screenshot-caption">Landing page with "Find your best memories" tagline</p>
              </div>
              <div className="screenshot-container">
                <img 
                  src="/assets/img/album searching.jpg" 
                  alt="Album Initialization Screen" 
                  className="app-screenshot"
                />
                <p className="screenshot-caption">Album initialization screen with offline functionality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reminiscia; 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LieDetection.css';
import { FaArrowLeft } from 'react-icons/fa';

function LieDetection() {
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
    <div className="lie-detection-section">
      <div className="lie-detection-container">
        <button className="back-button" onClick={handleBack}>
          <FaArrowLeft /> Back to Projects
        </button>
        
        <div className="lie-detection-content">
          <h1 className="lie-detection-title">Lie Detection: Multimodal Deception Detection System</h1>
          
          <div className="lie-detection-overview">
            <div className="overview-left">
              <img 
                src="/assets/img/lie.png" 
                alt="Lie Detection System" 
                className="lie-detection-image"
              />
              <p className="image-subtitle">Multimodal lie detection using facial, audio, and textual analysis</p>
            </div>
            <div className="overview-right">
              <h2>Project Overview</h2>
              <p>
                Conceptualized and prototyped a multimodal deep learning model designed to detect lies using 
                micro-facial, audio, and textual features. The system achieved 76% out-of-sample classification 
                accuracy, outperforming most existing lie detection models in scholarly research. This project 
                represents a significant advancement in automated deception detection through comprehensive 
                multimodal analysis.
              </p>
              
              <h3>Key Features</h3>
              <ul>
                <li><strong>Multimodal Analysis:</strong> Micro-facial, audio, and textual feature extraction</li>
                <li><strong>Advanced Architecture:</strong> Vision-transformer encoder and LSTM binary classifier</li>
                <li><strong>Pre-trained Models:</strong> Fine-tuned Inceptionv3 and BERT for feature extraction</li>
                <li><strong>Comprehensive Dataset:</strong> 121 clips of trial testimonies with 4.5 million labeled frames</li>
                <li><strong>High Accuracy:</strong> 76% out-of-sample classification accuracy</li>
                <li><strong>Utility Functions:</strong> Eye blinking counting, FER, gaze visualizer, and MFCC visualizer</li>
              </ul>
              
              <div className="lie-detection-links">
                <a href="https://github.com/yyf20001230/lie_detection" target="_blank" rel="noopener noreferrer" className="link-button">
                  View Code
                </a>
              </div>
            </div>
          </div>
          
          <div className="lie-detection-details">
            <h2>Technical Implementation</h2>
            
            <h3>Model Architecture</h3>
            <p>
              The system employs a sophisticated deep learning architecture combining a vision-transformer 
              encoder with an LSTM binary classifier. This hybrid approach enables effective processing 
              of multimodal features while maintaining high classification accuracy for deception detection.
            </p>

            <h3>Pre-trained Model Integration</h3>
            <p>
              The implementation leverages fine-tuned versions of Inceptionv3 for visual feature extraction 
              and BERT for textual analysis. This approach capitalizes on the strengths of pre-trained models 
              while adapting them specifically for lie detection tasks.
            </p>

            <h3>Multimodal Feature Extraction</h3>
            <p>
              The system processes 4.5 million frames from 8 real-life datasets, identifying 20 micro-gestures 
              and facial Action Units (AUs) that significantly contribute to lying behavior. This extensive 
              data analysis provides the foundation for accurate deception detection.
            </p>

            <h3>Facial Input Processing</h3>
            <p>
              Per-frame action unit (AU) and eye gaze vectors are extracted using OpenFace, providing 
              detailed facial expression analysis. The system tracks micro-expressions and subtle facial 
              movements that may indicate deception.
            </p>

            <h3>Audio Input Processing</h3>
            <p>
              Per-frame MFCCs (Mel-frequency cepstral coefficients) and speech frequencies are extracted 
              using OpenSmile. This enables analysis of voice patterns, speech rhythm, and audio features 
              that correlate with deceptive behavior.
            </p>

            <h3>Textual Input Processing</h3>
            <p>
              Natural language processing techniques are applied to analyze textual content for linguistic 
              markers of deception, including word choice patterns and semantic inconsistencies. This component 
              is currently work-in-progress.
            </p>

            <h3>Training Process</h3>
            <ul>
              <li><strong>Dataset Size:</strong> 121 clips of trial testimonies for comprehensive training</li>
              <li><strong>Frame Analysis:</strong> 4.5 million frames surveyed and labeled for micro-gestures</li>
              <li><strong>Feature Extraction:</strong> 20 micro-gestures and facial AUs identified as key indicators</li>
              <li><strong>Model Performance:</strong> 76% out-of-sample classification accuracy achieved</li>
            </ul>

            <h3>Utility Functions</h3>
            <ul>
              <li><strong>Eye Blinking Counting:</strong> Tracks blink patterns as potential deception indicators</li>
              <li><strong>FER (Facial Emotional Recognition):</strong> Identifies emotional states from facial expressions</li>
              <li><strong>Gaze Visualizer:</strong> Visualizes eye movement patterns and fixation points</li>
              <li><strong>MFCC Visualizer:</strong> Displays audio feature extraction results</li>
            </ul>

            <h2>Speaker Identification</h2>
            <p>
              The system includes machine learning-based speaker identification capabilities. Users can 
              record audio for training, train the model, record audio for testing, and test the model 
              through a comprehensive workflow with four main options: record audio for training, train model, 
              record audio for testing, and test model.
            </p>

            <h2>Dataset and Training</h2>
            <p>
              The model was trained on 60 truth and 61 deceptive videos from the testimonials dataset. 
              The dataset includes processed MFCC and Action Units (AU) data, with segmented files 
              available for model training. Additional testing was performed using the MU3D database.
            </p>

            <h3>Dataset Structure</h3>
            <ul>
              <li><strong>MFCC Annotated Dataset:</strong> Available in Wavs format</li>
              <li><strong>AU Annotated Dataset:</strong> Available in Clips format</li>
              <li><strong>Processed Segments:</strong> Ready for model training</li>
              <li><strong>Raw Dataset:</strong> Available from University of Michigan</li>
              <li><strong>Additional Testing:</strong> MU3D database for validation</li>
            </ul>

            <h2>Research Impact</h2>
            <p>
              The project's 76% classification accuracy outperforms most existing lie detection models in 
              scholarly research, demonstrating the effectiveness of the multimodal approach and the quality 
              of the implemented architecture. This represents a significant advancement in automated 
              deception detection technology.
            </p>

            <h3>Technical Achievements</h3>
            <ul>
              <li><strong>State-of-the-art Performance:</strong> 76% accuracy surpassing existing research models</li>
              <li><strong>Comprehensive Analysis:</strong> 4.5 million frames processed across 8 datasets</li>
              <li><strong>Advanced Architecture:</strong> Vision-transformer-LSTM hybrid for multimodal processing</li>
              <li><strong>Pre-trained Integration:</strong> Fine-tuned Inceptionv3 and BERT models</li>
              <li><strong>Micro-gesture Discovery:</strong> 20 key indicators identified for deception detection</li>
            </ul>

            <h2>Research Foundation</h2>
            <p>
              The project builds upon extensive research in deception detection, incorporating findings 
              from multiple academic papers on multimodal deception detection, facial expression analysis, 
              and automated lie detection systems.
            </p>

            <h3>Key Research References</h3>
            <ul>
              <li><strong>DeepLie:</strong> Detect Lies with Facial Expression (Stanford CS230, 2021)</li>
              <li><strong>Deception in the Eyes of Deceiver:</strong> Computer Vision and Machine Learning Based Automated Deception Detection (Science Direct, 2021)</li>
              <li><strong>Catching a Liar Through Facial Expression of Fear:</strong> Frontiers, 2021</li>
              <li><strong>Multimodal Deception Detection Using Real-Life Trial Data:</strong> IEEE TRANSACTIONS ON AFFECTIVE COMPUTING, 2020</li>
              <li><strong>Robust Algorithm for Multimodal Deception Detection:</strong> IEEE Conference, 2019</li>
              <li><strong>Multimodal Deception Detection Using Automatically Extracted Features:</strong> Columbia University, 2020</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LieDetection; 
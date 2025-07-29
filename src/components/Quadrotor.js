import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Quadrotor.css';
import { FaArrowLeft } from 'react-icons/fa';

function Quadrotor() {
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
    <div className="quadrotor-section">
      <div className="quadrotor-container">
        <button className="back-button" onClick={handleBack}>
          <FaArrowLeft /> Back to Projects
        </button>
        
        <div className="quadrotor-content">
          <h1 className="quadrotor-title">CS410 Drone Flight Control: Complete Quadcopter System</h1>
          
          <div className="quadrotor-overview">
            <div className="overview-left">
              <img 
                src="/assets/img/quadrotor.jpg" 
                alt="Quadrotor System" 
                className="quadrotor-image"
              />
              <p className="image-subtitle">WiFi-enabled quadrotor with autonomous flight control</p>
            </div>
            <div className="overview-right">
              <h2>Project Overview</h2>
              <p>
                Developed a complete quadcopter flight control system over 9 weeks for CS410, demonstrating 
                progression from basic IMU sensor reading to full autonomous flight control with position tracking. 
                The project culminated in autonomous flight capabilities with position tracking using Vive tracking system.
              </p>
              
              <h3>Key Features</h3>
              <ul>
                <li><strong>Stable Flight Control:</strong> Achieved stable hover and controlled flight with PID control</li>
                <li><strong>Multi-Axis Control:</strong> Independent control of roll, pitch, and yaw axes</li>
                <li><strong>Remote Operation:</strong> Wireless control via UDP communication</li>
                <li><strong>Autonomous Flight:</strong> Position-based autonomous flight with Vive tracking</li>
                <li><strong>Safety Systems:</strong> Comprehensive safety protocols and emergency shutdown</li>
                <li><strong>Real-time Processing:</strong> High-frequency control loops for responsive flight</li>
              </ul>
              
              <div className="quadrotor-links">
                <a href="https://github.com/yyf20001230/CS410" target="_blank" rel="noopener noreferrer" className="link-button">
                  View Code
                </a>
              </div>
            </div>
          </div>
          
          <div className="quadrotor-details">
            <h2>Weekly Development Progress</h2>
            
            <h3>Week 1: IMU Sensor Integration and Calibration</h3>
            <p>
              Implemented MPU-9250 IMU sensor communication via I2C with sensor calibration routines 
              for gyroscope and accelerometer. Created complementary filter for sensor fusion and 
              established basic angle calculation (roll, pitch, yaw) with real-time data acquisition.
            </p>

            <h3>Week 2: Keyboard Control and Safety Systems</h3>
            <p>
              Added keyboard input handling for manual control with shared memory communication 
              between processes. Enhanced safety systems with gyroscope rate monitoring (±300°/s limits) 
              and implemented heartbeat monitoring for system health.
            </p>

            <h3>Week 3: Motor Control and PWM Implementation</h3>
            <p>
              Integrated PWM controller for motor control with basic proportional (P) control. 
              Implemented motor initialization and safety protocols with neutral power settings 
              (1100μs pulse width) and maximum PWM (1200μs).
            </p>

            <h3>Week 4: PID Control Implementation</h3>
            <p>
              Implemented full PID (Proportional-Integral-Derivative) control with integral term 
              handling and anti-windup. Tuned PID parameters (P=15, I=0.01, D=3) for stable flight 
              and enhanced motor control with 4-motor differential thrust.
            </p>

            <h3>Week 5: Multi-Axis Control and Yaw Control</h3>
            <p>
              Implemented independent control for roll, pitch, and yaw axes with yaw rate control 
              using differential motor thrust. Enhanced PID tuning for all three axes and added 
              pause/resume functionality for safe testing.
            </p>

            <h3>Week 6: Hover Control and Flight Testing</h3>
            <p>
              Achieved stable hover control with thrust control for altitude management. Enhanced 
              PID tuning (P=5, I=0.04, D=0.65) for stable flight and improved safety systems 
              for autonomous operation.
            </p>

            <h3>Week 7: UDP Communication and Remote Control</h3>
            <p>
              Implemented UDP communication for remote control with joystick input handling via Python. 
              Created wireless control interface with real-time data transmission at 20MHz and 
              enhanced control limits for remote operation.
            </p>

            <h3>Week 8: Advanced Control Systems</h3>
            <p>
              Enhanced PID control algorithms with improved flight stability and response. Optimized 
              control parameters for better performance and enhanced data logging and analysis capabilities.
            </p>

            <h3>Week 9: Position Tracking and Autonomous Flight</h3>
            <p>
              Integrated Vive tracking system for position control and implemented autonomous flight 
              capabilities. Added position-based control algorithms and achieved full autonomous flight 
              with position tracking.
            </p>

            <h2>System Architecture</h2>
            
            <h3>Hardware Components</h3>
            <ul>
              <li><strong>Flight Controller:</strong> Raspberry Pi with custom flight control software</li>
              <li><strong>IMU Sensor:</strong> MPU-9250 for attitude and heading reference</li>
              <li><strong>Motors:</strong> 4 brushless motors with ESC controllers</li>
              <li><strong>Position Tracking:</strong> Vive tracking system for autonomous flight</li>
              <li><strong>Communication:</strong> UDP for remote control and data transmission</li>
            </ul>

            <h3>Software Components</h3>
            <ul>
              <li><strong>Sensor Fusion:</strong> Complementary filter for IMU data</li>
              <li><strong>Control System:</strong> PID controllers for roll, pitch, yaw, and altitude</li>
              <li><strong>Communication:</strong> UDP protocol for remote control</li>
              <li><strong>Safety Systems:</strong> Comprehensive monitoring and emergency protocols</li>
              <li><strong>Position Control:</strong> Vive-based position tracking and autonomous flight</li>
            </ul>

            <h2>Key Technical Achievements</h2>
            <ul>
              <li><strong>Stable Flight Control:</strong> Achieved stable hover and controlled flight</li>
              <li><strong>Multi-Axis Control:</strong> Independent control of roll, pitch, and yaw</li>
              <li><strong>Remote Operation:</strong> Wireless control via UDP communication</li>
              <li><strong>Autonomous Flight:</strong> Position-based autonomous flight capabilities</li>
              <li><strong>Safety Systems:</strong> Comprehensive safety protocols and emergency shutdown</li>
              <li><strong>Real-time Processing:</strong> High-frequency control loops for responsive flight</li>
            </ul>

            <h2>Safety Features</h2>
            <ul>
              <li>Gyroscope rate monitoring (±480°/s limits)</li>
              <li>Emergency shutdown protocols</li>
              <li>Motor safety limits and calibration</li>
              <li>Heartbeat monitoring for system health</li>
              <li>Pause/resume functionality for safe testing</li>
              <li>Comprehensive error handling and logging</li>
            </ul>

            <h2>Data Analysis</h2>
            <p>
              The project includes extensive data logging and analysis capabilities with real-time CSV 
              data logging, performance plots and analysis, control system tuning data, and comprehensive 
              flight test results and documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quadrotor; 
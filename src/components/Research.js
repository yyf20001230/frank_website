import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Research.css';
import { FaImage, FaExternalLinkAlt } from 'react-icons/fa';

const researchIntro = (
  <div className="research-intro">
    <p>
      I have a broad interest in <strong>robotic learning and control</strong>. I'm fascinated by the challenge of building autonomous robots that navigate complex environments and perform long-horizon tasks efficiently and safely. I am researching on equipping robots with safe learning and runtime decision-making capabilities within uncertain environments subject to disturbances or observation delays. This interest extends from common applications like self-driving vehicles to humanoid robotics.
    </p>
    <p>
      Within robotic learning and control, I am particularly interested in:
    </p>
    <ul>
      <li><strong>Data-Driven Control in Uncertainty</strong>: developing safe reinforcement learning and model predictive control strategies that can handle uncertainties and observation delays in dynamic environments.</li>
      <li><strong>Safety Verification</strong>: Equipping robots with decision-making capabilities that assess the safety of learned systems, especially in the presence of neural network controlled systems.</li>
      <li><strong>Skill-Based Learning</strong>: Developing long-horizon skill acquisition from expert demonstration. This includes creating benchmark metrics and high-fidelity real2sim and sim2real transfer.</li>
    </ul>
    <p>
      Looking ahead, I aim to design state-of-the-art learning methods that effectively assist humans in complex tasks, while prioritizing safety alongside performance.
    </p>
  </div>
);

const publications = [
  {
    title: 'Learning in Slow Motion: Adapting Offline Reinforcement Learning with Online Delays',
    authors: 'S. Zhan, Q. Wu, <u>F. Yang</u>, X. Shi, C. Huang, Q. Zhu',
    venue: 'NeurIPS 2025 (In submission)',
    link: 'https://arxiv.org/abs/2506.00131',
  },
  {
    title: 'Inverse Delayed Reinforcement Learning',
    authors: 'S. Zhan, Q. Wu, Z. Ruan, <u>F. Yang</u>, P. Wang, Y. Wang, R. Jiao, C. Huang, Q. Zhu',
    venue: 'Learning for Dynamics and Control 2025 (In submission)',
    link: 'https://arxiv.org/abs/2412.02931',
  },
  {
    title: 'Case Study: Runtime Safety Verification of Neural Network Controlled System',
    authors: '<u>F. Yang</u>, S. Zhan, Y. Wang, et al.',
    venue: 'Runtime Verification, 2024',
    link: 'https://arxiv.org/abs/2408.08592',
    status: '',
  },
  {
    title: 'Efficient Encoding of Graphics Primitives with Simplex-based Structures',
    authors: '<u>F. Yang</u>*, Y. Wen*',
    venue: 'Midwest Machine Learning Symposium, 2023',
    link: 'https://arxiv.org/abs/2311.15439',
    status: '',
  },
];

const researchProjects = [
  {
    title: 'Learning in Slow Motion:Reinforcement Learning for Decision-Making Under Uncertainty',
    links: [
      { label: 'IDRL Paper', url: 'https://arxiv.org/abs/2506.00131' },
      { label: 'DT-CORL Paper', url: 'https://arxiv.org/abs/2412.02931' },
    ],
    description:
      'Developed novel reinforcement learning framework that adapts to online observation delays; Proposed inverse and offline delayed RL algorithm to handle temporal misalignment; verified the effectiveness on a quadrotor tracking task.',
    media: {
      type: 'image',
      url: '/assets/img/quadrotor.gif'
    }
  },
  {
    title: 'Benchmarking LLMs for Embodied AI Safety in Simulation Environments',
    links: [
      { label: "Work in Progress", url: "" }
    ],
    description:
      'Comprehensive benchmarking framework for LLM-generated action plans of embodied AI household tasks; LTL and CTL-based safety checking for embodied AI systems; Evaluation of all possible execution paths for safety violations.',
    media: {
      type: 'image',
      url: '/assets/img/Benchmark_LLM.png'
    }
  },
  {
    title: 'Behavior 1K: A Human-Centered, Embodied AI Benchmark with 1,000 Everyday Activities and Realistic Simulation',
    links: [
      { label: 'Project', url: 'https://behavior.stanford.edu/behavior-1k' },
      { label: 'Paper', url: 'https://arxiv.org/abs/2403.09227' },
    ],
    description:
      'Development on robotic simulation benchmark built upon NVIDIA Omniverse engine; Decomposed long-horizon tasks into learnable action primitives (pick, place, navigate); Implemented a collision-free action primitives execution pipeline using curobo.',
    media: {
      type: 'video',
      url: '/assets/img/b1k.mp4'
    }
  },
  {
    title: 'POLAR-Express: Efficient and Precise Formal Reachability Analysis of Neural-Network Controlled Systems',
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2408.08592' },
      { label: 'Tool', url: 'https://github.com/ChaoHuang2018/POLAR_Tool' },
    ],
    description:
      'Performed runtime safety verification case study with POLAR-express on Turtlebot3 in ROS2 simulation; Proposed online controller switch strategy for safety-critical control systems with neural networks.',
    media: {
      type: 'image',
      url: '/assets/img/polar-express.png'
    }
  },
  {
    title: 'Efficient Encoding of Graphics Primitives with Simplex-based Structures',
    links: [
      { label: 'Paper', url: 'https://arxiv.org/pdf/2311.15439' },
    ],
    description:
      'Surveyed the encoding of graphics primitives proposed by "Instant NGP"; established theoretical foundations for simplex-based structure encodings and accelerated sample and interpolation speed on NeRF and SDF rendering with C++/CUDA kernels.',
    media: {
      type: 'image',
      url: '/assets/img/Encoding.png'
    }
  },
];

function Research() {
  const navigate = useNavigate();

  const handleBehavior1KClick = () => {
    navigate('/behavior1k');
  };

  const handlePolarExpressClick = () => {
    navigate('/polar-express');
  };

  const handleDelayedRLClick = () => {
    navigate('/delayed-rl');
  };

  const handleLLMSafetyClick = () => {
    navigate('/llm-safety');
  };

  const handleEfficientSimplexClick = () => {
    navigate('/efficient-simplex');
  };

  return (
    <div className="research-section">
      <div className="research-container">
        <div className="research-left">
          <h1 className="research-title">Research</h1>
          {researchIntro}
          
          <h2 className="research-subtitle">Publications</h2>
          <ul className="research-publications-list">
            {publications.map((pub, idx) => (
              <li className="research-publication-item" key={idx}>
                <span className="research-publication-title">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.title}</a>
                </span>
                <span className="research-publication-authors" dangerouslySetInnerHTML={{ __html: pub.authors }}></span>
                <span className="research-publication-venue">{pub.venue}</span>
                {pub.status && <span className="research-publication-status">{pub.status}</span>}
              </li>
            ))}
          </ul>
          
          <h2 className="research-subtitle">Research Projects</h2>
          <div className="research-projects-container">
            {researchProjects.map((proj, idx) => (
              <div 
                className={`research-project-card ${proj.title.includes('Behavior 1K') || proj.title.includes('POLAR-Express') || proj.title.includes('Under Uncertainty') || proj.title.includes('Benchmarking LLMs') || proj.title.includes('Efficient Encoding') ? 'clickable' : ''}`} 
                key={idx}
                onClick={proj.title.includes('Behavior 1K') ? handleBehavior1KClick : proj.title.includes('POLAR-Express') ? handlePolarExpressClick : proj.title.includes('Under Uncertainty') ? handleDelayedRLClick : proj.title.includes('Benchmarking LLMs') ? handleLLMSafetyClick : proj.title.includes('Efficient Encoding') ? handleEfficientSimplexClick : undefined}
                style={proj.title.includes('Behavior 1K') || proj.title.includes('POLAR-Express') || proj.title.includes('Under Uncertainty') || proj.title.includes('Benchmarking LLMs') || proj.title.includes('Efficient Encoding') ? { cursor: 'pointer' } : {}}
              >
                <div className="research-project-image">
                  {proj.media ? (
                    proj.media.type === 'video' ? (
                      <video 
                        src={proj.media.url} 
                        autoPlay 
                        muted 
                        loop
                        playsInline
                        className="research-project-video researh-project-media"
                      />
                    ) : (
                      <img 
                        src={proj.media.url} 
                        alt={proj.title}
                        className={proj.title.includes('Uncertainty') ? "research-project-offline research-project-media" : "research-project-media"}
                      />
                    )
                  ) : (
                    <>
                      <FaImage size={60} color="#bbb" />
                      <span>Project Image</span>
                    </>
                  )}
                </div>
                                  <div className="research-project-content">
                    <div className="research-project-title-container">
                      <h3 className="research-project-title">
                        {proj.title}
                      </h3>
                      {(proj.title.includes('Behavior 1K') || proj.title.includes('POLAR-Express') || proj.title.includes('Under Uncertainty') || proj.title.includes('Benchmarking LLMs') || proj.title.includes('Efficient Encoding')) && (
                        <span className="clickable-icon">
                          <FaExternalLinkAlt />
                        </span>
                      )}
                    </div>
                  {/* <div className="research-project-advisor">Advised by: {proj.advisor}</div> */}
                  <div className="research-project-links">
                    {proj.links.map((l, i) => (
                      l.url ? (
                        <a key={i} href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>
                      ) : (
                        <span key={i} className="work-in-progress">{l.label}</span>
                      )
                    ))}
                  </div>
                  <div className="research-project-desc">{proj.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="research-right">
          {/* Empty space to match layout */}
        </div>
      </div>
    </div>
  );
}

export default Research; 
# Frank Yang - Personal Information

## About Frank

Hello there! I'm **Frank Yang**

I am a forward deployed engineer, a robotic researcher, an amateur filmmaker.

I am an incoming Forward Deployed Engineer at [ScaleAI](https://scale.com/).

I recently graduated with a CS MS degree from Northwestern University, publishing a thesis on [Safety-Assured autonomy of embodied AI agents](https://frank-yang.com/assets/pdf/MS_Thesis_Frank.pdf) from my work at IDEAS Lab advised by Prof. [Qi Zhu](http://zhulab.ece.northwestern.edu/). Last summer, I interned at Stanford's Vision and Learning Lab advised by Prof. [Fei-Fei Li](https://profiles.stanford.edu/fei-fei-li). I earned my Bachelor's in CS and Mathematics **summa cum laude** in 2024, also from Northwestern.

I have worked at startups, research labs, and large tech companies, where I've turned ideas into marketable products. I'm fascinated by **agenic AI and embodied AI** applications in the industry. My research spans robot learning, safe autonomy, and control systems.

**Contact Information:**
- Email: frankyang2024@northwestern.edu
- GitHub: [yyf20001230](https://github.com/yyf20001230)
- LinkedIn: [frankyang2000](https://www.linkedin.com/in/frankyang2000)
- Google Scholar: [Frank Yang](https://scholar.google.com/citations?user=8vHoCFAAAAAJ&hl=en)

Last updated: 07-24-2025

## News

- **Aug 2025**: Started working as a Forward Deployed Engineer at ScaleAI! Let's connect in SF :)
- **May 2025**: Submitted Master Thesis Safety-Assured Autonomy of Learning-Enabled Embodied AI Agents!
- **May 2025**: Submitted a paper on delayed offline RL to NeurIPS 2025
- **Dec 2024**: Submitted a paper on delayed inverse RL to L4DC 2025
- **Oct 2024**: Invited talk to RV 2024
- **Aug 2024**: Submitted POLAR-express to Embedded Systems Week 2024 tool presentation (Winner of ESSC 2024)
- **Jul 2024**: One paper accepted to RV 2024
- **Jun 2024**: Started as a Robotic Learning Intern at Stanford Vision and Learning Lab
- **May 2023**: One paper accepted to MMLS 2023

## Work Experience

### Forward Deployed Engineer at ScaleAI (Present)
Building and deploying AI solutions for real-world applications at ScaleAI. Working on large-scale data pipelines, model deployment, and customer-facing AI integrations.

### Software Engineer Intern at Target (June 2023 - Aug 2023)
Developed a Golang application within a Vela CI/CD pipeline to enforce security and compliance standards. Integrated Postgres with RestAPI for build lifecycle and versioning information retrieval and storage.

### SDE Intern at Amazon (Jun 2022 - Sep 2022)
Implemented a Sagemaker site that provides benchmarked health & architecture evaluations for ML models. Presented a demo to Sagemaker engineers; received candidacy to beta-launch model cards on AWS Re:Invent.

### Robotic Research Assistant at Stanford Vision and Learning Lab (Jun 2024 - Nov 2024)
Conducted robotic learning research and BEHAVIOR-1K benchmark development. Decomposed long-horizon tasks into learnable action primitives (pick, place, navigate) and implemented collision-free execution pipeline.

### Research Assistant at Northwestern IDEAS Lab (Oct 2023 - Present)
Researched safety-assured autonomy of learning-enabled embodied AI agents. Developed runtime safety verification with POLAR-express and proposed safe online controller switch strategy for control system.

## Research

I have a broad interest in **robotic learning and control**. I'm fascinated by the challenge of building autonomous robots that navigate complex environments and perform long-horizon tasks efficiently and safely. I am researching on equipping robots with safe learning and runtime decision-making capabilities within uncertain environments subject to disturbances or observation delays. This interest extends from common applications like self-driving vehicles to humanoid robotics.

Within robotic learning and control, I am particularly interested in:

- **Data-Driven Control in Uncertainty**: developing safe reinforcement learning and model predictive control strategies that can handle uncertainties and observation delays in dynamic environments.
- **Safety Verification**: Equipping robots with decision-making capabilities that assess the safety of learned systems, especially in the presence of neural network controlled systems.
- **Skill-Based Learning**: Developing long-horizon skill acquisition from expert demonstration. This includes creating benchmark metrics and high-fidelity real2sim and sim2real transfer.

Looking ahead, I aim to design state-of-the-art learning methods that effectively assist humans in complex tasks, while prioritizing safety alongside performance.

### Publications

1. **Learning in Slow Motion: Adapting Offline Reinforcement Learning with Online Delays** (S. Zhan, Q. Wu, F. Yang, X. Shi, C. Huang, Q. Zhu) - NeurIPS 2025 (In submission)
2. **Inverse Delayed Reinforcement Learning** (S. Zhan, Q. Wu, Z. Ruan, F. Yang, P. Wang, Y. Wang, R. Jiao, C. Huang, Q. Zhu) - Learning for Dynamics and Control 2025 (In submission)
3. **Case Study: Runtime Safety Verification of Neural Network Controlled System** (F. Yang, S. Zhan, Y. Wang, et al.) - Runtime Verification, 2024
4. **Efficient Encoding of Graphics Primitives with Simplex-based Structures** (F. Yang*, Y. Wen*) - Midwest Machine Learning Symposium, 2023

### Research Projects

#### Learning in Slow Motion: Reinforcement Learning for Decision-Making Under Uncertainty
Developed novel reinforcement learning framework that adapts to online observation delays; Proposed inverse and offline delayed RL algorithm to handle temporal misalignment; verified the effectiveness on a quadrotor tracking task.

#### Benchmarking LLMs for Embodied AI Safety in Simulation Environments
Comprehensive benchmarking framework for LLM-generated action plans of embodied AI household tasks; LTL and CTL-based safety checking for embodied AI systems; Evaluation of all possible execution paths for safety violations.

#### Behavior 1K: An Embodied AI Benchmark with 1,000 Everyday Activities and Realistic Simulation
Development on robotic simulation benchmark built upon NVIDIA Omniverse engine; Decomposed long-horizon tasks into learnable action primitives (pick, place, navigate); Implemented a collision-free action primitives execution pipeline using curobo.

**Detailed Summary**: BEHAVIOR-1K offers a comprehensive platform by combining automated planning language with full physics-based simulation, enabling the simulation of more intricate, human-centered activities than previously possible. Key contributions include Action Primitive Decomposition (decomposing complex, long-horizon tasks into learnable action primitives like pick, place, navigate) and Collision-Free Execution Pipeline (implementing a collision-free action primitives execution pipeline using curobo).

#### POLAR-Express: Efficient and Precise Formal Reachability Analysis of Neural-Network Controlled Systems
Performed runtime safety verification case study with POLAR-express on Turtlebot3 in ROS2 simulation; Proposed online controller switch strategy for safety-critical control systems with neural networks.

#### Efficient Encoding of Graphics Primitives with Simplex-based Structures
Surveyed the encoding of graphics primitives proposed by "Instant NGP"; established theoretical foundations for simplex-based structure encodings and accelerated sample and interpolation speed on NeRF and SDF rendering with C++/CUDA kernels.

## Projects

### AI Projects

#### Crowdlistening (Jan 2024 - Present)
**Tech Stack**: Python, MCP, Exa.ai, Gemini, Cursor

MCP-powered crowd analysis and sentiment detection system for real-time event monitoring and public safety applications.

#### Convoice (Sep 2023 - May 2024)
**Tech Stack**: Python, AWS, Pinecone, GPT, Google Cloud Voices, ElevenLabs

Partnered with a student-led AI calling startup to provide businesses with context-aware voicebots featuring human-like voices and knowledge bases. Configured serverless file processing pipeline using AWS Lambda, S3, DynamoDB, and Pinecone for text and metadata extraction from file uploads.

**Detailed Summary**: Convoice is an AI-powered voice calling service designed to replace traditional customer service for local businesses. The system features automated customer service with AI agents handling inbound calls, context-aware responses by retrieving business-specific information from Pinecone, natural voice interaction using ElevenLabs, smart question workflow with automated progression and intelligent routing, and cost optimization compared to human operators.

The workflow includes business onboarding (uploading website/documents for service context generation), call handling process (AI retrieving context and answering questions), and technology pipeline (Google Cloud Voice for speech-to-text, Azure GPT-3.5 for AI processing, ElevenLabs for voice generation, and real-time audio delivery).

#### Reminiscia: Text-to-Image Search Application (Dec 2022 - May 2023)
**Tech Stack**: Python, CLIP, CoreML, SwiftUI

Text-to-image search application using pretrained vision-language models with optimized inference speed.

#### Lie Detection: Multimodal Deception Detection System (Feb 2022 - Jan 2023)
**Tech Stack**: PyTorch, OpenCV, BERT, Inceptionv3, LSTM, Deep Learning

Conceptualized and prototyped a multimodal deep learning model designed to detect lies using micro-facial, audio, and textual features. Achieved 76% out-of-sample classification accuracy, outperforming most existing lie detection models in scholarly research.

### Full Stack Projects

#### Skuy (Apr 2022 - Jun 2024 | Lead Tech Engineer)
**Tech Stack**: React Native, Node.js, Firebase, RestAPI, Heroku, CI/CD

Launched a cross-platform campus community network app using React Native; amassed 1000+ student users on App Store and Google Play. Led database migration from Heroku to Firebase and managed development for 8 tech engineers with CI/CD pipeline.

#### MatchaNU (Jun 2021 - Feb 2022 | Founder)
**Tech Stack**: SwiftUI, MapKit, CoreLocation, CoreData

Founded a native iOS Swift application to assist 2000+ Northwestern undergraduates with course planning and building navigation. Web-scraped 5000+ course catalogs and integrated Google Geocoding API for optimal walking routes.

### Robotics Projects

#### Quadrotor Design and Control (Mar 2024 - Jun 2024)
**Tech Stack**: C/C++, Raspberry Pi, PID Control

Complete quadcopter flight control system developed over 9 weeks, achieving stable hover, multi-axis control, remote operation via UDP, and autonomous flight with Vive position tracking.

**Detailed Summary**: A comprehensive project involving the design, construction, and control of a custom quadrotor system with autonomous flight capabilities and advanced control algorithms. The system includes custom carbon fiber frame design optimized for stability and payload capacity, high-performance brushless motors with electronic speed controllers, custom PID-based control system with sensor fusion, and comprehensive sensors (IMU, GPS, barometer, optical flow).

The control architecture features attitude control with PID loops for roll, pitch, and yaw stabilization, position control using GPS and optical flow-based position holding, autonomous navigation with waypoint following and obstacle avoidance, and safety systems including return-to-home and emergency landing protocols.

Technical achievements include stable hover with <5cm position drift, autonomous waypoint navigation with obstacle avoidance, 15+ minute flight time with payload, and real-time sensor fusion and state estimation.

## Skills and Expertise

### Programming Languages
- **Python**: Primary language for AI/ML and research projects
- **JavaScript/React**: Frontend development and web applications
- **C++**: Robotics and performance-critical applications
- **Java**: Enterprise software development
- **Golang**: Backend development and CI/CD pipelines
- **Swift**: iOS development

### Technologies and Frameworks
- **AI/ML**: TensorFlow, PyTorch, OpenAI CLIP, BERT, LSTM, Inceptionv3
- **Cloud Platforms**: AWS (Lambda, S3, DynamoDB), Google Cloud, Azure
- **Robotics**: ROS, Gazebo, PID Control, Sensor Fusion, NVIDIA Omniverse
- **Web Development**: React, Node.js, MongoDB, REST APIs
- **Computer Vision**: OpenCV, Neural Radiance Fields, Image Processing
- **Mobile Development**: React Native, SwiftUI, CoreML
- **Databases**: PostgreSQL, Firebase, Pinecone (Vector Database)

### Research Areas
- **Embodied AI**: Physical interaction and real-world applications
- **Neural Rendering**: 3D scene reconstruction and novel view synthesis
- **Robotics Control**: Autonomous systems and intelligent control
- **Multimodal AI**: Integration of vision, language, and audio processing
- **Safety Verification**: Formal methods for AI system safety
- **Reinforcement Learning**: Delayed RL, inverse RL, offline RL

## Personal Interests

### Cinematography
Frank is passionate about cinematography and visual storytelling, applying his technical expertise to creative projects and visual arts.

### Photography
Combines technical knowledge with artistic vision in photography, particularly in computational photography and AI-enhanced imaging.

### Teaching and Mentorship
Actively involved in teaching and mentoring, sharing knowledge about AI, robotics, and software development with students and peers.

---

*This information serves as comprehensive context for understanding Frank Yang's background, expertise, projects, and contributions to the fields of AI, robotics, and software engineering.* 
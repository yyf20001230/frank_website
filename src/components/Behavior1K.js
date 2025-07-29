import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Behavior1K.css';
import { FaArrowLeft } from 'react-icons/fa';
import 'katex/dist/katex.min.css';

function Behavior1K() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
    // Scroll to research projects subsection after navigation
    setTimeout(() => {
      const researchSection = document.getElementById('research');
      if (researchSection) {
        // Find the research projects subtitle within the research section
        const researchProjectsTitle = researchSection.querySelector('.research-subtitle');
        if (researchProjectsTitle) {
          researchProjectsTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // Fallback to the research section if subtitle not found
          researchSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  };

  return (
    <div className="behavior1k-section">
      <div className="behavior1k-container">
        <button className="back-button" onClick={handleBack}>
          <FaArrowLeft /> Back to Research
        </button>
        
        <div className="behavior1k-content">
          <h1 className="behavior1k-title">BEHAVIOR-1K: A Human-Centered, Embodied AI Benchmark with 1,000 Everyday Activities and Realistic Simulation</h1>
          
          <div className="behavior1k-overview">
            <div className="overview-left">
              <div className="image-placeholder-large">
                <div className="placeholder-content">
                  <video src="/assets/img/b1k.mp4" alt="BEHAVIOR-1K Benchmark" autoPlay loop muted playsInline />
                </div>
              </div>
              <p className="image-subtitle">BEHAVIOR-1K: A Human-Centered, Embodied AI Benchmark with 1,000 Everyday Activities and Realistic Simulation</p>
            </div>
            <div className="overview-right">
              <h2>Project Overview</h2>
              <p>
                Recent advances in Embodied AI have led to the development of simulation frameworks and benchmarks aimed at evaluating 
                autonomous agents on complex, long-horizon tasks in human-centric environments. BEHAVIOR-1K offers a comprehensive 
                platform by combining automated planning language with full physics-based simulation, enabling the simulation of more 
                intricate, human-centered activities than previously possible.
              </p>
              
              <h3>Key Contributions</h3>
              <ul>
                <li><strong>Action Primitive Decomposition:</strong> Decomposed complex, long-horizon tasks into learnable action primitives (pick, place, navigate)</li>
                <li><strong>Collision-Free Execution Pipeline:</strong> Implemented a collision-free action primitives execution pipeline using curobo</li>
              </ul>

              <h3>References</h3>
              <ul>
                <li><strong>Cem Gokmen:</strong> cgokmen [at] stanford (dot) edu</li>
                <li><strong>Ruohan Zhang:</strong> zharu [at] stanford (dot) edu</li>
              </ul>
              
              <div className="behavior1k-links">
                <a href="https://arxiv.org/abs/2303.03594" target="_blank" rel="noopener noreferrer" className="link-button">
                  View Paper
                </a>
                <a href="https://behavior.stanford.edu/" target="_blank" rel="noopener noreferrer" className="link-button">
                  Visit Website
                </a>
              </div>
            </div>
          </div>
          
          <div className="behavior1k-details">
            <h2>Research Context</h2>
            <p>
              Recent advances in Embodied AI have led to the development of simulation frameworks and benchmarks aimed at evaluating 
              autonomous agents on complex, long-horizon tasks in human-centric environments. Frameworks such as SAPIEN, ManiSkill2, 
              and VirtualHome have showcased progress in in-simulation task planning and language-guided task execution.
            </p>
            
            <p>
              Building on these foundations, BEHAVIOR-1K offers a more comprehensive platform by combining automated planning language 
              with full physics-based simulation. Their modeling of objects and interactions enables the simulation of more intricate, 
              human-centered activities than previously possible.
            </p>

            <h2>BEHAVIOR-1K: Embodied AI Benchmark and Realistic Simulation</h2>
            <p>
              As embodied AI systems progress toward real-world deployment, there is an urgent need for simulation frameworks that 
              evaluate agents' capabilities in complex human-centric tasks. BEHAVIOR-1K is designed to address this challenge by 
              introducing a comprehensive suite of long-horizon household activities. The benchmark consists of two main components:
            </p>

            <ul>
              <li><strong>A Task Set of 1,000 Everyday Activities,</strong> encompassing scenarios such as cooking and cleaning. 
              These tasks are distributed across 50 richly detailed scenes, including homes, offices, and restaurants, containing 
              over 9,000 objects annotated with both physical and semantic attributes.</li>
              
              <li><strong>OmniGibson,</strong> a high-fidelity simulation environment that supports realistic physics, allowing 
              for the nuanced symbolical to physical interactions required in embodied AI tasks.</li>
            </ul>

            <h3>Task Definition in Behavior Domain Definition Language</h3>
            <p>
              To specify tasks in a standardized automated planning language, BEHAVIOR-1K adopts a domain-specific variant of the 
              Planning Domain Definition Language (PDDL), called the <em>Behavior Domain Definition Language</em> (BDDL). A BDDL 
              problem file specifies the domain via <code>:domain</code>, followed by instantiated objects under <code>:objects</code>. 
              The initial state <code>:init</code> is described using logical predicates, while the goal state <code>:goal</code> 
              defines a conjunction of desired predicates.
            </p>

            <div className="code-example">
              <h4>Example: Cleaning a Rug Task</h4>
              <pre><code>{`(define (problem clean_a_rug-0)
    (:domain omnigibson)
    (:objects
        vacuum.n.04_1 - vacuum.n.04
        rug.n.01_1 - rug.n.01
        dust.n.01_1 - dust.n.01
        floor.n.01_1 - floor.n.01
        agent.n.01_1 - agent.n.01)
    (:init 
        (ontop vacuum.n.04_1 floor.n.01_1)
        (covered rug.n.01_1 dust.n.01_1)
        (ontop rug.n.01_1 floor.n.01_1)
        (ontop agent.n.01_1 floor.n.01_1)
        (inroom floor.n.01_1 utility_room))
    (:goal 
        (not (covered ?rug.n.01_1 ?dust.n.01_1)))`}</code></pre>
            </div>

            <p>
              BDDL extends PDDL by introducing domain-specific object types and annotations relevant to physical environments. 
              In the example above, the task is to clean the rug, with the goal condition specifying that the rug should no 
              longer be covered by dust. BDDL encodes spatial predicates and environmental contexts such as <code>filled</code> 
              and <code>ontop</code> to represent visually-relevant conditions needed for the agent to plan a practical sequence.
            </p>

            <h3>Symbolic-to-Physical Task Execution</h3>
            <p>
              The execution of BDDL-defined tasks is achieved through <em>OmniGibson</em>, a high-fidelity simulation framework 
              built on top of NVIDIA IsaacSim and the PhysX physics engine. It renders the world with an environment interface 
              that includes scenes, tasks, robots, and objects, and is compatible with OpenAI Gym for reinforcement learning-based control.
            </p>

            <div className="image-placeholder">
              <div className="placeholder-content">
                <img src="/assets/img/Tiago.jpg" alt="Tiago Robot Performing Grasping" />
              </div>
            </div>
            <p className="image-subtitle">A Tiago robot performing grasping within BEHAVIOR, an action primitive that is the building block of "moving a bottle"</p>

            <p>
              What distinguishes BEHAVIOR from other simulation frameworks is its ability to convert symbolic BDDL plans into 
              physically executable robot trajectories using realistic physics simulation. VirtualHome is a language-based simulator 
              that operates at the semantic level; it lacks physics rendering to simulate interactions between objects. While SAPIEN 
              and ManiSkill support physics simulation, they do not provide the same level of realism as OmniGibson.
            </p>

            <p>
              The use of IsaacSim in BEHAVIOR enables high-fidelity physical interactions with rigid body dynamics, deformable 
              objects, and fluids, which is critical for simulating nuanced interactions in realistic household environments.
            </p>

            <p>
              In BEHAVIOR, each high-level symbolic action, such as "moving a bottle", is decomposed into a sequence of 
              low-level action primitives. These primitives represent concrete manipulation behaviors, such as grasping, pouring, 
              and placing, and are parameterized based on the scene and object context. They serve as the executable foundation 
              for carrying out BDDL-defined plans on robotic agents.
            </p>

            <h2>Action Primitive Implementation</h2>
            <p>
              The algorithmic implementation for motion primitives follows a systematic approach that combines sampling, 
              validation, and execution phases. Each primitive operates through a unified logical flow that ensures both 
              safety and efficiency in robotic manipulation tasks.
            </p>

            <h3>Core Algorithmic Flow</h3>
            <p>
              The action primitive execution follows these key steps:
            </p>

            <ol>
              <li><strong>End Effector Pose Sampling:</strong> Generate valid end effector (EEF) poses for the target manipulation task</li>
              <li><strong>Reachability Validation:</strong> Test whether the sampled pose is within the robot's reach using IsaacSim's IK solver</li>
              <li><strong>Flow Selection:</strong> Based on IK validation results, execute either navigation or manipulation flow</li>
              <li><strong>Path Execution:</strong> Execute the computed motion path using appropriate controllers</li>
            </ol>

            <h3>Navigation Flow</h3>
            <p>
              When the IK solver returns an invalid configuration, the system switches to navigation flow. This process involves:
            </p>

            <ul>
              <li><strong>Base Pose Sampling:</strong> Sample base poses in SE(2) near the proposed EEF pose</li>
              <li><strong>Collision-Free Validation:</strong> Check each pose for collision-free status and robot reachability</li>
              <li><strong>Motion Planning:</strong> Use OMPL with RRT algorithm and custom motion validator</li>
              <li><strong>Path Execution:</strong> Execute the computed navigation path</li>
            </ul>

            <p>
              The custom motion validator implements a specific motion pattern: the robot first turns to face the goal, 
              moves linearly to the target, then rotates to the final orientation. This approach differs from default 
              RRT implementations that perform simultaneous translation and rotation.
            </p>

            <h3>Manipulation Flow</h3>
            <p>
              When a valid arm configuration is found, the manipulation flow consists of three sequential phases:
            </p>

            <ul>
              <li><strong>Inverse Kinematics:</strong> Find valid arm configuration to reach the target EEF pose</li>
              <li><strong>Configuration Space Planning:</strong> Use OMPL motion planner bounded by joint limits to find a path</li>
              <li><strong>Joint Control Execution:</strong> Execute the computed path using joint controllers</li>
            </ul>

            <p>
              Following the manipulation phase, each primitive executes its specific behavior (grasping, closing, opening, etc.) 
              tailored to the particular task requirements.
            </p>

            <h3>Collision Detection System</h3>
            <p>
              A critical technical innovation in the primitive implementation is the efficient collision detection system. 
              Rather than using simulation-based collision checking (which proved prohibitively slow), the system implements 
              a mesh-based approach that achieves 20x speed improvement.
            </p>

            <h4>Navigation Collision Detection</h4>
            <p>
              For navigation tasks, the system creates copies of the robot's collision meshes and stores their transforms 
              relative to the robot base. During collision detection, the robot is reassembled at specified locations by 
              calculating mesh poses in the world frame. The system then checks for overlaps with other scene objects, 
              with special handling for objects held by the robot (ignoring end effector-object overlaps).
            </p>

            <h4>Manipulation Collision Detection</h4>
            <p>
              Manipulation collision detection is more complex due to the need to validate different arm configurations. 
              The system uses Omniverse's forward kinematics solver to compute relative poses of robot meshes for given 
              joint configurations. World poses are then calculated and collision checking is performed, with robot meshes 
              added to the invalid mesh list to prevent self-collision.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Behavior1K; 
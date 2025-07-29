import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PolarExpress.css';
import { FaArrowLeft } from 'react-icons/fa';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

function PolarExpress() {
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
    <div className="polar-express-section">
      <div className="polar-express-container">
        <button className="back-button" onClick={handleBack}>
          <FaArrowLeft /> Back to Research
        </button>
        
        <div className="polar-express-content">
          <h1 className="polar-express-title">POLAR-Express: Efficient and Precise Formal Reachability Analysis of Neural-Network Controlled Systems</h1>
          
          <div className="polar-express-overview">
            <div className="overview-left">
              <img 
                src="/assets/img/obstacle.gif" 
                alt="POLAR-Express Tool Demo" 
                className="polar-express-media"
              />
              <p className="video-subtitle">runtime safety verification with POLAR-Express</p>
            </div>
            <div className="overview-right">
              <h2>Project Overview</h2>
              <p>
                POLAR-Express is a state-of-the-art verification tool for reachability analysis of Neural Network-Controlled Systems (NNCSs). 
                It provides efficient and precise formal verification to ensure the safety of autonomous systems that rely on neural networks 
                for decision-making, addressing the critical challenge of runtime safety verification in safety-critical domains.
              </p>
              
              <h3>Key Contributions</h3>
              <ul>
                <li><strong>Layer-by-Layer Propagation:</strong> Novel approach for approximating neural network outputs using Taylor Models</li>
                <li><strong>Runtime Safety Verification:</strong> Real-time monitoring and intervention for NN-controlled systems</li>
                <li><strong>Controller Switching Logic:</strong> Safe online controller switching strategy for dynamic environments</li>
                <li><strong>Benchmark Efficiency:</strong> Most accurate and tightest reachable set computation among existing tools</li>
              </ul>
              
              <div className="polar-express-links">
                <a href="https://arxiv.org/abs/2408.08592" target="_blank" rel="noopener noreferrer" className="link-button">
                  View Paper
                </a>
                <a href="https://github.com/ChaoHuang2018/POLAR_Tool" target="_blank" rel="noopener noreferrer" className="link-button">
                  Download Tool
                </a>
              </div>
            </div>
          </div>
          
          <div className="polar-express-details">
            <h2>Research Context</h2>
            <p>
              Formal verification provides a mathematical framework that proves system behavior remains within safety boundaries. 
              Commercially available autonomous systems share two key characteristics that make them suitable candidates for formal verification: 
              well-understood nonlinear dynamics and abundant safe demonstration data.
            </p>
            
            <p>
              However, safety guarantees become challenging, and sometimes impossible, to obtain when systems operate in unknown environments. 
              Neural network control policies further complicate this challenge due to their inherent uncertainty characteristics. 
              This limitation necessitates the development of efficient and rigorous approaches capable of adapting to inherent environmental uncertainties.
            </p>

            <h2>Neural Network-Controlled Systems (NNCS)</h2>
            <p>
              NNCSs represent a class of cyber-physical systems where neural networks serve as the primary control mechanism. 
              The formal definition consists of four key components:
            </p>
            
            <div className="nncs-components">
                             <div className="component">
                 <h4>Plant Dynamics</h4>
                 <p>The continuous-time dynamics: <InlineMath math="\dot{x} = f(x, u)" /> where <InlineMath math="x \in \mathbb{R}^n" /> is the state variable, <InlineMath math="u \in \mathbb{R}^m" /> is the control input, and f is a Lipschitz continuous function.</p>
               </div>
              
                             <div className="component">
                 <h4>Neural Network Controller</h4>
                 <p>A feedback controller <InlineMath math="\kappa(\cdot)" /> that operates at discrete sampling times <InlineMath math="i\delta" /> for <InlineMath math="i = 0, 1, 2, \ldots" /></p>
               </div>
              
                             <div className="component">
                 <h4>Processing Pipeline</h4>
                 <p>Preprocessing phase transforms sensor measurements <InlineMath math="y" /> into controller input format <InlineMath math="z = g(y)" />. Postprocessing phase maps controller output <InlineMath math="v = \kappa(x)" /> to control input <InlineMath math="u = h(v)" />.</p>
               </div>
              
                             <div className="component">
                 <h4>System Evolution</h4>
                 <p>Between sampling intervals <InlineMath math="[i\delta, (i+1)\delta]" />, the system evolves according to plant dynamics, forming a closed-loop interaction between the NN controller and physical environment.</p>
               </div>
            </div>

            <h2>Reachability Analysis</h2>
            <p>
              Reachability analysis is a safety verification technique that determines whether a dynamical system can reach certain states 
              from a given initial set of states. In the context of safety-critical systems, it helps verify that a system never enters 
              unsafe regions of the state space during operation.
            </p>
            
                         <p>
               Formally, consider a dynamical system with state space <InlineMath math="\mathcal{X}" />. Let <InlineMath math="\mathcal{X}_0 \subseteq \mathcal{X}" /> be initial states and <InlineMath math="\mathcal{X}_T \subseteq \mathcal{X}" /> be target states. 
               The reachability problem asks whether there exists a trajectory that starts from some state in <InlineMath math="\mathcal{X}_0" /> and eventually reaches 
               a state in <InlineMath math="\mathcal{X}_T" />. Safety verification ensures that unsafe states <InlineMath math="\mathcal{X}_{\mathcal{N}}" /> are never reached.
             </p>

            <div className="image-placeholder">
              <div className="placeholder-content">
                <img
                  src="/assets/img/reachability.png"
                  alt="Reachability Analysis Illustration"
                  title="Reachability Analysis Illustration"
                />
                <span>Reachability Analysis Illustration</span>
                <p>System evolution from initial region (green) over discrete steps. Reachability Analysis checks if it can reach the target (red), while safety verification checks if it avoids the unsafe region (black).</p>
              </div>
            </div>

            <h2>Functional Over-Approximation and Safety Verification</h2>
            <p>
              For complex nonlinear systems, especially those with NN controllers, it is often impossible to compute exact reachability. 
              Therefore, existing tools compute a tight overapproximation of the reachable sets for NNCSs.
            </p>
            
                         <p>
               Recent efforts leverage a functional overapproximation approach to characterize system evolution. Define a flowmap function 
               <InlineMath math="\phi(x_0, t): \mathbb{R}^n \times \mathbb{R}_{\geq 0} \rightarrow \mathbb{R}^n" />, which maps an initial state <InlineMath math="x_0" /> to the resulting system state <InlineMath math="\phi(x_0, t)" /> at time <InlineMath math="t" />. 
               It can be over-approximated by a Taylor Model (TM) over bounded time intervals.
             </p>
             
             <p>
               Within this framework, we say a state <InlineMath math="x'" /> is reachable over some time horizon if <InlineMath math="\exists x_0 \in \mathcal{X}_0" /> and time <InlineMath math="t \in \mathbb{R}_{\geq 0}" /> such that <InlineMath math="x' = \phi(x_0, t)" />. 
               The complete reachable set <InlineMath math="\mathcal{X}_r^T" /> for a time horizon <InlineMath math="T" /> is defined as:
             </p>
            
                         <div className="math-equation">
               <BlockMath math="\mathcal{X}_r^T = \{\phi(x_0, t) \mid x_0 \in \mathcal{X}_0 \wedge t \in T\}" />
             </div>

            <h2>POLAR-Express: Layer-by-Layer Propagation</h2>
            <p>
              POLAR-Express is the state-of-the-art verification tool for the reachability analysis of NNCSs. Compared to existing tools, 
              it generates the most accurate and tightest reachable set with the highest benchmark efficiency.
            </p>
            
                         <p>
               To achieve this, POLAR-Express approximates the NN output using a TM through a layer-by-layer propagation scheme. 
               At each layer, the output of each neuron is represented as a polynomial function <InlineMath math="p" /> plus a symbolic remainder interval <InlineMath math="I" />. 
               Starting from the input domain <InlineMath math="p_i(\cdot) + I_i" />, the method sequentially propagates through each layer by composing affine 
               transformations and activation functions with TM arithmetic.
             </p>

            <div className="image-placeholder-large">
              <div className="placeholder-content">
                <img src="/assets/img/layer.png" alt="layer"/>
                <span>Layer-by-Layer Propagation</span>
                <p>Each layer's output is represented as a polynomial plus a remainder. Nonlinear activations are approximated using either Taylor or Bernstein polynomials for minimal error.</p>
              </div>
            </div>

            <h2>Runtime Safety Verification: TurtleBot Case Study</h2>
            <p>
              As NNCSs become increasingly integrated into safety-critical domains such as autonomous vehicles, medical devices, 
              and smart infrastructure, verifying their safe behavior in real-time has become a pressing challenge.
            </p>
            
                         <p>
               Our experiment centers on a Turtlebot 3 Burger executing a left-turn navigation task in a 5-meter bounded environment, 
               using a neural controller <InlineMath math="\kappa_{nn}" />. It is trained on 100 expert demonstrations collected in an obstacle-free setting with 
               a discrete control loop of 0.2s. The key question is whether POLAR-Express can monitor the robot's behavior online 
               and intervene effectively when new, unmodeled obstacles appear along its planned trajectory.
             </p>

            <div className="experiment-overview">
              <div className="experiment-image">
                <div className="placeholder-content">
                  <img src="/assets/img/map_overview.png" alt="map"/>
                  <span>Simulation Map Overview</span>
                  <p>Turtlebot executing a left-turn with localization and control notations.</p>
                </div>
              </div>
              <div className="experiment-image">
                <div className="placeholder-content">
                  <img src="/assets/img/polar-express.png" alt="polar"/>
                  <span>Runtime Controller Switching Logic</span>
                  <p>At runtime, the system switches from κₙₙ to κᵦ when POLAR-Express predicts reachable states intersecting with unsafe regions.</p>
                </div>
              </div>
            </div>

            <h3>Control Switching Logic</h3>
                         <p>
               The Turtlebot uses LiDAR for obstacle detection and localizes its state <InlineMath math="\langle x, y, \theta \rangle" /> via Adaptive Monte-Carlo Localization (AMCL). 
               Its dynamics follows:
             </p>
            
                         <div className="math-equation">
               <BlockMath math="\begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{\theta} \end{bmatrix} = \begin{bmatrix} \cos(\theta)v \\ \sin(\theta)v \\ \omega \end{bmatrix}" />
             </div>
            
                         <p>
               At runtime, POLAR-Express computes the reachable set <InlineMath math="\mathcal{X}_r^{T'}" /> from the current state <InlineMath math="s" /> over a horizon <InlineMath math="T'" />. 
               If this reachable set intersects with a detected unsafe region <InlineMath math="\mathcal{X}_{\mathcal{N}}" /> (i.e., <InlineMath math="\mathcal{X}_r^{T'} \cap \mathcal{X}_{\mathcal{N}} \neq \emptyset" />), control switches to a backup controller <InlineMath math="\kappa_b" />. 
               Once the reachable set becomes disjoint from <InlineMath math="\mathcal{X}_{\mathcal{N}}" />, control switches back to <InlineMath math="\kappa_{nn}" />.
             </p>

            <div className="trajectory-visualization">
              <div className="trajectory-image">
                <div className="placeholder-content">
                  <img src="/assets/img/control_step_10.png" alt="10" style={{ width: '100%' }}/>
                  <span>10 time steps</span>
                </div>
              </div>
              <div className="trajectory-image">
                <div className="placeholder-content">
                  <img src="/assets/img/control_step_30.png" alt="30" style={{ width: '100%' }}/>
                  <span>30 time steps</span>
                </div>
              </div>
              <div className="trajectory-image">
                <div className="placeholder-content">
                  <img src="/assets/img/trajectory.png" alt="trajectory" style={{ width: '100%' }}/>
                  <span>Overall trajectory</span>
                </div>
              </div>
            </div>

            <h3>Experimental Results</h3>
            <p>
              The Turtlebot is evaluated with this runtime verification framework across multiple scenarios, including cases with single 
              and multiple unexpected obstacles. POLAR-Express successfully identified collisions and switches to the backup controller.
            </p>
            
            <p>
              However, our experiments also highlighted important trade-offs in using reachability analysis at runtime. Both the lookahead 
              horizon and the complexity of the polynomial approximations impact performance. A longer prediction horizon can lead to more 
              conservative behavior and slower response to sudden hazards due to longer computation time.
            </p>

            <div className="results-table">
              <h4>Runtime and Controller Usage with Varying Time Steps</h4>
              <table>
                <thead>
                  <tr>
                    <th>Steps</th>
                    <th>10</th>
                    <th>15</th>
                    <th>20</th>
                    <th>30</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Runtime (s)</td>
                    <td>0.18</td>
                    <td>0.26</td>
                    <td>0.35</td>
                    <td>0.53</td>
                  </tr>
                  <tr>
                    <td>Task Time (s)</td>
                    <td>77.73</td>
                    <td>80.05</td>
                    <td>82.32</td>
                    <td>89.31</td>
                  </tr>
                  <tr>
                    <td>Backup Controller Total Time (s)</td>
                    <td>20.97</td>
                    <td>22.37</td>
                    <td>25.19</td>
                    <td>28.99</td>
                  </tr>
                  <tr>
                    <td>Backup Controller Utilization (%)</td>
                    <td>26.97</td>
                    <td>27.94</td>
                    <td>30.6</td>
                    <td>32.46</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Impact and Future Work</h2>
            <p>
              This case study demonstrates that functional reachability analysis can serve as a viable runtime safety monitor for NNCS 
              in low-dimensional settings. The POLAR-Express framework provides provable safety guarantees by tightly over-approximating 
              the system's future states and enabling proactive intervention.
            </p>
            
            <p>
              Nonetheless, scalability remains a key challenge: multivariate polynomial computations does not scale well to high-dimensional 
              systems or long horizons. For systems with large state dimension or controllers that process high-dimensional inputs 
              (e.g. vision-based policies with pixel inputs), real-time reachability analysis may become challenging. These findings 
              motivate continued research into more scalable abstraction techniques that can bridge formal safety guarantees and 
              practical real-time operation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PolarExpress; 
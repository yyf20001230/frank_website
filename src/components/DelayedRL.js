import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DelayedRL.css';
import { FaArrowLeft } from 'react-icons/fa';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

function DelayedRL() {
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
    <div className="delayed-rl-section">
      <div className="delayed-rl-container">
        <button className="back-button" onClick={handleBack}>
          <FaArrowLeft /> Back to Research
        </button>
        
        <div className="delayed-rl-content">
          <h1 className="delayed-rl-title">Learning in Slow Motion: Reinforcement Learning for Decision-Making Under Uncertainty</h1>
          
          <div className="delayed-rl-overview">
            <div className="overview-left">
              <img 
                src="/assets/img/quadrotor.gif" 
                alt="Quadrotor Control with Delays" 
                className="delayed-rl-image"
              />
              <p className="image-subtitle">Quadrotor control under observation and action delays</p>
            </div>
            <div className="overview-right">
              <h2>Project Overview</h2>
              <p>
                Reinforcement Learning (RL) has achieved remarkable success across diverse domains, including video games, robotics, 
                and autonomous systems. However, real-world deployment of RL in safety-critical industries faces significant challenges 
                due to unavoidable delays from hardware constraints, communication latencies, and data processing pipelines.
              </p>
              
              <h3>Key Contributions</h3>
              <ul>
                <li><strong>Inverse Delayed Reinforcement Learning (IDRL):</strong> Extends inverse RL to handle delayed expert demonstrations using adversarial reward learning</li>
                <li><strong>Delayed Transformer-Constrained Offline RL (DT-CORL):</strong> Belief-based framework for offline RL under delays with transformer-based state prediction</li>
                <li><strong>Sim-to-Real Transfer:</strong> Real-world evaluation on Crazyflie quadrotor platform</li>
                <li><strong>Comprehensive Delay Modeling:</strong> Addresses observation, action, and reward delays in discrete action spaces</li>
              </ul>
              
              <div className="delayed-rl-links">
                <a href="https://arxiv.org/abs/2412.02931" target="_blank" rel="noopener noreferrer" className="link-button">
                  View IDRL Paper
                </a>
                <a href="https://arxiv.org/abs/2506.00131" target="_blank" rel="noopener noreferrer" className="link-button">
                  View DT-CORL Paper
                </a>
              </div>
            </div>
          </div>
          
          <div className="delayed-rl-details">
            <h2>Research Context</h2>
            <p>
              Reinforcement Learning is a computational framework for sequential decision-making, where an agent interacts with an environment 
              to maximize cumulative reward over time. In comparison to traditional data-driven control strategies such as Control Barrier Functions (CBF) 
              that rely on explicit system dynamics and pre-defined objectives, RL discovers policies that maximize expected returns directly through 
              <em>learning from interactions</em>, or by leveraging expert demonstrations in cases such as Behavior Cloning (BC).
            </p>
            
            <p>
              However, we observe limited real-world deployment of RL in safety-critical industries due to unavoidable delays on hardware constraints, 
              communication latencies, and data processing pipelines. Under the RL formulation, delays can be categorized into three types: 
              <strong>observation delay</strong>, where sensory data lags behind physical events; <strong>action delay</strong>, where executed control 
              commands reach actuators only after non-negligible latency; and <strong>reward delay</strong>, where rewards are received with a temporal lag after the action.
            </p>

            <h2>Delayed Reinforcement Learning Modeling</h2>
            <p>
              A classical RL problem is typically modeled as a finite-horizon Markov Decision Process (MDP) defined by the tuple 
              <InlineMath math="\langle \mathcal{S}, \mathcal{A}, \mathcal{P}, r, H, \gamma, \rho_0 \rangle" />, where <InlineMath math="\mathcal{S}" /> is the state space, 
              <InlineMath math="\mathcal{A}" /> the action space, <InlineMath math="\mathcal{P}: \mathcal{S} \times \mathcal{A} \times \mathcal{S} \rightarrow [0,1]" /> 
              the transition dynamics, <InlineMath math="r: \mathcal{S} \times \mathcal{A} \rightarrow \mathbb{R}" /> the reward function, 
              <InlineMath math="H" /> the horizon, <InlineMath math="\gamma \in (0,1)" /> the discount factor, and <InlineMath math="\rho_0" /> the initial state distribution.
            </p>
            
            <p>
              At each timestep <InlineMath math="t" />, the agent selects an action <InlineMath math="a_t \sim \pi(\cdot | s_t)" /> under policy 
              <InlineMath math="\pi: \mathcal{S} \times \mathcal{A} \rightarrow [0,1]" />, receives a reward <InlineMath math="r_t = r(s_t, a_t)" />, 
              and transitions to the next state <InlineMath math="s_{t+1} \sim \mathcal{P}(\cdot | s_t, a_t)" />. The discounted visitation distribution 
              of trajectory <InlineMath math="\tau" /> under <InlineMath math="\pi" /> is:
            </p>
            
            <div className="math-equation">
              <BlockMath math="p(\tau) = \rho_0 \prod_{t=0}^{H-1} \gamma^t \mathcal{P}(s_{t+1} | s_t, a_t) \pi(a_t | s_t)" />
            </div>

            <p>
              RL learns the optimal policy <InlineMath math="\pi^*" /> that maximizes the expected discounted return:
            </p>
            
            <div className="math-equation">
              <BlockMath math="\pi^* = \arg\max_\pi \mathbb{E}_\pi \left[ \sum_{t=0}^{H-1} \gamma^t r_t \right]" />
            </div>

            <h2>Delayed MDP Formulation</h2>
            <p>
              In a delayed environment, the <strong>delayed RL</strong> problem can be reformulated as a <em>delayed MDP</em> with Markov property 
              based on the augmentation approaches. Assuming a fixed observation delay <InlineMath math="\Delta" />, the delayed MDP is formulated as 
              <InlineMath math="\mathcal{M}_\Delta = \langle \mathcal{X}, \mathcal{A}, \mathcal{P}_\Delta, r_\Delta, H, \gamma, \rho_\Delta \rangle" />, 
              where the augmented state space is defined as <InlineMath math="\mathcal{X} := \mathcal{S} \times \mathcal{A}^\Delta" />. 
              A typical augmented state is <InlineMath math="x_t = (s_{t-\Delta}, a_{t-\Delta}, \dots, a_{t-1}) \in \mathcal{X}" />. 
              The delayed transition kernel is:
            </p>
            
            <div className="math-equation">
              <BlockMath math="\mathcal{P}_\Delta(x_{t+1} | x_t, a_t) = \mathcal{P}(s_{t-\Delta+1} | s_{t-\Delta}, a_{t-\Delta}) \, \delta_{a_t}(a'_t) \, \prod_{i=1}^{\Delta-1} \delta_{a_{t-i}}(a'_{t-i})" />
            </div>
            
            <p>
              where <InlineMath math="\delta" /> denotes the Dirac distribution. The reward in delayed RL is typically defined as:
            </p>
            
            <div className="math-equation">
              <BlockMath math="r_\Delta(x_t, a_t) := \mathbb{E}_{s_t \sim b(\cdot|x_t)}[r(s_{t}, a_t)]" />
            </div>
            
            <p>
              where <InlineMath math="b" /> is the belief function to approximate the posterior distribution of the current state <InlineMath math="s_t" /> 
              given the augmented history <InlineMath math="x_t" />:
            </p>
            
            <div className="math-equation">
              <BlockMath math="b(s_t | x_t) := \int_{\mathcal{S}^\Delta} \prod_{i=0}^{\Delta-1} \mathcal{P}(s_{t-\Delta+i+1} | s_{t-\Delta+i}, a_{t-\Delta+i}) \, ds_{t-\Delta+i+1}" />
            </div>
            
            <p>
              The trajectory distribution under a policy <InlineMath math="\pi_\Delta" /> in the delayed MDP is:
            </p>
            
            <div className="math-equation">
              <BlockMath math="p(\tau_\Delta) = \rho_\Delta(x_0) \prod_{t=0}^{H-1} \gamma^t \mathcal{P}_\Delta(x_{t+1} | x_t, a_t) \pi_\Delta(a_t | x_t)" />
            </div>
            
            <p>
              where the initial augmented state distribution is <InlineMath math="\rho_\Delta = \rho_0 \prod_{i=1}^{\Delta} \delta_{a_{-i}}" />.
            </p>

            <p>
              <em>Inverse Reinforcement Learning (IRL)</em> extends RL by inferring a reward function <InlineMath math="R_\theta: \mathcal{S} \times \mathcal{A} \rightarrow \mathbb{R}" /> 
              from expert demonstrations <InlineMath math="D_{\text{exp}} = \{\tau_1, \dots, \tau_N\}" />, where each trajectory <InlineMath math="\tau_i" /> 
              is generated by an unknown expert policy <InlineMath math="\pi^E" />. The IRL objective is to find the optimal reward parameter 
              <InlineMath math="\theta^*" /> that maximizes the log-likelihood of expert trajectories:
            </p>
            
            <div className="math-equation">
              <BlockMath math="\theta^* = \arg\max_\theta \sum_{\tau \in D_{\text{exp}}} \log p(\tau | \theta)" />
            </div>
            
            <p>
              where <InlineMath math="p(\tau | \theta) \propto \exp \left( \sum_{t=0}^{H-1} R_\theta(s_t, a_t) \right)" />. Under delays, 
              <em>delayed IRL</em> must handle temporally misaligned trajectories <InlineMath math="(s_{t-\Delta}, a_t, s_{t-\Delta+1}, \dots)" />, 
              raising the question of whether to condition the policy and reward on delayed observations <InlineMath math="s_{t-\Delta}" /> or augmented states <InlineMath math="x_t" />. 
              The choice of state representation critically influences the accuracy of inferred reward functions and the policy <InlineMath math="\pi(a|x)" />.
            </p>
            
            <p>
              <em>Offline RL</em> learns policies from static, pre-collected datasets <InlineMath math="D_{\text{offline}} = \{(s, a, r, s')\}" /> 
              without further environment interaction. When delays are present, the dataset reflects trajectories sampled from the delayed system:
            </p>
            
            <div className="math-equation">
              <BlockMath math="D_{\text{offline}} = \left\{ (x_t, a_t, R_\Delta(x_t, a_t), x_{t+1}) \right\}" />
            </div>
            
            <p>
              where <InlineMath math="x_t" /> captures the augmented delayed state. The offline RL objective is to learn a policy 
              <InlineMath math="\pi_\Delta(a|x)" /> that maximizes the expected return:
            </p>
            
            <div className="math-equation">
              <BlockMath math="\pi^* = \arg\max_\pi \mathbb{E}_{(x,a) \sim D_{\text{offline}}} \left[ \sum_{t=0}^{H-1} \gamma^t R_\Delta(x_t, a_t) \right]" />
            </div>

            <h2>Inverse Reinforcement Learning with Delayed Feedback</h2>
            <p>
              IDRL algorithm is designed to effectively recover reward function from expert demonstration where actions or observations are delayed. 
              IDRL tackles this by combining <strong>adversarial reward learning</strong> with <strong>auxiliary delayed policy optimization</strong>.
            </p>

            <h3>Problem Formulation</h3>
            <p>
              We begin by collecting a <em>delay-free</em> expert demonstration dataset <InlineMath math="\mathcal{D}_{\text{exp}}" />, which consists of trajectories 
              <InlineMath math="\tau = (s_0, a_0, s_1, a_1, \ldots)" /> generated by an expert policy. Assuming a constant delay <InlineMath math="\Delta" />, 
              we interact with the environment using the current delayed policy <InlineMath math="\pi_\Delta" /> to collect an additional dataset, 
              denoted as the <em>environment dataset</em> <InlineMath math="\mathcal{D}_{\text{env}}" />.
            </p>
            
            <p>
              To account for temporal mismatch in the states, we perform a <strong>delay-aware data augmentation</strong> step on both  
              <InlineMath math="\mathcal{D}_{\text{exp}}" /> and <InlineMath math="\mathcal{D}_{\text{env}}" /> to explicitly encode delays into the state-action representation. 
              Specifically, for each dataset, we construct <em>augmented</em> tuples of the form:
            </p>
            
            <div className="math-equation">
              <BlockMath math="(x_t, a_t, x_{t+1}), \quad \text{where} \quad x_t = (s_{t-\Delta}, a_{t-1}, \ldots)" />
            </div>

            <p>
              To infer a reward function from the expert data, IDRL employs an <em>adversarial framework</em>, where a binary 
              <strong>discriminator network</strong> <InlineMath math="D_\theta(x,a)" /> is trained to distinguish between augmented state-action pairs 
              <InlineMath math="(x,a)" /> sampled from the expert demonstration dataset and those from the environment dataset. 
              The discriminator is connected to a reward function <InlineMath math="R_\theta(x,a)" /> via the relation:
            </p>
            
            <div className="math-equation">
              <BlockMath math="D_\theta(x,a) = \frac{\exp(R_\theta(x,a))}{\exp(R_\theta(x,a)) + \pi_\Delta(a|x)}" />
            </div>
            
            <p>
              In this context, the imitator policy <InlineMath math="\pi_\Delta" /> serves as a generator to produce samples indistinguishable from expert samples. 
              The discriminator <InlineMath math="D_\theta(x,a)" /> is trained by minimizing the cross-entropy loss:
            </p>
            
            <div className="math-equation">
              <BlockMath math="\mathcal{L}_{\text{disc}} = -\mathbb{E}_{\mathcal{D}_{\text{exp}}} \left[\log D_\theta(x, a)\right] - \mathbb{E}_{\mathcal{D}_{\text{env}}} \left[\log(1 - D_\theta(x, a))\right]" />
            </div>
            
            <p>
              To prevent instable learning due to the interaction between discriminator network and generator policy on every iteration, 
              additional regularization terms <InlineMath math="\mathcal{L}_{\text{grad}}" /> and <InlineMath math="\mathcal{L}_{\text{entropy}}" /> 
              can be added for gradient penalty and entropy smoothing, respectively. The learned discriminator provides a surrogate reward signal for the policy:
            </p>
            
            <div className="math-equation">
              <BlockMath math="\hat{R}_\theta(x,a) = \log(D_\theta(x,a) + \delta) - \log(1 - D_\theta(x,a) + \delta)" />
            </div>
            
            <p>
              where <InlineMath math="\delta" /> is a marginal constant for numerical stability. The reward signal can be used to optimize the delayed RL objectives:
            </p>
            
            <div className="math-equation">
              <BlockMath math="\max_{\mathbb{E}_{\tau_\Delta \sim p(\tau_\Delta)}} \left[ \sum_{t=0}^{H-1} \gamma^t \hat{R}_\theta(\tau_\Delta) - H(\pi_\Delta) \right]" />
            </div>
            
            <p>
              Learning a policy in long delays can be challenging due to expanded augmentation states, making it difficult to attribute rewards to actions accurately. 
              To address this, IDRL integrates an <strong>Auxiliary Delay Policy Optimization</strong> component. This component introduces an 
              <em>auxiliary policy</em> <InlineMath math="\pi^\tau_\phi" /> and <em>auxiliary critics</em> <InlineMath math="Q^\tau_{\theta_1}, Q^\tau_{\theta_2}" /> 
              to estimate value functions for shorter delays. The <InlineMath math="\Delta" />-step delay critics can be adjusted with temporal difference 
              bootstrapping using the algorithm in the literature.
            </p>

            <h3>Experimental Results</h3>
            <p>
              We evaluate the performance of our <em>off-policy</em> IDRL framework on MuJoCo benchmarks. Our goal is to recover expert behavior 
              under delayed settings using expert trajectories collected from agents trained with VDPO in environments with 5, 10, and 25-step delays. 
              We compare IDRL against baselines: AIRL with PPO, DAC with Soft Actor-Critic (SAC), and BC, all trained on delayed observation states.
            </p>

            <div className="results-table">
              <h4>Performance Comparison Across Environments and Algorithms</h4>
              <table>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Delay</th>
                    <th>Expert</th>
                    <th>BC</th>
                    <th>AIRL</th>
                    <th>DAC</th>
                    <th>IDRL (Ours)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan="2">InvertedPendulum-v4</td>
                    <td>5</td>
                    <td>974.29±157.44</td>
                    <td>15.27±2.11</td>
                    <td>28.93±5.28</td>
                    <td>27.80±20.28</td>
                    <td className="best-score">1000.00±0.00</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>681.11±462.73</td>
                    <td>21.06±6.16</td>
                    <td>28.53±1.59</td>
                    <td>23.00±7.72</td>
                    <td className="best-score">867.87±186.87</td>
                  </tr>
                  <tr>
                    <td rowSpan="3">Hopper-v4</td>
                    <td>5</td>
                    <td>3738.91±34.63</td>
                    <td>176.67±43.35</td>
                    <td>203.26±113.29</td>
                    <td>516.88±364.13</td>
                    <td className="best-score">3569.99±44.33</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>3492.25±239.45</td>
                    <td>14.15±4.46</td>
                    <td>182.52±50.31</td>
                    <td>120.28±60.35</td>
                    <td className="best-score">3321.84±50.74</td>
                  </tr>
                  <tr>
                    <td>25</td>
                    <td>2107.44±1399.19</td>
                    <td>101.32±50.67</td>
                    <td>182.64±11.02</td>
                    <td>96.96±15.06</td>
                    <td className="best-score">1814.18±756.36</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Offline Reinforcement Learning with Temporal Delays</h2>
            <p>
              Building on the <em>delayed MDP</em> formalism and dataset augmentation, we now consider the offline reinforcement learning setting, 
              where the agent has access only to a static dataset <InlineMath math="\mathcal{D}" /> collected by a behavior policy <InlineMath math="\mu" />, 
              and learns an offline policy under deterministic and stochastic delays without environment interaction.
            </p>

            <h3>DT-CORL Framework</h3>
            <p>
              DT-CORL integrates a transformer-based belief model into offline RL pipelines, transforming the delayed MDP into a standard MDP 
              optimization problem by predicting latent belief states. Rather than relying on raw state augmentation, DT-CORL models a latent 
              belief distribution over current states conditioned on past actions and delayed observations.
            </p>

            <div className="image-placeholder-large">
              <div className="placeholder-content">
                <img src="/assets/img/diagram.png" alt="DT-CORL Framework"/>
                <span>DT-CORL Framework</span>
                <p>Transformer-based belief modeling integrated with policy-constrained offline learning for delayed environments.</p>
              </div>
            </div>

            <h3>Experimental Results on D4RL</h3>
            <p>
              We benchmark DT-CORL on standard MuJoCo locomotion tasks from the D4RL offline RL suite. We evaluate DT-CORL on the four standard 
              D4RL trajectory subsets—<em>expert</em>, <em>medium</em>, <em>medium-replay</em>, and <em>medium-expert</em>—for each of the three 
              locomotion tasks (Hopper, HalfCheetah, and Walker2d).
            </p>

            <div className="results-table">
              <h4>Normalized Returns (%) on D4RL Tasks with Deterministic Delays</h4>
              <table>
                <thead>
                  <tr>
                    <th>Method</th>
                    <th colSpan="3">HalfCheetah</th>
                    <th colSpan="3">Hopper</th>
                    <th colSpan="3">Walker2d</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th>4</th>
                    <th>8</th>
                    <th>16</th>
                    <th>4</th>
                    <th>8</th>
                    <th>16</th>
                    <th>4</th>
                    <th>8</th>
                    <th>16</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Aug-BC</td>
                    <td>23.1</td>
                    <td>5.0</td>
                    <td>3.6</td>
                    <td>65.3</td>
                    <td>52.1</td>
                    <td>46.5</td>
                    <td>66.1</td>
                    <td>51.6</td>
                    <td>14.0</td>
                  </tr>
                  <tr>
                    <td>Aug-CQL</td>
                    <td>24.2</td>
                    <td>3.8</td>
                    <td>3.7</td>
                    <td>67.7</td>
                    <td>66.2</td>
                    <td>21.1</td>
                    <td>75.8</td>
                    <td>31.2</td>
                    <td>13.0</td>
                  </tr>
                  <tr>
                    <td>Belief-CQL</td>
                    <td>49.2</td>
                    <td>8.9</td>
                    <td>3.0</td>
                    <td>75.4</td>
                    <td>56.8</td>
                    <td>42.9</td>
                    <td>87.0</td>
                    <td>64.1</td>
                    <td>39.2</td>
                  </tr>
                  <tr className="best-method">
                    <td><strong>DT-CORL</strong></td>
                    <td className="best-score">47.4</td>
                    <td className="best-score">27.8</td>
                    <td className="best-score">6.4</td>
                    <td className="best-score">79.4</td>
                    <td className="best-score">85.0</td>
                    <td className="best-score">71.8</td>
                    <td className="best-score">87.4</td>
                    <td className="best-score">87.6</td>
                    <td className="best-score">86.8</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Sim-to-Real Transfer: Crazyflie Case Study</h2>
            <p>
              Most experiments on delayed RL have been restricted to simulation environments such as MuJoCo. While convenient, these settings 
              often overlook the complexities inherent in real-world systems. To bridge this gap, we designed an experiment using the Crazyflie 
              to evaluate the robustness of delay-aware offline RL policies in a physical deployment scenario.
            </p>

            <div className="image-placeholder-large">
              <div className="placeholder-content">
                <img
                  src="/assets/img/crazyflie_training.png"
                  alt="Crazyflie Training Pipeline"
                  title="Crazyflie Training Pipeline"
                />
                <span>Overview of Sim-to-Real Pipeline</span>
                <p>End-to-end experimental pipeline: (1) Train delay-free PPO policy in IsaacSim; (2) Collect offline trajectories; (3) Train delay-aware offline RL policy; (4) Deploy on real Crazyflie with delays.</p>
              </div>
            </div>

            <h3>Experimental Setup</h3>
            <p>
              The process begins by training a <em>delay-free</em> PPO policy in IsaacSim—a high-fidelity simulator that models the Crazyflie's 
              physics and sensor characteristics. The policy trains the agent to track a circular trajectory of 0.2m. The reward function integrates 
              multiple control objectives to ensure performance and safety:
            </p>
            
            <div className="math-equation">
              <BlockMath math="r = r_{pos} + r_{pos} \cdot (r_{up} + r_{heading}) + r_{effort} + r_{action\_smoothness}" />
            </div>

            <div className="image-placeholder-large">
              <div className="placeholder-content">
                <img
                  src="/assets/img/Crazyflie_traj.png"
                  alt="Flight Trajectories Under Delays"
                  title="Flight Trajectories Under Delays"
                />
                <span>Flight Trajectories Under Varying Delays</span>
                <p>Flight trajectories of the Crazyflie completing a circular tracking task under varying control delays (0, 4, and 8 steps). Trajectories are colored by height (Z position).</p>
              </div>
            </div>

            <h2>Future Research Directions</h2>
            <p>
              As RL agents are increasingly deployed in safety-critical systems, it is vital to incorporate safety constraints into learning, 
              especially under delayed feedback, where compounding errors may lead to unsafe behavior. One direction is to integrate safety filters 
              or similar safety mechanisms into delayed offline RL. For example, a candidate formulation for the learning objective can be expressed as:
            </p>
            
            <div className="math-equation">
              <BlockMath math="\pi^* = \arg\max_\pi \mathbb{E}_{(x,a) \sim \mathcal{D}} \left[ \sum_{t=0}^{H-1} \gamma^t R_\Delta(x_t, a_t) \right] \quad \text{s.t.} \quad h(f(x_t, a_t)) \ge 0" />
            </div>

            <p>
              where <InlineMath math="h(\cdot)" /> encodes a safety constraint on future states predicted by a learned dynamics model <InlineMath math="f" />. 
              This is especially relevant when delays hinder real-time safety corrections, necessitating proactive constraint enforcement.
            </p>

            <p>
              Another limitation of current methods is the assumption of known, bounded delay distributions—often fixed or uniformly sampled from 
              <InlineMath math="[0, \Delta_{\max}]" />. However, real-world systems may exhibit unknown adversarial delays. A promising direction 
              is to treat the delay <InlineMath math="\Delta_t" /> as a latent variable drawn from an unknown distribution <InlineMath math="p(\Delta_t)" />. 
              The policy then optimizes its expected performance across this distribution:
            </p>
            
            <div className="math-equation">
              <BlockMath math="\mathbb{E}_{\Delta_t \sim p(\cdot)} \left[ r_\Delta(x_t, a_t) \right] = \sum_{\delta=0}^{\Delta_{\max}} p(\delta) \cdot \mathbb{E}_{s_t \sim b(\cdot | x_t, \delta)} [r(s_t, a_t)]" />
            </div>

            <p>
              where <InlineMath math="b(s_t | x_t, \delta)" /> is a belief distribution over current states conditioned on history and delay length. 
              This formulation enables learning robust policies without requiring explicit delay supervision and better reflects the real-world 
              uncertainty of in-the-wild deployments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DelayedRL; 
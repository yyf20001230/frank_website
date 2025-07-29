import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LLMSafety.css';
import { FaArrowLeft } from 'react-icons/fa';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

function LLMSafety() {
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
    <div className="llm-safety-section">
      <div className="llm-safety-container">
        <button className="back-button" onClick={handleBack}>
          <FaArrowLeft /> Back to Research
        </button>
        
        <div className="llm-safety-content">
          <h1 className="llm-safety-title">Benchmarking LLMs for Embodied AI Safety in Simulation Environments</h1>
          
          <div className="llm-safety-overview">
            <div className="overview-left">
              <img 
                src="/assets/img/LLM_demo.png" 
                alt="LLM Safety Benchmarking Framework" 
                className="llm-safety-image"
              />
              <p className="image-subtitle">Can LLM execute a house cleaning task, safely?</p>
            </div>
            <div className="overview-right">
              <h2>Project Overview</h2>
              <p>
                Modern embodied AI tasks typically involve high-dimensional state spaces and long-horizon goals, making traditional 
                PDDL+LP planners less practical. This has motivated the use of Large Language Models (LLMs) as high-level planners 
                capable of generating feasible task plans, yet it remains unclear whether LLMs can reliably account for underlying 
                safety constraints during plan generation.
              </p>
              
              <h3>Key Contributions</h3>
              <ul>
                <li><strong>Safety and Correctness Evaluation:</strong> Comprehensive benchmarking framework for LLM-generated action plans</li>
                <li><strong>Temporal Logic Integration:</strong> LTL and CTL-based safety checking for embodied AI systems</li>
                <li><strong>Computation Tree Analysis:</strong> Evaluation of all possible execution paths for safety violations</li>
                <li><strong>Simulation-Based Verification:</strong> Integration with VirtualHome and BEHAVIOR simulators</li>
              </ul>
              
              <div className="llm-safety-links">
                <span className="work-in-progress">
                  Work in Progress
                </span>
              </div>
            </div>
          </div>
          
          <div className="llm-safety-details">
            <h2>Research Context</h2>
            <p>
              Prior work such as COLIN has applied Linear Programming (LP) to solve PDDL-based automated planning problems involving 
              continuous numeric change. However, modern embodied AI tasks typically involve high-dimensional state spaces and long-horizon 
              goals, making traditional PDDL+LP planners less practical. These limitations have motivated the use of Large Language Models 
              (LLMs) as high-level planners capable of generating feasible task plans, yet it remains unclear whether LLMs can reliably 
              account for underlying safety constraints during plan generation.
            </p>
            
            <p>
              Recent frameworks like ShieldAgent and SafeWatch have introduced guardrail mechanisms to improve the safety of autonomous 
              agents by enforcing policy compliance at the action level. However, these approaches do not evaluate the safety of LLMs for 
              embodied agents at the symbolic planning level. Additionally, while prior work has benchmarked LLMs on their ability to 
              interpret goals and produce plausible action sequences, safety along the planned trajectory has not been assessed.
            </p>

            <h2>Linear Temporal Logic and Computation Tree Logic Representations</h2>
            <p>
              To formally define safety constraints and task goals, we employ temporal logic frameworks, <strong>Linear Temporal Logic</strong> (LTL) 
              and <strong>Computation Tree Logic</strong> (CTL). Both LTL and CTL are used in combination with standard propositional logical connectives 
              such as <InlineMath math="\neg" /> (negation), <InlineMath math="\wedge" /> (conjunction), <InlineMath math="\vee" /> (disjunction), 
              and <InlineMath math="\Rightarrow" /> (implication), along with quantifiers like <InlineMath math="\forall" /> (for all), 
              <InlineMath math="\exists" /> (there exists), and <InlineMath math="\exists^{=n}" /> (there exist exactly <InlineMath math="n" />).
            </p>
            
            <p>
              LTL provides operators that describe how propositions must hold over a single timeline, whereas CTL combines path quantifiers 
              with temporal modalities to express richer properties over a <strong>computation tree</strong>, a branching structure where each path 
              corresponds to a distinct sequence of world states. While existing benchmarks primarily assess the LTL correctness of logical 
              task execution, our contribution extends this by incorporating CTL-based safety checking.
            </p>

            <div className="results-table">
              <h4>Temporal Logic Symbols and Examples</h4>
              <table>
                <thead>
                  <tr>
                    <th>Symbol</th>
                    <th>Description</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="section-header">
                    <td colSpan="3"><strong>Linear Temporal Logic</strong></td>
                  </tr>
                  <tr>
                    <td><InlineMath math="X(p)" /></td>
                    <td>"Next": p holds in the next state</td>
                    <td><InlineMath math="X(\text{door\_closed})" /> – in the next state, the door is closed</td>
                  </tr>
                  <tr>
                    <td><InlineMath math="F(p)" /></td>
                    <td>"Eventually": p will hold at some future state</td>
                    <td><InlineMath math="F(\text{stove\_off})" /> – at some time in the future the agent turns off the stove</td>
                  </tr>
                  <tr>
                    <td><InlineMath math="G(p)" /></td>
                    <td>"Globally": p holds in all future states</td>
                    <td><InlineMath math="G(\neg\text{collision})" /> – throughout the entire execution, no collision ever occurs</td>
                  </tr>
                  <tr>
                    <td><InlineMath math="p\ U\ q" /></td>
                    <td>"Until": p holds in each state until another state q holds</td>
                    <td><InlineMath math="\text{holding\_object}\ U\ \text{object\_placed}" /> – the agent continues holding the object until it is placed</td>
                  </tr>
                  <tr className="section-header">
                    <td colSpan="3"><strong>Computation Tree Logic</strong></td>
                  </tr>
                  <tr>
                    <td><InlineMath math="A(p)" /></td>
                    <td>"Along all paths": p holds on every possible future path</td>
                    <td><InlineMath math="A(G(\neg\text{collision}))" /> – along all possible trajectories, there is never a collision</td>
                  </tr>
                  <tr>
                    <td><InlineMath math="E(p)" /></td>
                    <td>"There exists a path": p holds on at least one possible path</td>
                    <td><InlineMath math="E(F(\text{goal\_reached}))" /> – there exists some possible future in which the agent reaches the goal</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              CTL adds another dimension of verification because it combines a path quantifier (<InlineMath math="A" /> or <InlineMath math="E" />) 
              with a temporal operator (<InlineMath math="X, F, G, U" />), forming modalities such as <InlineMath math="AX" />, <InlineMath math="AG" />, 
              <InlineMath math="EF" />, and <InlineMath math="EU" />. This expressiveness is critical for modeling branching-time logic where 
              different LLM outputs may lead to multiple execution paths from the same initial state. Since LLM-generated plans are inherently 
              non-deterministic, CTL allows us to formally verify whether some or all possible action sequences satisfy given safety constraints.
            </p>

            <h2>LLM-Based Prompting Input and Output Modelling</h2>
            <p>
              To support consistent reasoning and safety checking, the LLM input and output representations are designed to align with the 
              symbolic configurations of VirtualHome simulation environments. Object references follow a hierarchical naming convention. 
              The uppercase name (e.g., <code>Cooker</code>) denotes an object category, while the lowercase term with a unique object ID 
              suffix (e.g., <code>oven.295</code>) denotes an object instance.
            </p>
            
            <p>
              In both all object sets <InlineMath math="\mathcal{X}" /> and task-relevant object set <InlineMath math="\mathcal{X}_t" />, 
              each object instance is annotated with a square-bracketed descriptors (e.g., <code>oven.295, [CAN_OPEN]</code>) indicating 
              object-specific properties. This communicates to the LLM for possible interactions and guides the model in identifying valid 
              manipulation actions.
            </p>

            <div className="results-table">
              <h4>Symbols in LLM-Based Safety Benchmarking</h4>
              <table>
                <thead>
                  <tr>
                    <th>Symbol</th>
                    <th>Description</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="section-header">
                    <td colSpan="3"><strong>Input Symbols</strong></td>
                  </tr>
                  <tr>
                    <td><InlineMath math="\mathcal{X}" /></td>
                    <td>Set of all objects with their properties in the environment</td>
                    <td><code>{`{oven.295, [CAN_OPEN], floor.7, [SURFACES], pasta.1001, [GRABBABLE]}`}</code></td>
                  </tr>
                  <tr>
                    <td><InlineMath math="\mathcal{X}_t" /></td>
                    <td>Set of relevant objects with their properties</td>
                    <td><code>{`{oven.295, [CAN_OPEN], pasta.1001, [GRABBABLE]}`}</code></td>
                  </tr>
                  <tr>
                    <td><InlineMath math="t" /></td>
                    <td>Task description</td>
                    <td>"Cook the pasta in the oven"</td>
                  </tr>
                  <tr>
                    <td><InlineMath math="b_N" /></td>
                    <td>Safety constraints in natural language</td>
                    <td>"Do not burn anything in the kitchen"</td>
                  </tr>
                  <tr className="section-header">
                    <td colSpan="3"><strong>Output Symbols</strong></td>
                  </tr>
                  <tr>
                    <td><InlineMath math="b_L" /></td>
                    <td>LTL safety constraints</td>
                    <td><code>G(ON(oven.295)) → F(OFF(oven.295))</code></td>
                  </tr>
                  <tr>
                    <td><InlineMath math="\bar{g}" /></td>
                    <td>Subgoals decomposed from the main task</td>
                    <td><code>[ONTOP(sauce_pan.1003, oven.295), ON(oven.295) and CLOSED(oven.295)]</code></td>
                  </tr>
                  <tr>
                    <td><InlineMath math="\bar{a}" /></td>
                    <td>Action sequences</td>
                    <td><code>[OPEN(oven.295), GRAB(pasta.1001)]</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>LLM-Based Planning and Benchmarking Pipeline</h2>
            <p>
              Leveraging an LLM for action planning, we design a pipeline in which the model generates subgoals and corresponding action 
              sequences for a given high-level task while incorporating LTL safety considerations. The pipeline consists of three modules, 
              <strong>safety interpretation</strong>, <strong>subgoal decomposition</strong>, and <strong>action sequencing</strong>, 
              each representing a different aspect of the LLM's reasoning and planning capabilities.
            </p>

            <div className="image-placeholder-large">
              <div className="placeholder-content">
                <img src="/assets/img/Benchmark_LLM.png" alt="LLM Benchmarking Pipeline"/>
                <span>Overview of the LLM-based task planning benchmark framework</span>
                <p>The process consists of Safety Interpretation, Subgoal Decomposition, and Action Sequencing, each with distinct input and output formats aligned with a symbolic simulation environment.</p>
              </div>
            </div>

            <h3>Safety Interpretation</h3>
            <p>
              The LLM is tasked with interpreting natural language safety guidelines and task descriptions to produce a formal representation 
              of safety in the form of LTL safety constraints. These safety rules may cover physical safety (e.g., avoiding collisions or 
              dangerous forces), procedural correctness (e.g., operating appliances in a prescribed sequence), and ethical or social 
              considerations (e.g., avoiding harm to humans or pets present in the environment).
            </p>
            
            <p>
              To support this task, human annotations use domain-specific knowledge to curate a <em>safety database</em> that catalogs 
              task-agnostic safety properties. For each object category, this database includes safety-relevant classifications such as 
              <code>DANGEROUS_APPLIANCE</code> (e.g., microwaves), <code>SOPHISTICATED_ELECTRONICS</code> (e.g., computers), or 
              <code>LIQUID</code> (e.g., water). These task-agnostic annotations guide the generation of context-sensitive constraints.
            </p>

            <h3>Subgoal Decomposition</h3>
            <p>
              Once safety constraints are established, the second module evaluates the LLM's ability to decompose a complex task into a 
              sequence of intermediate subgoals. These subgoals, denoted <InlineMath math="\bar{g}" />, represent semantically meaningful 
              milestones that make the task more manageable to execute. The LLM is prompted with a system prompt that includes a database 
              of object properties, all valid actions defined in the simulation environment, and the space of allowable object states.
            </p>
            
            <p>
              The task-specific inputs include safety constraints <InlineMath math="b_L" />, initial state <InlineMath math="s_0" />, 
              goal state <InlineMath math="g" />, natural language task description <InlineMath math="t" />, and a filtered set of 
              <em>relevant objects</em> <InlineMath math="\mathcal{X}_t" />.
            </p>

            <h3>Action Sequencing</h3>
            <p>
              The final module assesses the LLM's capability to generate valid and safe low-level action sequences <InlineMath math="\bar{a}" />, 
              which are intended to achieve each subgoal while satisfying the specified constraints. To isolate the LLM's planning ability, 
              the task description <InlineMath math="t" /> is omitted at this stage. With a similar system prompt on all available object 
              properties, actions, and states, the model is given the subgoals <InlineMath math="\bar{g}" />, safety constraints <InlineMath math="b_L" />, 
              initial and goal states <InlineMath math="s_0" />, <InlineMath math="g" />, the relevant object set <InlineMath math="\mathcal{X}_t" />, 
              and simulator-level specifications of valid actions and state transitions.
            </p>

            <h2>Executing Plans and CTL-Based Safety Checking</h2>
            <p>
              Once a plan is generated by an LLM, the next step is to execute and evaluate it in a simulated environment. Our evaluation 
              loop integrates LLM planning, simulation execution, and formal safety checking. In the first step, the LLM-generated action 
              sequences are passed to the simulator, serving as the <strong>transition model</strong> <InlineMath math="\mathcal{M}" />. 
              The transition model computes the resulting state <InlineMath math="s_{i+1}" /> after applying each action <InlineMath math="a_{i}" />.
            </p>
            
            <p>
              Executing an LLM-generated action sequence in the simulator produces a single <strong>action trajectory</strong> of the form:
            </p>
            
            <div className="math-equation">
              <BlockMath math="\langle s_1 \rangle, \langle a_1 \rangle, \langle s_2 \rangle, \ldots, \langle a_{k-1} \rangle, \langle s_k \rangle" />
            </div>
            
            <p>
              where each state-action pair reflects the agent's progression through the environment.
            </p>

            <div className="image-placeholder-large">
              <div className="placeholder-content">
                <img src="/assets/img/Benchmark_Flowchart.png" alt="Evaluation Flowchart"/>
                <span>Evaluation of LLM-generated action sequences via simulation</span>
                <p>Evaluation of LLM-generated action sequences via simulation platforms, followed by verification of safety properties through computation tree analysis and temporal logic.</p>
              </div>
            </div>

            <p>
              VirtualHome, a lightweight Unity-based simulator, abstracts away low-level physics and thus enables rapid testing across a 
              wide range of scenarios. On the other hand, BEHAVIOR provides a more detailed, physics-rich simulation for lower-level control 
              safety checking, albeit at a higher computational cost. In our framework, VirtualHome is primarily used for efficient large-scale 
              benchmarking, while BEHAVIOR is intended for future evaluations requiring more detailed physical interactions.
            </p>
            
            <p>
              Due to the inherent uncertainties in LLM outputs, the same initial state and prompt can evolve into multiple branches of action 
              trajectories. Our framework abbreviated them in a <em>computation tree</em>. Each blue cell in the diagram represents the 
              environment state, annotated with <em>node state</em> and <em>edge state</em>, while the red edges represent applied actions.
            </p>

            <div className="image-placeholder-large">
              <div className="placeholder-content">
                <img src="/assets/img/Benchmark_Diagram.png" alt="Computation Tree Analysis"/>
                <span>Detailed Illustration of the LLM Evaluation Process</span>
                <p>Detailed illustration of the evaluation process: LLM-generated action sequences are executed in the simulator, resulting in state-action trajectories. Branching occurs due to stochastic outcomes, forming a computation tree that is analyzed for CTL property violations.</p>
              </div>
            </div>

            <p>
              Traditional model checkers like PRISM, a probabilistic symbolic model checker for CTL verification, require formal Finite State 
              Machine (FSM) representations with explicit state spaces and transitions. However, the aforementioned simulation environments 
              operate with implicit state representations and approximate dynamics that do not conform to such rigid formalism. To bridge this 
              gap, we adopt a lightweight CTL-based safety checking framework that evaluates temporal properties directly across branches of 
              the computation tree without requiring complete formal system enumeration.
            </p>
            
            <p>
              In our approach, a CTL violation is recorded if any branch leads to a state where the safety property is violated. For example, 
              a violation of the property <code>AG(¬HOLD(Knife))</code> occurs if a path exists where the agent is holding a knife at any point. 
              To perform this check, we employ a <strong>Breadth-First Search</strong> (BFS) traversal of the computation tree, ensuring that 
              all reachable states are evaluated for compliance with the specified safety constraints.
            </p>

            <h2>Limitations and Future Work</h2>
            <p>
              To summarize, our work presents a unified framework for evaluating the safety of LLM-generated plans in embodied AI systems. 
              To our knowledge, this is the first systematic integration of CTL safety checking for all possible LLM-generated trajectories 
              in the context of embodied agent benchmarks. By formulating safety constraints as CTL and LTL properties, our approach goes 
              beyond traditional correctness metrics such as task success rates or logical validity to ensure safety across all possible 
              execution paths, addressing the inherent stochasticity of LLM outputs.
            </p>
            
            <p>
              Our framework leverages the transition model <InlineMath math="\mathcal{M}" /> via VirtualHome for lightweight, high-level 
              abstraction. While current experiments focus on VirtualHome for its efficiency, future work will extend evaluations to more 
              realistic simulators such as BEHAVIOR, enabling safety checking for lower-level control policies in physics-rich settings.
            </p>
            
            <p>
              A current limitation is the framework's <strong>agent dependence</strong>: VirtualHome models a generic "character" agent 
              without differentiation across robotic embodiments, whereas BEHAVIOR supports a diverse set of robot types, including manipulators, 
              humanoids, and holonomic platforms. Incorporating <em>agent-specific</em> safety constraints will enable more realistic, 
              embodiment-aware evaluations. In doing so, we can explore multi-agent scenarios requiring coordination and shared safety guarantees.
            </p>
            
            <p>
              Finally, integrating <em>PDDL</em> into the framework represents a key direction for future work. PDDL will enable standardized, 
              simulator-agnostic task descriptions and facilitate automated LLM prompt generation from formal task definitions, supporting 
              consistent benchmarking across simulators and extending safety checking to physical-level execution in platforms such as BEHAVIOR.
            </p>
            
            <p>
              Our work establishes a scalable, rigorous foundation for the safety checking of LLM-driven embodied agents, laying the groundwork 
              for future research on safe, trustworthy AI in complex real-world environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LLMSafety; 
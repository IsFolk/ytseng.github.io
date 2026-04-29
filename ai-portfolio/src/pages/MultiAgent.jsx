import { Link } from "react-router-dom";
import "./MultiAgent.css";

export default function MultiAgent() {
    const BASE = import.meta.env.BASE_URL;
  return (
    <main className="casePage">
      <Link to="/" className="backLink">← Back to home</Link>

      <section className="caseHero">
        <p className="caseTag">Agentic UX / Human-AI Interaction</p>
        <h1>Designing a User-Steerable Multi-Agent AI System</h1>
        <p>
          Designed and prototyped a multi-agent ideation system that helps users
          actively steer, evaluate, and refine AI-generated ideas.
        </p>
      </section>

      <section className="caseMetaGrid">
        <div>
          <span>Role</span>
          <p>AI Interaction Designer / Prototype Builder</p>
        </div>
        <div>
          <span>Focus</span>
          <p>Agent behavior, prompting, user control</p>
        </div>
        <div>
          <span>Methods</span>
          <p>Prompt design, interaction design, prototyping</p>
        </div>
      </section>

      <section className="caseSection">
        <h2>Problem</h2>
        <p>
          AI tools can generate many ideas, but users often struggle to structure
          outputs, evaluate relevance, and maintain control over the direction of
          ideation. Most AI systems optimize for generation, not interaction.
        </p>
      </section>

      <section className="caseSection">
        <h2>Design Approach</h2>
        <p>
          Instead of treating AI as a generator, I approached this as an
          interaction design problem. The goal was to support decision-making,
          enable user steering in real time, and balance automation with user
          control.
        </p>
      </section>

      <section className="caseSection">
        <h2>What I Designed</h2>
        <ul className="caseList">
          <li>Role-based agents that simulate different perspectives</li>
          <li>A generate → select → refine → iterate interaction loop</li>
          <li>A user control layer for filtering, choosing, and steering outputs</li>
          <li>A SCAMPER-based reasoning scaffold to guide exploration</li>
        </ul>
      </section>

      <section className="caseSection">
        <h2>Interface Design</h2>

        <div className="caseVisual">
            <img src={`${BASE}images/multi-agent/ui-agents.jpg`} />
            <p className="caption">
            Multiple agents generate ideas from different perspectives, increasing diversity.
            </p>
        </div>

        <div className="caseVisual">
            <img src={`${BASE}images/multi-agent/ui-tools.jpg`} />
            <p className="caption">
            Users can steer the process through structured prompting and selection.
            </p>
        </div>

        <div className="caseVisual">
            <img src={`${BASE}images/multi-agent/ui-convo.png`} />
            <p className="caption">
            The system produces refined outputs through iterative feedback loops.
            </p>
        </div>

        </section>


      

      <section className="caseSection">
        <h2>Interaction Flow</h2>
        <div className="caseVisual">
        <img
            src={`${BASE}images/multi-agent/flow.png`}
            alt="User-steerable multi-agent ideation flow"
        />
      </div>
        <div className="flowGrid">
          <div>
            <span>01</span>
            <h3>User Input</h3>
            <p>Users start with an initial idea, goal, or problem statement.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Multi-Agent Ideation</h3>
            <p>Business and engineering agents generate ideas from different perspectives.</p>
          </div>
          <div>
            <span>03</span>
            <h3>User Control Layer</h3>
            <p>Users select ideas, add input, or use structured prompting assistance.</p>
          </div>
          <div>
            <span>04</span>
            <h3>Iterative Refinement</h3>
            <p>The next round becomes more directed based on user choices and feedback.</p>
          </div>
        </div>
      </section>

      <section className="caseSection">
        <h2>Key Design Decisions</h2>
        <ul className="caseList">
          <li>
            <strong>Perspective diversity:</strong> multiple agents increased idea diversity,
            but too many perspectives could overwhelm users.
          </li>
          <li>
            <strong>Structured scaffolding:</strong> SCAMPER reduced cognitive load, but too
            much structure limited creative flexibility.
          </li>
          <li>
            <strong>User control:</strong> users needed to actively steer AI behavior rather
            than passively receive outputs.
          </li>
        </ul>
      </section>

      <section className="caseSection">
        <h2>Design Impact</h2>
        <p>
          This project shows how multi-agent AI systems can move beyond passive
          idea generation toward user-steerable collaboration. The prototype
          translated agent roles, feedback loops, and user control mechanisms
          into a working system that bridges design and implementation.
        </p>
      </section>
    </main>
  );
}
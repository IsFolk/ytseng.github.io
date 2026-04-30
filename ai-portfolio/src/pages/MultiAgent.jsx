import "./MultiAgent.css";
import BackLink from "../components/BackLink";

export default function MultiAgent() {
  const BASE = import.meta.env.BASE_URL;

  return (
    <main className="casePage">
      <div className="caseBack">
        <BackLink />
      </div>

      <section className="caseHero">
        <p className="caseTag">Agentic UX / Human-AI Interaction</p>

        <h1 className="caseTitle">
          Designing a User-Steerable Multi-Agent AI System
        </h1>

        <p className="caseDescription">
          Designed and prototyped a multi-agent ideation system that helps users
          actively steer, evaluate, and refine AI-generated ideas.
        </p>
      </section>

      <section className="caseMetaGrid">
        <div className="caseMetaItem">
          <span>Role</span>
          <p>AI Interaction Designer / Prototype Builder</p>
        </div>

        <div className="caseMetaItem">
          <span>Focus</span>
          <p>Agent behavior, prompting, user control</p>
        </div>

        <div className="caseMetaItem">
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
          <li className="caseItem">
            Role-based agents that simulate different perspectives
          </li>
          <li className="caseItem">
            A generate → select → refine → iterate interaction loop
          </li>
          <li className="caseItem">
            A user control layer for filtering, choosing, and steering outputs
          </li>
          <li className="caseItem">
            A SCAMPER-based reasoning scaffold to guide exploration
          </li>
        </ul>
      </section>

      <section className="caseSection">
        <h2>Interface Design</h2>

        <div className="caseVisual">
          <h3>Multi-agent ideation</h3>
          <img src={`${BASE}images/multi-agent/ui-agents.jpg`} />
          <p className="caption">
            Multiple agents generate ideas from different perspectives,
            increasing diversity.
          </p>
        </div>

        <div className="caseVisual">
          <h3>Multi-agent tools</h3>
          <img src={`${BASE}images/multi-agent/ui-tools.jpg`} />
          <p className="caption">
            Users can steer the process through structured prompting and
            selection.
          </p>
        </div>

        <div className="caseVisual">
          <h3>Multi-agent conversation</h3>
          <img src={`${BASE}images/multi-agent/ui-convo.png`} />
          <p className="caption">
            The system produces refined outputs through iterative feedback loops.
          </p>
        </div>
      </section>

      <section className="caseSection">
        <h2>Interaction Flow</h2>

        <div className="caseVisual">
          <img src={`${BASE}images/multi-agent/flow.png`} />
        </div>

        <div className="flowSteps">
          <span>01 Input</span>
          <span>02 Ideation</span>
          <span>03 Steering</span>
          <span>04 Iteration</span>
        </div>
      </section>

      <section className="caseSection">
        <h2>Key Design Decisions</h2>

        <ul className="caseList">
          <li className="caseItem">
            <strong>Perspective diversity:</strong> multiple agents increased idea
            diversity, but too many perspectives could overwhelm users.
          </li>
          <li className="caseItem">
            <strong>Structured scaffolding:</strong> SCAMPER reduced cognitive
            load, but too much structure limited creative flexibility.
          </li>
          <li className="caseItem">
            <strong>User control:</strong> users needed to actively steer AI
            behavior rather than passively receive outputs.
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
import styles from "../styles/Case.module.css";
import "./MultiAgent.css";
import BackLink from "../components/BackLink";
import ZoomableImage from "../components/ZoomableImage";

export default function MultiAgent() {
    const BASE = import.meta.env.BASE_URL;

    return (
        <main className={styles.casePage}>
            {/* <div className={styles.caseBack}>
                <BackLink />
            </div> */}

            <section className={styles.caseHero}>
                <p className={styles.caseTag}>Agentic UX / Human-AI Interaction</p>

                <h1 className={styles.caseTitle}>
                    Designing a User-Steerable Multi-Agent AI System
                </h1>

                <p className={styles.caseDescription}>
                    Designed and prototyped a multi-agent ideation system that helps users
                    actively steer, evaluate, and refine AI-generated ideas.
                </p>

                <div className={styles.caseStatusGroup}>
                    <a
                        href="https://taichi2025.taiwanchi.org/#/"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.caseStatus}
                    >
                        Presented at TAICHI 2025
                    </a>

                    <span className={styles.caseStatus}>
                        Reached CHI 2026 Revise &amp; Resubmit stage
                    </span>
                </div>
            </section>

            <section className={styles.caseMetaGrid}>
                <div className={styles.caseMetaItem}>
                    <span>Role</span>
                    <p>AI Interaction Designer / Prototype Builder</p>
                </div>

                <div className={styles.caseMetaItem}>
                    <span>Focus</span>
                    <p>Agent behavior, prompting, user control</p>
                </div>

                <div className={styles.caseMetaItem}>
                    <span>Methods</span>
                    <p>Prompt design, interaction design, prototyping</p>
                </div>
            </section>

            <section className={styles.caseSection}>
                <h2>Problem</h2>
                <p>
                    AI tools can generate many ideas, but users often struggle to structure
                    outputs, evaluate relevance, and maintain control over the direction of
                    ideation. Most AI systems optimize for generation, not interaction.
                </p>
            </section>

            <section className={styles.caseSection}>
                <h2>Design Approach</h2>
                <p>
                    Instead of treating AI as a generator, I approached this as an
                    interaction design problem. The goal was to support decision-making,
                    enable user steering in real time, and balance automation with user
                    control.
                </p>
            </section>

            <section className={styles.caseSection}>
                <h2>What I Designed</h2>

                <ul className={styles.caseList}>
                    <li className={styles.caseItem}>
                        Role-based agents that simulate different perspectives
                    </li>
                    <li className={styles.caseItem}>
                        A generate → select → refine → iterate interaction loop
                    </li>
                    <li className={styles.caseItem}>
                        A user control layer for filtering, choosing, and steering outputs
                    </li>
                    <li className={styles.caseItem}>
                        A SCAMPER-based reasoning scaffold to guide exploration
                    </li>
                </ul>
            </section>

            <section className={styles.caseSection}>
                <h2>Interface Design</h2>

                <div className={styles.caseVisual}>
                    <h3>Multi-agent ideation</h3>
                    <ZoomableImage
                        src={`${BASE}images/multi-agent/ui-agents.jpg`}
                        alt="Multi-agent ideation interface"
                    />
                    <p className={styles.caption}>
                        Multiple agents generate ideas from different perspectives,
                        increasing diversity.
                    </p>
                </div>

                <div className={styles.caseVisual}>
                    <h3>Multi-agent tools</h3>
                    <ZoomableImage
                        src={`${BASE}images/multi-agent/ui-tools.jpg`}
                        alt="Multi-agent tools interface"
                    />
                    <p className={styles.caption}>
                        Users can steer the process through structured prompting and
                        selection.
                    </p>
                </div>

                <div className={styles.caseVisual}>
                    <h3>Multi-agent conversation</h3>
                    <ZoomableImage
                        src={`${BASE}images/multi-agent/ui-convo.png`}
                        alt="Multi-agent conversation interface"
                    />
                    <p className={styles.caption}>
                        The system produces refined outputs through iterative feedback loops.
                    </p>
                </div>
            </section>

            <section className={styles.caseSection}>
                <h2>Interaction Flow</h2>

                <div className={styles.caseVisual}>
                    <ZoomableImage
                        src={`${BASE}images/multi-agent/flow.png`}
                        alt="Interaction flow diagram"
                    />
                </div>

                <div className="flowSteps">
                    <span>01 Input</span>
                    <span>02 Ideation</span>
                    <span>03 Steering</span>
                    <span>04 Iteration</span>
                </div>
            </section>

            <section className={styles.caseSection}>
                <h2>Key Design Decisions</h2>

                <ul className={styles.caseList}>
                    <li className={styles.caseItem}>
                        <strong>Perspective diversity:</strong> multiple agents increased idea
                        diversity, but too many perspectives could overwhelm users.
                    </li>
                    <li className={styles.caseItem}>
                        <strong>Structured scaffolding:</strong> SCAMPER reduced cognitive
                        load, but too much structure limited creative flexibility.
                    </li>
                    <li className={styles.caseItem}>
                        <strong>User control:</strong> users needed to actively steer AI
                        behavior rather than passively receive outputs.
                    </li>
                </ul>
            </section>

            <section className={styles.caseSection}>
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
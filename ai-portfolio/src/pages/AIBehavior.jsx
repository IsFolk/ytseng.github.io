import styles from "../styles/Case.module.css";
import "./AIBehavior.css";
import BackLink from "../components/BackLink";
import ZoomableImage from "../components/ZoomableImage";

export default function AIBehavior() {
  const BASE = import.meta.env.BASE_URL;

  return (
    <main className={styles.casePage}>
      {/* <div className={styles.caseBack}>
        <BackLink />
      </div> */}

      <section className={styles.caseHero}>
        <p className={styles.caseTag}>AI System UX / Behavior Evaluation</p>

        <h1 className={styles.caseTitle}>
          Aligning AI System Behavior with User Expectations
        </h1>

        <p className={styles.caseDescription}>
          AI systems can make technically correct decisions — and still feel
          confusing to users. This case explores how system behavior can be made
          more predictable, understandable, and aligned with human expectations.
        </p>
      </section>

      <section className={styles.caseMetaGrid}>
        <div className={styles.caseMetaItem}>
          <span>Role</span>
          <p>UX Researcher / AI System Evaluator</p>
        </div>

        <div className={styles.caseMetaItem}>
          <span>Focus</span>
          <p>AI behavior, user expectation, system feedback</p>
        </div>

        <div className={styles.caseMetaItem}>
          <span>Methods</span>
          <p>Scenario-based evaluation, UX analysis, behavior mapping</p>
        </div>
      </section>

      <section className={styles.caseSection}>
        <h2>Problem</h2>
        <p>
          Intelligent systems often respond to internal signals that users cannot
          see. Even when the system is working as intended, its behavior can feel
          sudden, inconsistent, or hard to explain from the user's point of view.
        </p>
      </section>

      <section className={styles.caseSection}>
        <h2>Scenario</h2>

        <div className={styles.caseVisual}>
          <ZoomableImage
            src={`${BASE}images/ai-behavior/scenario-sleep.png`}
            alt="User encountering unexpected system behavior"
          />
          <p className={styles.caption}>
            A user expects the system to stay quiet and predictable during a
            low-attention moment, but an unexpected response interrupts the
            experience.
          </p>
        </div>

        <div className={styles.caseVisual}>
          <ZoomableImage
            src={`${BASE}images/ai-behavior/scenario-export.png`}
            alt="User waiting for a long-running system task"
          />
          <p className={styles.caption}>
            A user expects the system to prioritize progress during a
            long-running task, even if the system needs to adjust its behavior.
          </p>
        </div>
      </section>

      <section className={styles.caseSection}>
        <h2>Core Insight</h2>

        <div className={styles.caseCompare}>
          <div className={styles.caseCompareCol}>
            <h3>System behavior</h3>
            <p>Internal signals change</p>
            <p>System response adjusts</p>
            <p>Optimization logic is active</p>
          </div>

          <div className={styles.caseCompareCol}>
            <h3>User perception</h3>
            <p>“I didn’t do anything”</p>
            <p>“Why did that happen?”</p>
            <p>“This feels unpredictable”</p>
          </div>
        </div>

        <p className={styles.caseHighlight}>
          A system can behave correctly, but the experience can still fail if
          users cannot understand why the behavior changed.
        </p>
      </section>

      <section className={styles.caseSection}>
        <h2>Design Approach</h2>
        <p>
          I reframed the problem as a behavior design challenge. Instead of
          evaluating only whether the system made the right decision, I examined
          whether its behavior felt understandable, timely, and appropriate in
          the user's context.
        </p>
      </section>

      <section className={styles.caseSection}>
        <h2>What I Did</h2>

        <ul className={styles.caseList}>
          <li className={styles.caseItem}>
            Designed scenario-based evaluations grounded in real user contexts
          </li>
          <li className={styles.caseItem}>
            Mapped system responses to perceived user experience
          </li>
          <li className={styles.caseItem}>
            Identified gaps between system logic and user expectations
          </li>
          <li className={styles.caseItem}>
            Translated UX insights into clearer behavior design principles
          </li>
        </ul>
      </section>

      <section className={styles.caseSection}>
        <h2>How the mismatch happens</h2>

        <div className={styles.caseVisual}>
          <ZoomableImage
            src={`${BASE}images/ai-behavior/system-flow.png`}
            alt="System behavior and user expectation diagram"
          />
          <p className={styles.caption}>
            The system responds to signals users cannot directly see, creating a
            gap between what the system is doing and what the user understands.
          </p>
        </div>
      </section>

      <section className={styles.caseSection}>
        <h2>Key Insights</h2>

        <ul className={styles.caseList}>
          <li className={styles.caseItem}>
            <strong>Correct behavior can still feel wrong.</strong> Users judge
            intelligent systems through visible behavior, not internal logic.
          </li>

          <li className={styles.caseItem}>
            <strong>Invisible signals create visible confusion.</strong> When a
            system reacts to conditions users cannot see, its behavior can feel
            arbitrary.
          </li>

          <li className={styles.caseItem}>
            <strong>UX is the interpretation layer of AI.</strong> It helps
            translate system decisions into experiences people can understand,
            trust, and adjust.
          </li>
        </ul>
      </section>

      <section className={styles.caseSection}>
        <h2>Design Impact</h2>
        <p>
          This work shaped how I evaluate AI-driven system behavior: not only by
          whether the system performs correctly, but by whether its behavior
          feels understandable, predictable, and aligned with user expectations.
        </p>
      </section>
    </main>
  );
}
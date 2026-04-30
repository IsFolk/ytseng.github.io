import styles from "../styles/Case.module.css";
import "./ThermalOptimization.css";
import BackLink from "../components/BackLink";
import ZoomableImage from "../components/ZoomableImage";

export default function ThermalOptimization() {
  const BASE = import.meta.env.BASE_URL;

  return (
    <main className={styles.casePage}>
      {/* <div className={styles.caseBack}>
        <BackLink />
      </div> */}

      <section className={styles.caseHero}>
        <p className={styles.caseTag}>AI System UX / Evaluation</p>

        <h1 className={styles.caseTitle}>
          Aligning AI System Behavior with User Expectations
        </h1>

        <p className={styles.caseDescription}>
          AI systems can behave correctly — and still fail the user. This project
          explores the gap between system optimization and user perception.
        </p>
      </section>

      <section className={styles.caseMetaGrid}>
        <div className={styles.caseMetaItem}>
          <span>Role</span>
          <p>UX Researcher / AI System Evaluator</p>
        </div>

        <div className={styles.caseMetaItem}>
          <span>Focus</span>
          <p>AI behavior, user expectation, thermal experience</p>
        </div>

        <div className={styles.caseMetaItem}>
          <span>Methods</span>
          <p>Scenario-based evaluation, UX analysis, cross-functional synthesis</p>
        </div>
      </section>

      <section className={styles.caseSection}>
        <h2>Problem</h2>
        <p>
          Laptop fans often activated in ways that felt unexpected, even when
          users were doing seemingly light tasks. The issue was not only thermal
          control itself, but a mismatch between system behavior and perceived
          user experience.
        </p>
      </section>

      <section className={styles.caseSection}>
        <h2>Scenario</h2>

        <div className={styles.caseVisual}>
          <ZoomableImage
            src={`${BASE}images/thermal/scenario-sleep.png`}
            alt="User sleeping while laptop fan suddenly turns on"
          />
          <p className={styles.caption}>
            A user leaves the laptop running at night, but unexpected fan noise
            disrupts the experience.
          </p>
        </div>

        <div className={styles.caseVisual}>
          <ZoomableImage
            src={`${BASE}images/thermal/scenario-export.png`}
            alt="User exporting video while system optimizes performance"
          />
          <p className={styles.caption}>
            A user expects the system to optimize performance during a
            long-running task.
          </p>
        </div>
      </section>

      <section className={styles.caseSection}>
        <h2>Core Insight</h2>

        <div className={styles.caseCompare}>
          <div className={styles.caseCompareCol}>
            <h3>System behavior</h3>
            <p>Background CPU spike</p>
            <p>Fan speed increases</p>
            <p>Thermal optimization active</p>
          </div>

          <div className={styles.caseCompareCol}>
            <h3>User perception</h3>
            <p>“I’m not doing anything”</p>
            <p>“Why is it suddenly noisy?”</p>
            <p>“This feels unpredictable”</p>
          </div>
        </div>

        <p className={styles.caseHighlight}>
          The system behaves correctly, but the experience fails because users
          interpret the behavior differently.
        </p>
      </section>

      <section className={styles.caseSection}>
        <h2>Design Approach</h2>
        <p>
          I reframed this as a system behavior design problem rather than a pure
          performance problem. The goal was to evaluate not only whether the
          system worked, but whether its behavior felt understandable,
          predictable, and aligned with user expectations.
        </p>
      </section>

      <section className={styles.caseSection}>
        <h2>What I Did</h2>

        <ul className={styles.caseList}>
          <li className={styles.caseItem}>
            Designed scenario-based evaluations grounded in real user contexts
          </li>
          <li className={styles.caseItem}>
            Mapped system signals to perceived user experience
          </li>
          <li className={styles.caseItem}>
            Identified mismatches between system logic and user expectations
          </li>
          <li className={styles.caseItem}>
            Translated UX insights into system-level design recommendations
          </li>
        </ul>
      </section>

      <section className={styles.caseSection}>
        <h2>How the mismatch happens</h2>

        <div className={styles.caseVisual}>
          <ZoomableImage
            src={`${BASE}images/thermal/system-flow.png`}
            alt="System behavior vs user expectation diagram"
          />
          <p className={styles.caption}>
            The system interprets signals correctly, but user perception creates
            a gap between system action and experienced behavior.
          </p>
        </div>
      </section>

      <section className={styles.caseSection}>
        <h2>Key Insights</h2>

        <ul className={styles.caseList}>
          <li className={styles.caseItem}>
            <strong>Correct behavior can still feel wrong.</strong> Users judge
            systems based on perception, not internal logic.
          </li>

          <li className={styles.caseItem}>
            <strong>Metrics don't capture experience.</strong> CPU load and
            temperature data do not fully explain perceived disruption.
          </li>

          <li className={styles.caseItem}>
            <strong>UX is the interpretation layer of AI.</strong> It connects
            system behavior to human understanding.
          </li>
        </ul>
      </section>

      <section className={styles.caseSection}>
        <h2>Design Impact</h2>
        <p>
          This project reframed AI-driven thermal optimization as a system
          behavior design problem. It demonstrated that improving performance
          alone is not enough — AI systems must also be understandable,
          predictable, and aligned with user expectations.
        </p>
      </section>
    </main>
  );
}
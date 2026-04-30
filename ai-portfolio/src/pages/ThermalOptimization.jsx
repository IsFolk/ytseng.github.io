import "./ThermalOptimization.css";
import BackLink from "../components/BackLink";

export default function ThermalOptimization() {
    const BASE = import.meta.env.BASE_URL;

    return (
        <main className="casePage">
            <div className="caseBack">
                <BackLink />
            </div>

            <section className="caseHero">
                <p className="caseTag">AI System UX / Evaluation</p>

                <h1 className="caseTitle">
                    Aligning AI System Behavior with User Expectations
                </h1>

                <p className="caseDescription">
                    AI systems can behave correctly — and still fail the user.
                    <br />
                    This project explores the gap between system optimization and user perception.
                </p>
            </section>

            <section className="caseMetaGrid">
                <div className="caseMetaItem">
                    <span>Role</span>
                    <p>UX Researcher / AI System Evaluator</p>
                </div>

                <div className="caseMetaItem">
                    <span>Focus</span>
                    <p>AI behavior, user expectation, thermal experience</p>
                </div>

                <div className="caseMetaItem">
                    <span>Methods</span>
                    <p>Scenario-based evaluation, UX analysis, cross-functional synthesis</p>
                </div>
            </section>

            <section className="caseSection">
                <h2>Problem</h2>
                <p>
                    Laptop fans often activated in ways that felt unexpected, even when
                    users were doing seemingly light tasks. The issue was not only thermal
                    control itself, but a mismatch between system behavior and perceived
                    user experience.
                </p>
            </section>

            <section className="caseSection">
                <h2>Scenario</h2>

                <div className="caseVisual">
                    <img
                        src={`${BASE}images/thermal/scenario-sleep.png`}
                        alt="User sleeping while laptop fan suddenly turns on"
                    />
                    <p className="caption">
                        A user leaves the laptop running at night, but unexpected fan noise
                        disrupts the experience.
                    </p>
                </div>

                <div className="caseVisual">
                    <img
                        src={`${BASE}images/thermal/scenario-export.png`}
                        alt="User exporting video while system optimizes performance"
                    />
                    <p className="caption">
                        A user expects the system to optimize performance during a long-running
                        task.
                    </p>
                </div>

                <p className="caseHighlight">
                    In both scenarios, the system behaves as designed —
                    but the experience depends on user expectations.
                </p>
            </section>

            <section className="caseSection">
                <h2>Core Insight</h2>

                <p className="caseBigStatement">
                    System optimization does not guarantee good UX.
                </p>

                <p>
                    The same AI behavior can feel helpful or disruptive depending on how users interpret it.
                </p>
            </section>


            <section className="caseSection">
                <h2>Design Approach</h2>
                <p>
                    I reframed this as a system behavior design problem rather than a pure
                    performance problem. The goal was to evaluate not only whether the system
                    worked, but whether its behavior felt understandable, predictable, and aligned
                    with user expectations.
                </p>
            </section>

            <section className="caseSection">
                <h2>What I Did</h2>

                <ul className="caseList">
                    <li className="caseItem">
                        Defined scenario-based evaluations for realistic laptop use
                    </li>
                    <li className="caseItem">
                        Reviewed sensor and audio-related data to understand system behavior
                    </li>
                    <li className="caseItem">
                        Iteratively refined prototype behavior and interaction modes
                    </li>
                    <li className="caseItem">
                        Synthesized findings across UX, AI, audio, and engineering teams
                    </li>
                </ul>
            </section>

            <section className="caseSection">
                <h2>Core Insight</h2>

                <div className="caseCompare">
                    <div className="col">
                        <h3>System</h3>
                        <p>Background CPU spike</p>
                        <p>Fan speed increases</p>
                        <p>Thermal optimization active</p>
                    </div>

                    <div className="col">
                        <h3>User</h3>
                        <p>"I'm not doing anything"</p>
                        <p>"Why is it suddenly noisy?"</p>
                        <p>"This feels unpredictable"</p>
                    </div>
                </div>

                <p className="caseHighlight">
                    The system behaves correctly, but the experience fails because users interpret it differently.
                </p>
            </section>
            <section className="caseSection">
                <h2>How the mismatch happens</h2>

                <div className="caseVisual">
                    <img src={`${BASE}images/thermal/system-flow.png`} />

                    <p className="caption">
                        The system interprets signals correctly, but user perception creates a gap
                        between system action and experienced behavior.
                    </p>
                </div>
            </section>

            <section className="caseSection">
                <h2>Key Insights</h2>

                <ul className="caseList">
                    <li className="caseItem">
                        <strong>Performance does not automatically create good UX.</strong>{" "}
                        Even when the system behaved correctly, users could still perceive
                        fan activation as unnecessary or unpredictable.
                    </li>

                    <li className="caseItem">
                        <strong>Objective metrics were not enough.</strong> Temperature or
                        CPU load did not fully explain how disruptive the behavior felt in
                        actual use.
                    </li>

                    <li className="caseItem">
                        <strong>UX evaluation helped interpret technical behavior.</strong>{" "}
                        The challenge was not only optimizing performance, but understanding
                        how optimization was experienced by users.
                    </li>
                </ul>
            </section>

            <section className="caseSection">
                <h2>Design Impact</h2>
                <p>
                    This project reframed AI-driven thermal optimization as a system behavior
                    design problem. It demonstrated that improving performance alone is not
                    enough — AI systems must also be understandable, predictable, and aligned
                    with user expectations.
                </p>
            </section>
        </main>
    );
}
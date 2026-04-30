import styles from "./Principles.module.css";

const principles = [
  "Design for user steering, not full automation",
  "Treat prompting as an interaction layer",
  "Design agent behavior, not just interfaces",
  "Make AI system behavior understandable and actionable",
];

export default function Principles() {
  return (
    <section className="section">
      <h2>How I Design AI Systems</h2>

      <div className={styles.principles}>
        {principles.map((principle) => (
          <p key={principle} className={styles.item}>
            {principle}
          </p>
        ))}
      </div>
    </section>
  );
}
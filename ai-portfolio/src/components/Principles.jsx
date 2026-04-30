import styles from "./Principles.module.css";

const principles = [
  "Human control over full automation",
  "Interaction over one-shot prompting",
  "Agent behavior over static interfaces",
  "Clarity over black-box intelligence",
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
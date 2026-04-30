import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>Yu-Ting Tseng</p>

      <h1 className={styles.title}>
        Helping people
        <br />
        understand AI
        <br />
        and control it
      </h1>

      <p className={styles.text}>
        Human-AI Interaction · UX Research · Prototyping
      </p>

      <div className={styles.links}>
        <a className={styles.link} href="#work">Selected Work</a>
        <a className={styles.link} href="#contact">Contact</a>
      </div>
    </section>
  );
}
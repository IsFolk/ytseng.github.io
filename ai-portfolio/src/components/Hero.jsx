import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
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
        <a className={styles.link} href="#work">View Work</a>
        <a className={styles.link} href="#contact">Get in touch</a>
      </div>
    </section>
  );
}
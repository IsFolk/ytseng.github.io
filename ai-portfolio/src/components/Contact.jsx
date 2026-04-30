import { FiMail, FiLinkedin } from "react-icons/fi";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Let’s work together</h2>

        <p className={styles.text}>
          I’m interested in designing AI systems that are understandable,
          steerable, and human-centered.
        </p>

        <div className={styles.links}>
          <a className={styles.link} href="mailto:sarahtseng0603@gmail.com">
            <FiMail />
            Email
          </a>

          <a
            className={styles.link}
            href="https://www.linkedin.com/in/yu-ting-t-3a6370237/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
            LinkedIn
          </a>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Yu-Ting Tseng</p>
          <p>Human-AI Interaction · UX Research · Prototyping</p>
        </div>
      </div>
    </footer>
  );
}
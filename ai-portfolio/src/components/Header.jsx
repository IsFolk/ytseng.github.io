import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const base = import.meta.env.BASE_URL;

  return (
    <header className={styles.header}>
      {/* 可以之後再打開 */}
      {/* 
      <Link to="/" className={styles.logo}>
        Yu-Ting Tseng
      </Link> 
      */}

      <nav className={styles.nav}>
        <a href={`${base}#work`} className={styles.link}>
          Work
        </a>

        <a href={`${base}#contact`} className={styles.link}>
          Contact
        </a>
      </nav>
    </header>
  );
}
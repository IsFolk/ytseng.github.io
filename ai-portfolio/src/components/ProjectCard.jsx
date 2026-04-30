import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className={styles.card}>
      <p className={styles.tag}>{project.tag}</p>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.role}>{project.role}</p>
      <p className={styles.description}>{project.description}</p>

      <ul className={styles.highlights}>
        {project.highlights.map((item) => (
          <li key={item} className={styles.highlight}>
            {item}
          </li>
        ))}
      </ul>
    </Link>
  );
}
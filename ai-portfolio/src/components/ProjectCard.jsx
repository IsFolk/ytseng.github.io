import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, onClick }) {
  const Card = onClick ? "button" : Link;
  const cardProps = onClick
    ? { onClick: () => onClick(project.slug) }
    : { to: `/projects/${project.slug}` };

  return (
    <Card className={styles.card} {...cardProps}>
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
    </Card>
  );
}
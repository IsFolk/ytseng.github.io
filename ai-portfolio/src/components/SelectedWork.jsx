import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./SelectedWork.module.css";

export default function SelectedWork() {
  return (
    <section id="work" className="section">
      <h2>Selected Work</h2>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
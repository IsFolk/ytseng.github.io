import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function SelectedWork() {
  return (
    <section id="work" className="section">
      <h2>Selected Work</h2>
      <div className="projectGrid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
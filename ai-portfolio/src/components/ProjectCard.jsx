import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="projectCard">
      <p className="tag">{project.tag}</p>
      <h3>{project.title}</h3>
      <p className="role">{project.role}</p>
      <p>{project.description}</p>

      <ul>
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Link>
  );
}
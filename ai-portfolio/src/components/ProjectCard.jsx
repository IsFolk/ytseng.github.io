export default function ProjectCard({ project }) {
  return (
    <article className="projectCard">
      <p className="tag">{project.tag}</p>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul>
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
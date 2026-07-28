import { ArrowUpRight, BarChart3, Check, Code, Info } from "lucide-react";
import type { Project } from "../data/projects";
import { ProjectMedia } from "./ProjectMedia";

type ProjectCardProps = {
  project: Project;
  index: number;
  onOpenReport: (project: Project) => void;
};

export function ProjectCard({ project, index, onOpenReport }: ProjectCardProps) {
  return (
    <article
      className={`project-card accent-${project.accent} ${project.featured ? "is-featured" : ""}`}
      id={project.slug}
      data-testid="project-card"
    >
      <div className={`project-card-visual ${project.embed ? "has-live-embed" : ""}`}>
        <ProjectMedia project={project} index={index} />
      </div>

      <div className="project-card-content">
        <div className="project-meta">
          <span>{project.eyebrow}</span>
          <time>{project.date}</time>
        </div>
        <h3>{project.title}</h3>
        <div className="project-summary" style={{ display: "grid", gap: 12 }}>
          {project.summary.split("\n\n").map((paragraph) => (
            <p key={paragraph} style={{ margin: 0 }}>{paragraph}</p>
          ))}
        </div>

        <ul className="contribution-list" aria-label="Key contributions">
          {project.contributions.map((contribution) => (
            <li key={contribution}>
              <Check size={15} aria-hidden="true" />
              <span>{contribution}</span>
            </li>
          ))}
        </ul>

        {project.dataNote && (
          <p className="data-note">
            <Info size={15} aria-hidden="true" />
            {project.dataNote}
          </p>
        )}

        <div className="technology-list" aria-label="Technologies used">
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>

        <div className="project-actions">
          {project.embed && (
            <button
              className="project-link project-link--primary project-embed-button"
              type="button"
              onClick={(event) => {
                event.currentTarget.focus();
                onOpenReport(project);
              }}
              aria-haspopup="dialog"
              aria-label={`Open ${project.title} in large viewer`}
            >
              <BarChart3 size={17} />
              <span>Open large viewer</span>
            </button>
          )}
          {project.links.map((link) => (
            <a
              className={`project-link project-link--${link.kind}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              key={link.href}
            >
              {link.label.toLowerCase().includes("source") ? <Code size={17} /> : <ArrowUpRight size={17} />}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

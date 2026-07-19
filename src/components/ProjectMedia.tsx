import { useState } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import type { Project } from "../data/projects";
import { ProjectVisual } from "./ProjectVisual";

type ProjectMediaProps = {
  project: Project;
  index: number;
};

export function ProjectMedia({ project, index }: ProjectMediaProps) {
  const [loaded, setLoaded] = useState(false);

  if (!project.embed) {
    return (
      <>
        <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        {project.featured && <span className="featured-badge">Featured build</span>}
        <ProjectVisual variant={project.visual} title={project.title} />
      </>
    );
  }

  const previewLabel = project.embed.kind === "power-bi" ? "Live Power BI report" : "Live web app";

  return (
    <div className={`inline-project-embed ${loaded ? "is-loaded" : ""}`}>
      <div className="inline-embed-toolbar">
        <div className="inline-embed-identity">
          <span className="inline-live-dot" aria-hidden="true" />
          <span>{previewLabel}</span>
        </div>
        <div className="inline-embed-controls">
          <span className="inline-project-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          {project.featured && <span className="inline-featured-badge">Featured project</span>}
          <a
            href={project.embed.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} in a new tab`}
            title="Open in a new tab"
          >
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="inline-embed-frame-wrap">
        <div className="inline-embed-loading" role="status">
          <LoaderCircle size={21} />
          <span>Loading {previewLabel.toLowerCase()}…</span>
        </div>
        <iframe
          data-testid="inline-project-frame"
          title={`Embedded preview: ${project.embed.title}`}
          src={project.embed.src}
          loading={project.featured ? "eager" : "lazy"}
          allow="fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
}

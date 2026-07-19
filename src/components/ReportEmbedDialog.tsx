import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, LoaderCircle, X } from "lucide-react";
import type { Project } from "../data/projects";

type ReportEmbedDialogProps = {
  project: Project | null;
  onClose: () => void;
};

export function ReportEmbedDialog({ project, onClose }: ReportEmbedDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const headingId = useId();
  const descriptionId = useId();
  const [loaded, setLoaded] = useState(false);
  const embedKindLabel = project?.embed?.kind === "web-app" ? "Interactive web app" : "Interactive Power BI report";

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !project?.embed) return;

    openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setLoaded(false);
    document.body.classList.add("report-viewer-open");

    if (typeof dialog.showModal === "function") {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }

    return () => {
      document.body.classList.remove("report-viewer-open");
    };
  }, [project]);

  const closeDialog = () => {
    const dialog = dialogRef.current;
    if (dialog?.open && typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog?.removeAttribute("open");
      onClose();
    }
  };

  const handleClosed = () => {
    const opener = openerRef.current;
    onClose();
    const restoreFocus = () => opener?.focus();
    if (typeof window.requestAnimationFrame === "function") {
      window.requestAnimationFrame(restoreFocus);
    } else {
      restoreFocus();
    }
  };

  return (
    <dialog
      className="report-dialog"
      ref={dialogRef}
      aria-labelledby={headingId}
      aria-describedby={descriptionId}
      onCancel={(event) => {
        event.preventDefault();
        closeDialog();
      }}
      onClose={handleClosed}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeDialog();
      }}
    >
      {project?.embed && (
        <div className="report-dialog-shell">
          <header className="report-dialog-header">
            <div className="report-dialog-heading">
              <span>{embedKindLabel}</span>
              <h2 id={headingId}>{project.title}</h2>
              <p id={descriptionId}>Explore the published report without leaving the portfolio.</p>
            </div>
            <div className="report-dialog-actions">
              <a href={project.embed.src} target="_blank" rel="noopener noreferrer">
                Open in new tab <ArrowUpRight size={16} />
              </a>
              <button type="button" onClick={closeDialog} aria-label="Close project viewer">
                <X size={21} />
              </button>
            </div>
          </header>

          <div className={`report-embed-stage ${loaded ? "is-loaded" : ""}`}>
            <div className="report-loading" role="status">
              <LoaderCircle size={22} />
              <span>Loading interactive report…</span>
            </div>
            <iframe
              title={`Large viewer: ${project.embed.title}`}
              src={project.embed.src}
              loading="lazy"
              allow="fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={() => setLoaded(true)}
            />
          </div>

          <footer className="report-dialog-footer">
            <p>Loaded directly from {project.embed.sourceLabel}. If your browser blocks the embedded viewer, use “Open in new tab.”</p>
            <button type="button" onClick={closeDialog}>Close viewer</button>
          </footer>
        </div>
      )}
    </dialog>
  );
}

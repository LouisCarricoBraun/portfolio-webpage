import { useEffect, useMemo, useState } from "react";
import {
  ArrowUp,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Braces,
  Code,
  Database,
  Network,
  Shapes,
  Sparkles,
} from "lucide-react";
import { HeroVisual } from "./components/HeroVisual";
import { ProjectCard } from "./components/ProjectCard";
import { ReportEmbedDialog } from "./components/ReportEmbedDialog";
import { SiteHeader } from "./components/SiteHeader";
import type { Theme } from "./components/ThemeToggle";
import { profile } from "./data/profile";
import { projects, type Project } from "./data/projects";

const capabilities = ["Power BI", "Microsoft Fabric", "DAX", "SQL", "REST APIs", "React & TypeScript"];

const processSteps = [
  { number: "01", title: "Source", description: "Connect databases, APIs, and structured files.", icon: Database },
  { number: "02", title: "Transform", description: "Shape raw data into reliable analytical tables.", icon: Braces },
  { number: "03", title: "Model", description: "Build relationships, measures, and reusable logic.", icon: Network },
  { number: "04", title: "Analyze", description: "Find the signals that answer business questions.", icon: BarChart3 },
  { number: "05", title: "Communicate", description: "Turn insight into clear, interactive experiences.", icon: Shapes },
];

function getInitialTheme(): Theme {
  try {
    return localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [activeReport, setActiveReport] = useState<Project | null>(null);
  const orderedProjects = useMemo(
    () => [...projects].sort((a, b) => a.displayOrder - b.displayOrder),
    [],
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "light" ? "#f5f3ee" : "#0b1320");
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The theme still works when storage is unavailable.
    }
  }, [theme]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="page-noise" aria-hidden="true" />
      <SiteHeader theme={theme} onThemeToggle={() => setTheme((current) => current === "light" ? "dark" : "light")} />

      <main id="main-content">
        <section className="projects-section section-shell" id="projects">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2>Projects built from source to story.</h2>
              </div>
              <p>
                Interactive dashboards and applications that combine sound data modeling, thoughtful analysis, and usable visual design.
              </p>
            </div>

            <div className="project-grid">
              {orderedProjects.map((project, index) => (
                <ProjectCard
                  project={project}
                  index={index}
                  key={project.slug}
                  onOpenReport={setActiveReport}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="hero section-shell" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><Sparkles size={15} /> Data analytics &amp; BI portfolio</p>
              <h1>
                I turn complex data into <span>clear decisions.</span>
              </h1>
              <p className="hero-intro">
                I build end-to-end analytics experiences with Power BI, Microsoft Fabric, APIs, and modern web technology—from raw source data to an interface people can actually use.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href="#projects">
                  Explore projects <ArrowUp size={17} />
                </a>
                <a className="button button--secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
                  View LinkedIn <ArrowRight size={17} />
                </a>
              </div>
              <dl className="hero-facts">
                <div><dt>{String(projects.length).padStart(2, "0")}</dt><dd>Portfolio projects</dd></div>
                <div><dt>BI + Web</dt><dd>End-to-end delivery</dd></div>
                <div><dt>API → UI</dt><dd>Full workflow thinking</dd></div>
              </dl>
            </div>
            <HeroVisual />
          </div>
        </section>

        <section className="capability-band" aria-label="Core capabilities">
          <div className="container capability-inner">
            <span className="capability-label">Core toolkit</span>
            <div className="capability-list">
              {capabilities.map((capability) => <span key={capability}>{capability}</span>)}
            </div>
          </div>
        </section>

        <section className="process-section section-shell" id="process">
          <div className="container">
            <div className="section-heading section-heading--compact">
              <div>
                <p className="eyebrow">How I work</p>
                <h2>A complete analytics workflow.</h2>
              </div>
              <p>Good reporting starts long before the first chart. Every project is built around a clear, traceable path from source to decision.</p>
            </div>

            <ol className="process-grid">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <li key={step.number}>
                    <div className="process-icon"><Icon size={21} /></div>
                    <span className="process-number">{step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className="about-section section-shell" id="about">
          <div className="container about-grid">
            <div className="about-aside">
              <p className="eyebrow">About</p>
              <div className="about-monogram" aria-hidden="true">LC<span /></div>
            </div>
            <div className="about-copy">
              <h2>Technical depth, translated into a clear experience.</h2>
              <p className="about-lead">
                My work sits at the intersection of data engineering, business intelligence, and interface design. I enjoy understanding how a dataset is built just as much as deciding how its story should be presented.
              </p>
              <div className="about-columns">
                <p>
                  Across these projects, I have worked with REST APIs, nested JSON, SQL databases, semantic models, star schemas, Power Query, DAX, and React applications.
                </p>
                <p>
                  The goal is consistent: create analytics that are accurate underneath, intuitive on the surface, and useful to the person making the next decision.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section-shell" id="contact">
          <div className="container contact-card">
            <div>
              <p className="eyebrow">Connect</p>
              <h2>Let&apos;s talk data, dashboards, and useful digital experiences.</h2>
            </div>
            <div className="contact-actions">
              <a className="button button--light" href={profile.linkedin} target="_blank" rel="noreferrer">
                <BriefcaseBusiness size={18} /> LinkedIn <ArrowRight size={17} />
              </a>
              <a className="button button--ghost-light" href={profile.github} target="_blank" rel="noreferrer">
                <Code size={18} /> GitHub <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>Designed around clarity, built with React &amp; TypeScript.</p>
          <a href="#projects">Back to top ↑</a>
        </div>
      </footer>
      <ReportEmbedDialog project={activeReport} onClose={() => setActiveReport(null)} />
    </>
  );
}

export default App;

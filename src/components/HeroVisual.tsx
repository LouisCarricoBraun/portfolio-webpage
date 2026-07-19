import { ArrowRight, Database, LayoutDashboard, Share2 } from "lucide-react";

const bars = [42, 64, 51, 82, 69, 92, 76];

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-panel">
        <div className="panel-chrome">
          <span className="window-dots"><i /><i /><i /></span>
          <span>Analytics workflow</span>
          <span className="status-dot">Live</span>
        </div>

        <div className="panel-body">
          <div className="pipeline-row">
            <span className="pipeline-node">
              <Database size={15} />
              <small>Source</small>
            </span>
            <ArrowRight size={14} />
            <span className="pipeline-node">
              <Share2 size={15} />
              <small>Model</small>
            </span>
            <ArrowRight size={14} />
            <span className="pipeline-node is-active">
              <LayoutDashboard size={15} />
              <small>Experience</small>
            </span>
          </div>

          <div className="visual-grid">
            <div className="mini-kpis">
              <span><small>Projects</small><strong>03</strong></span>
              <span><small>Focus</small><strong>BI</strong></span>
            </div>
            <div className="mini-chart">
              <div className="chart-heading">
                <span>From data to decisions</span>
                <span>↗</span>
              </div>
              <div className="chart-bars">
                {bars.map((height, index) => (
                  <i key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
          </div>

          <div className="panel-footer">
            <span>Power BI</span>
            <span>Fabric</span>
            <span>React</span>
          </div>
        </div>
      </div>
      <div className="floating-note note-model">
        <span className="note-icon">01</span>
        <span><small>Build</small><strong>Robust models</strong></span>
      </div>
      <div className="floating-note note-story">
        <span className="note-icon">02</span>
        <span><small>Deliver</small><strong>Clear stories</strong></span>
      </div>
    </div>
  );
}

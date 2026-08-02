import type { ProjectVisual as ProjectVisualType } from "../data/projects";

type ProjectVisualProps = {
  variant: ProjectVisualType;
  title: string;
};

const salesBars = [44, 63, 54, 78, 66, 88, 73, 96, 83];
const teamBars = [82, 68, 57, 43];

function MockChrome({ label }: { label: string }) {
  return (
    <div className="mock-chrome">
      <span className="window-dots"><i /><i /><i /></span>
      <span>{label}</span>
      <i className="mock-status" />
    </div>
  );
}

function FabricVisual() {
  return (
    <div className="project-mock fabric-mock">
      <MockChrome label="Sales command center" />
      <div className="fabric-body">
        <div className="mock-sidebar">
          <i className="is-active" /><i /><i /><i />
        </div>
        <div className="mock-content">
          <div className="mock-kpi-row">
            <span><small>Sales</small><strong>—</strong></span>
            <span><small>Orders</small><strong>—</strong></span>
            <span><small>Margin</small><strong>—</strong></span>
          </div>
          <div className="fabric-charts">
            <div className="mock-line-card">
              <span className="mock-card-label">Performance</span>
              <svg viewBox="0 0 300 92" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="fabricArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="currentColor" stopOpacity=".28" />
                    <stop offset="1" stopColor="currentColor" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path className="area" d="M0 80 C35 70 54 79 83 57 S127 65 156 42 S204 55 231 28 S273 35 300 9 L300 92 L0 92 Z" />
                <path className="line" d="M0 80 C35 70 54 79 83 57 S127 65 156 42 S204 55 231 28 S273 35 300 9" />
              </svg>
            </div>
            <div className="mock-rank-card">
              <span className="mock-card-label">Product mix</span>
              {[88, 72, 57, 43].map((width, index) => (
                <span className="rank-row" key={width}>
                  <i>{index + 1}</i><b style={{ width: `${width}%` }} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorldCupVisual() {
  return (
    <div className="project-mock cup-mock">
      <MockChrome label="Tournament intelligence" />
      <div className="cup-body">
        <div className="pitch-map">
          <span className="pitch-half" />
          <span className="pitch-circle" />
          <span className="marker marker-one" />
          <span className="marker marker-two" />
          <span className="marker marker-three" />
          <span className="cup-year">2026</span>
        </div>
        <div className="team-panel">
          <div className="mock-card-label">Team comparison</div>
          {teamBars.map((width, index) => (
            <span className="team-row" key={width}>
              <i className={`flag flag-${index + 1}`} />
              <b><em style={{ width: `${width}%` }} /></b>
            </span>
          ))}
          <div className="cup-tabs"><span>Teams</span><span>Matches</span><span>Players</span></div>
        </div>
      </div>
    </div>
  );
}

function SalesVisual() {
  return (
    <div className="project-mock sales-mock">
      <MockChrome label="Product performance" />
      <div className="sales-body">
        <div className="sales-heading">
          <span><small>Executive view</small><strong>Sales analysis</strong></span>
          <span className="filter-pill">All regions</span>
        </div>
        <div className="sales-cards">
          <div className="bar-card">
            <span className="mock-card-label">Sales trend</span>
            <div className="sales-bars">
              {salesBars.map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
            </div>
          </div>
          <div className="donut-card">
            <span className="mock-card-label">Category mix</span>
            <span className="mock-donut"><i /></span>
            <small>Portfolio</small>
          </div>
        </div>
        <div className="heat-strip">
          {[2, 4, 3, 5, 4, 2, 5, 3, 4, 5, 2, 3].map((level, index) => (
            <i key={index} data-level={level} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BrokerageVisual() {
  return (
    <div className="project-mock brokerage-mock">
      <MockChrome label="Brokerage database · SQL Server" />
      <div className="brokerage-body">
        <div className="brokerage-explorer">
          <img
            src={`${import.meta.env.BASE_URL}brokerage-object-explorer.png`}
            alt=""
            aria-hidden="true"
          />
        </div>
        <div className="brokerage-schema">
          <div className="schema-heading">
            <span><small>Relational model</small><strong>Brokerage schema</strong></span>
            <i>PK / FK</i>
          </div>
          <div className="schema-stats">
            <span><strong>5</strong><small>tables</small></span>
            <span><strong>48</strong><small>sample rows</small></span>
            <span><strong>2</strong><small>SQL dialects</small></span>
          </div>
          <div className="schema-flow">
            <span className="schema-table schema-users"><strong>Users</strong><small>username · PK</small></span>
            <span className="schema-table schema-accounts"><strong>Accounts</strong><small>user · FK</small></span>
            <span className="schema-table schema-instruments"><strong>Instruments</strong><small>symbol · PK</small></span>
            <span className="schema-table schema-trades"><strong>Trades</strong><small>account + symbol</small></span>
            <span className="schema-table schema-positions"><strong>Positions</strong><small>composite key</small></span>
          </div>
        </div>
      </div>
    </div>
  );
}

function GenericVisual() {
  return (
    <div className="project-mock generic-mock">
      <MockChrome label="Analytics project" />
      <div className="generic-body"><span /><span /><span /></div>
    </div>
  );
}

export function ProjectVisual({ variant, title }: ProjectVisualProps) {
  return (
    <div className={`project-visual project-visual--${variant}`} role="img" aria-label={`Stylized preview for ${title}`}>
      {variant === "fabric" && <FabricVisual />}
      {variant === "world-cup" && <WorldCupVisual />}
      {variant === "sales" && <SalesVisual />}
      {variant === "brokerage" && <BrokerageVisual />}
      {variant === "generic" && <GenericVisual />}
    </div>
  );
}

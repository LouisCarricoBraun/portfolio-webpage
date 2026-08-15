export type ProjectVisual = "world-cup" | "fabric" | "sales" | "brokerage" | "generic";

export type ProjectLink = {
  label: string;
  href: string;
  kind: "primary" | "secondary";
};

export type ProjectEmbed = {
  title: string;
  src: string;
  kind: "power-bi" | "web-app";
  sourceLabel: string;
};

export type Project = {
  slug: string;
  displayOrder: number;
  title: string;
  eyebrow: string;
  date: string;
  summary: string;
  contributions: string[];
  technologies: string[];
  links: ProjectLink[];
  embed?: ProjectEmbed;
  featured?: boolean;
  dataNote?: string;
  visual: ProjectVisual;
  accent: "cobalt" | "mint" | "coral";
};

/**
 * Add future work here. The project grid, count, filters, links, and skill tags
 * are generated from this array, so no component changes are required.
 */
export const projects: Project[] = [
  {
    slug: "fabric-sales-analytics",
    displayOrder: 1,
    title: "Microsoft Fabric Sales Analytics App",
    eyebrow: "Microsoft Fabric · React",
    date: "Jul 2026",
    summary:
      "This project is an end-to-end sales analytics application built natively within Microsoft Fabric. I developed it with support from OpenAI Codex, using it to generate, troubleshoot, and refine SQL queries, DAX queries, React and TypeScript components, and the application structure. The project uses a sample SQL database containing bicycle company sales data, including products, customers, orders, dates, geographic markets, pricing, quantities sold, and revenue. Although the database was provided, I was responsible for understanding its schema, identifying relationships, validating records, and determining how the data should support the application.\n\n" +
      "The SQL database serves as the data layer. A Microsoft Fabric semantic model provides the analytical layer by organizing the data into related fact and dimension tables and centralizing calculations for total sales, units sold, order count, average order value, product performance, customer activity, and sales trends.\n\n" +
      "I built the user-facing experience as a native Microsoft Fabric Data App. The app connects directly to the semantic model and uses DAX queries to retrieve aggregated results. Users can explore performance through KPI cards, charts, filters, tables, and product comparisons. The application supports analysis of overall sales, leading products and categories, time-based trends, and geographic and customer patterns.\n\n" +
      "The full architecture remains within Microsoft Fabric: the SQL database provides storage, the semantic model provides relationships and business logic, and the Data App provides the interface. Codex accelerated development by assisting with coding, DAX generation, debugging, and integration between the app and semantic model. I reviewed, tested, and modified the generated code to ensure accurate results.\n\n" +
      "Microsoft Fabric Apps are still in preview and not publicly viewable. I had Codex convert the application to a regular React Web App and hosted it on GitHub. The data is therefore a snapshot, not live.",
    contributions: [
      "Connected a sample SQL sales database to a Fabric semantic model with reusable sales, order, product, and customer measures.",
      "Built a native Fabric Data App with DAX-driven KPIs, charts, filters, detail tables, and product comparisons.",
      "Recreated the experience in React and TypeScript for GitHub Pages using a documented, non-live data snapshot.",
      "Used Codex as an AI development assistant while reviewing, testing, and refining the resulting application code.",
    ],
    technologies: [
      "Microsoft Fabric",
      "SQL",
      "DAX",
      "Semantic Models",
      "React",
      "TypeScript",
      "GitHub Pages",
    ],
    links: [
      {
        label: "Open public web app",
        href: "https://louiscarricobraun.github.io/fabric-sample-app/",
        kind: "primary",
      },
      {
        label: "View source code",
        href: "https://github.com/HughHashes/fabric-sample-app",
        kind: "secondary",
      },
    ],
    embed: {
      title: "Sample Public Sales Interactive Report",
      src: "https://hughhashes.github.io/fabric-sample-app/",
      kind: "web-app",
      sourceLabel: "GitHub Pages",
    },
    dataNote: "Public demonstration uses snapshot sample data.",
    featured: true,
    visual: "fabric",
    accent: "cobalt",
  },
  {
    slug: "fifa-world-cup-2026",
    displayOrder: 5,
    title: "FIFA World Cup 2026 Analytics Interactive Report",
    eyebrow: "Power BI · Sports Analytics",
    date: "Jun–Jul 2026",
    summary:
      "Built an interactive FIFA World Cup analytics report in Power BI using data from the Sportradar REST API. Designed an end-to-end BI workflow including API extraction, Power Query transformations, data modeling, DAX measures, and visual storytelling across tournament, team, player, match, and venue insights. The project includes optimized API usage, structured tables for teams, matches, venues, players, logos, flags, and calendar data, plus interactive report pages with slicers, KPI cards, maps, player statistics, and custom visual elements. This project strengthened my ability to work with complex JSON data, build scalable Power BI models, and turn raw sports data into decision-ready analytics.",
    contributions: [
      "Built an API-to-interactive-report workflow using Power Query to transform nested JSON into structured analytical tables.",
      "Modeled teams, matches, players, venues, calendar data, flags, and logos for reusable reporting.",
      "Created DAX measures and interactive KPIs, maps, slicers, player statistics, and comparison views.",
    ],
    technologies: [
      "Power BI",
      "Power Query",
      "DAX",
      "REST APIs",
      "JSON",
      "Data Modeling",
    ],
    links: [
      {
        label: "Open FIFA interactive report in new tab",
        href: "https://app.fabric.microsoft.com/view?r=eyJrIjoiMDE4YzI1ZDMtMzM0ZC00NjlkLTg4NGYtOTBiNTMxNWM0MTcwIiwidCI6IjllMGNmMGU4LWY5YWYtNDliNy1iZTM0LTc1YjI5NDI5OTY4YSJ9&pageName=28d5900832ee7970b6db",
        kind: "secondary",
      },
    ],
    embed: {
      title: "FIFA World Cup 2026 Analytics Interactive Report",
      src: "https://app.fabric.microsoft.com/view?r=eyJrIjoiMDE4YzI1ZDMtMzM0ZC00NjlkLTg4NGYtOTBiNTMxNWM0MTcwIiwidCI6IjllMGNmMGU4LWY5YWYtNDliNy1iZTM0LTc1YjI5NDI5OTY4YSJ9&pageName=28d5900832ee7970b6db",
      kind: "power-bi",
      sourceLabel: "Microsoft Fabric",
    },
    visual: "world-cup",
    accent: "mint",
  },
  {
    slug: "faang-stock-analytics",
    displayOrder: 3,
    title: "FAANG Stock Analytics Interactive Report",
    eyebrow: "Power BI · Financial Analytics",
    date: "Jul 2026",
    summary:
      "I built this Power BI interactive report by consolidating historical CSV price data for Amazon, Apple, Meta, Google, and Netflix into a normalized stock-price fact table. Power Query cleans and types the files, maps company and ticker values, and appends incremental daily prices from the Twelve Data API while retaining the local history if the API is unavailable. I designed company and date dimensions and created DAX measures for indexed returns, moving averages, trading volume, annualized and rolling volatility, drawdown, and 52-week ranges. The finished report organizes those calculations into Overview, Performance Comparison, Company Deep Dive, and Risk & Volatility pages so viewers can compare companies and investigate an individual stock.",
    contributions: [
      "Combined five historical stock-price files into a consistent fact table and added a resilient incremental API-refresh process.",
      "Built date and company dimensions with DAX measures for returns, moving averages, volume, volatility, drawdown, and price ranges.",
      "Designed comparison, deep-dive, and risk pages with reusable filters and company-level analysis.",
    ],
    technologies: [
      "Power BI",
      "Power Query",
      "DAX",
      "Twelve Data API",
      "CSV",
      "Data Modeling",
      "Financial Analytics",
    ],
    links: [
      {
        label: "Open FAANG interactive report in new tab",
        href: "https://app.fabric.microsoft.com/view?r=eyJrIjoiNzI3Y2IxN2UtMjdlNy00OTgxLWI0MGUtNTBjYzBjZjZiZTYxIiwidCI6IjllMGNmMGU4LWY5YWYtNDliNy1iZTM0LTc1YjI5NDI5OTY4YSJ9",
        kind: "secondary",
      },
    ],
    embed: {
      title: "FAANG Stock Analytics Interactive Report",
      src: "https://app.fabric.microsoft.com/view?r=eyJrIjoiNzI3Y2IxN2UtMjdlNy00OTgxLWI0MGUtNTBjYzBjZjZiZTYxIiwidCI6IjllMGNmMGU4LWY5YWYtNDliNy1iZTM0LTc1YjI5NDI5OTY4YSJ9",
      kind: "power-bi",
      sourceLabel: "Microsoft Fabric",
    },
    visual: "generic",
    accent: "cobalt",
  },
  {
    slug: "mlb-analytics",
    displayOrder: 2,
    title: "MLB Analytics Interactive Report",
    eyebrow: "Power BI · Baseball Analytics",
    date: "Jul 2026",
    summary:
      "I built this multi-page Power BI interactive report by extracting 2026 MLB league, venue, team, player, and situational split data from the Sportradar API with reusable Power Query functions. Nested JSON responses were normalized into team, player, venue, hitting, pitching, fielding, and split tables, then related in a semantic model designed for cross-page filtering. I created DAX measures for core and advanced statistics including AVG, OPS, wOBA, wRC+, ERA, WHIP, FIP, WAR, fielding percentage, rankings, and home/away or handedness splits. The finished report organizes the analysis into overview, team and player pages, leaderboards, advanced metrics, and hitting, pitching, fielding, and situational split views.",
    contributions: [
      "Created reusable Power Query functions to retrieve and safely normalize nested Sportradar league, venue, statistics, and split responses.",
      "Modeled player, team, opponent, venue, position, hitting, pitching, fielding, and situational split tables for coordinated analysis.",
      "Developed DAX measures for traditional and advanced baseball metrics, qualification logic, rankings, and contextual splits.",
      "Designed an 11-page report spanning overview, team and player analysis, leaderboards, advanced metrics, and performance splits.",
    ],
    technologies: [
      "Power BI",
      "Power Query",
      "DAX",
      "Sportradar API",
      "JSON",
      "Semantic Modeling",
      "Sports Analytics",
    ],
    links: [
      {
        label: "Open MLB interactive report in new tab",
        href: "https://app.fabric.microsoft.com/view?r=eyJrIjoiMjlkOTllNmEtMGQ4Mi00ZGVlLThhZWYtMGY5N2NjZThkNGI4IiwidCI6IjllMGNmMGU4LWY5YWYtNDliNy1iZTM0LTc1YjI5NDI5OTY4YSJ9&pageName=30d550e2ab321aa4d7f0",
        kind: "secondary",
      },
    ],
    embed: {
      title: "MLB Analytics Interactive Report",
      src: "https://app.fabric.microsoft.com/view?r=eyJrIjoiMjlkOTllNmEtMGQ4Mi00ZGVlLThhZWYtMGY5N2NjZThkNGI4IiwidCI6IjllMGNmMGU4LWY5YWYtNDliNy1iZTM0LTc1YjI5NDI5OTY4YSJ9&pageName=30d550e2ab321aa4d7f0",
      kind: "power-bi",
      sourceLabel: "Microsoft Fabric",
    },
    visual: "generic",
    accent: "mint",
  },
  {
    slug: "product-sales-analysis",
    displayOrder: 4,
    title: "Product Sales Analysis Interactive Report",
    eyebrow: "Power BI · Sales Intelligence",
    date: "Jul 2026",
    summary:
      "I built this Power BI interactive report using sample product sales data to analyze sales performance, product trends, regional performance, customer behavior, sales team results, and fulfillment metrics. The dataset is structured as a star schema with a central sales fact table connected to dimensions for date, product, customer, region, store, salesperson, and order attributes. Because the data is sample data, the project focuses on interactive report design, data modeling, DAX development, and business intelligence storytelling rather than representing a real company.\n\n" +
      "The interactive report is designed as a multi-page sales command center. It includes executive KPI cards, monthly sales trends, product and category analysis, regional heatmaps, sales team performance views, customer segmentation, and fulfillment/order attribute analysis. I also added drillthrough functionality for product-level detail pages, allowing users to move from a summary visual into a focused product performance view.\n\n" +
      "This project demonstrates my ability to build a clean Power BI report from a structured dataset, create reusable DAX measures, design interactive report pages, and present business insights in a professional, portfolio-ready format. Key measures include total sales, gross sales, discount impact, return rate, average order value, repeat customer rate, delivery lead time, promotion uptake rate, and prior-period comparisons.\n\n" +
      "Skills displayed: Power BI, DAX, data modeling, star schema design, time intelligence, KPI design, drillthrough pages, conditional formatting, matrix heatmaps, scatter/bubble segmentation, custom HTML KPI cards, report theming, interactive report layout, and business analytics storytelling.",
    contributions: [
      "Modeled sample sales data as a star schema spanning date, product, customer, region, store, salesperson, and order dimensions.",
      "Developed reusable DAX measures for sales, discounts, returns, average order value, repeat customers, delivery lead time, promotions, and prior-period comparisons.",
      "Designed executive KPIs, trends, heatmaps, segmentation views, and product-level drillthrough pages.",
    ],
    technologies: [
      "Power BI",
      "DAX",
      "Star Schema",
      "Time Intelligence",
      "Drillthrough",
      "KPI Design",
    ],
    links: [
      {
        label: "Open sales interactive report in new tab",
        href: "https://app.fabric.microsoft.com/view?r=eyJrIjoiZjRmYWY1NzUtODQyYi00YzhjLWJiMzktNmI3OTBhZGRiZjMxIiwidCI6IjllMGNmMGU4LWY5YWYtNDliNy1iZTM0LTc1YjI5NDI5OTY4YSJ9",
        kind: "secondary",
      },
    ],
    embed: {
      title: "Product Sales Interactive Report",
      src: "https://app.fabric.microsoft.com/view?r=eyJrIjoiZjRmYWY1NzUtODQyYi00YzhjLWJiMzktNmI3OTBhZGRiZjMxIiwidCI6IjllMGNmMGU4LWY5YWYtNDliNy1iZTM0LTc1YjI5NDI5OTY4YSJ9",
      kind: "power-bi",
      sourceLabel: "Microsoft Fabric",
    },
    visual: "sales",
    accent: "coral",
  },
  {
    slug: "brokerage-accounts-sql-database",
    displayOrder: 6,
    title: "Brokerage Accounts SQL Database",
    eyebrow: "SQL Server · Oracle",
    date: "Aug 2026",
    summary:
      "Designed and implemented a relational database for a simplified brokerage platform, modeling users, accounts, investment instruments, trades, and current positions. The project includes an original Oracle SQL implementation and a Microsoft SQL Server adaptation, with reproducible schema creation, sample data, analytical queries, transaction demonstrations, and cleanup scripts.",
    contributions: [
      "Modeled five related tables with primary keys, foreign keys, referential integrity, and a composite position key.",
      "Built complete creation and sample-data scripts for both Oracle SQL and Microsoft SQL Server.",
      "Wrote analytical queries using joins, aggregation, common table expressions, subqueries, and NOT EXISTS.",
      "Demonstrated safe data changes with explicit transactions, rollback behavior, and reusable cleanup scripts.",
    ],
    technologies: [
      "SQL",
      "T-SQL",
      "Oracle SQL",
      "SQL Server",
      "Relational Modeling",
      "Transactions",
    ],
    links: [
      {
        label: "View brokerage source",
        href: "https://github.com/HughHashes/brokerage-sql-db-project",
        kind: "primary",
      },
    ],
    dataNote: "All names and financial values are educational sample data.",
    visual: "brokerage",
    accent: "cobalt",
  },
  {
    slug: "bayesian-python-project",
    displayOrder: 7,
    title: "Bayesian Reasoning & Probabilistic Modeling",
    eyebrow: "Python · Bayesian Statistics",
    date: "Aug 2026",
    summary:
      "Developed a Python project exploring three applications of Bayesian reasoning and probabilistic modeling: Naive Bayes text classification, probabilistic inference, and Bayesian statistical analysis. The project uses word-frequency probabilities to distinguish between Shakespeare and George R. R. Martin, models simulated COVID infection likelihood from exposure and symptom evidence, and uses Beta distributions, Binomial likelihoods, and PyMC3 to compare critic approval rates for The Mandalorian and WandaVision. The project demonstrates how prior beliefs can be updated with observed evidence to produce posterior probabilities and distributions of uncertainty.",
    contributions: [
      "Implemented a Naive Bayes text classifier using word-frequency probabilities to distinguish between authors.",
      "Built a Bayesian-style probability model that updates infection likelihood using exposure and symptom evidence.",
      "Used Beta and Binomial distributions with PyMC3 to model uncertainty and compare posterior approval rates.",
      "Applied Bayesian concepts including priors, likelihoods, posterior probabilities, and posterior distributions across multiple problems.",
    ],
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "PyMC3",
      "Jupyter Notebook",
      "Bayesian Statistics",
    ],
    links: [
      {
        label: "View source code",
        href: "https://github.com/HughHashes/bayesian_python_project",
        kind: "primary",
      },
    ],
    dataNote: "Academic project; the COVID-related model uses simulated assumptions and is not a medical diagnostic model.",
    visual: "generic",
    accent: "mint",
  },
];

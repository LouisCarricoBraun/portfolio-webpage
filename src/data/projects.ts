export type ProjectVisual = "world-cup" | "fabric" | "sales" | "generic";

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
    title: "Microsoft Fabric Sales Analytics App",
    eyebrow: "Microsoft Fabric · React",
    date: "Jul 2026",
    summary:
      "An end-to-end sales analytics application built in Microsoft Fabric and adapted into a public React experience for viewers without Fabric accounts.",
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
        href: "https://hughhashes.github.io/fabric-sample-app/",
        kind: "primary",
      },
      {
        label: "View source code",
        href: "https://github.com/HughHashes/fabric-sample-app",
        kind: "secondary",
      },
    ],
    embed: {
      title: "Sample Public Sales Dashboard",
      src: "https://hughhashes.github.io/fabric-sample-app/",
      kind: "web-app",
      sourceLabel: "GitHub Pages",
    },
    dataNote: "Public demonstration uses snapshot sample data.",
    visual: "fabric",
    accent: "cobalt",
  },
  {
    slug: "fifa-world-cup-2026",
    title: "FIFA World Cup 2026 Analytics Dashboard",
    eyebrow: "Power BI · Sports Analytics",
    date: "Jun–Jul 2026",
    summary:
      "An end-to-end Power BI experience that transforms Sportradar REST API data into interactive tournament, team, player, match, and venue insights.",
    contributions: [
      "Built an API-to-dashboard workflow using Power Query to transform nested JSON into structured analytical tables.",
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
        label: "Open FIFA dashboard in new tab",
        href: "https://app.fabric.microsoft.com/view?r=eyJrIjoiMDE4YzI1ZDMtMzM0ZC00NjlkLTg4NGYtOTBiNTMxNWM0MTcwIiwidCI6IjllMGNmMGU4LWY5YWYtNDliNy1iZTM0LTc1YjI5NDI5OTY4YSJ9&pageName=28d5900832ee7970b6db",
        kind: "secondary",
      },
    ],
    embed: {
      title: "World_Cup_2026_Dashboard",
      src: "https://app.fabric.microsoft.com/view?r=eyJrIjoiMDE4YzI1ZDMtMzM0ZC00NjlkLTg4NGYtOTBiNTMxNWM0MTcwIiwidCI6IjllMGNmMGU4LWY5YWYtNDliNy1iZTM0LTc1YjI5NDI5OTY4YSJ9&pageName=28d5900832ee7970b6db",
      kind: "power-bi",
      sourceLabel: "Microsoft Fabric",
    },
    featured: true,
    visual: "world-cup",
    accent: "mint",
  },
  {
    slug: "product-sales-analysis",
    title: "Product Sales Analysis Dashboard",
    eyebrow: "Power BI · Sales Intelligence",
    date: "Jul 2026",
    summary:
      "A multi-page Power BI command center for analyzing product performance, regional results, customer behavior, sales teams, and order fulfillment.",
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
        label: "Open sales dashboard in new tab",
        href: "https://app.fabric.microsoft.com/view?r=eyJrIjoiZjRmYWY1NzUtODQyYi00YzhjLWJiMzktNmI3OTBhZGRiZjMxIiwidCI6IjllMGNmMGU4LWY5YWYtNDliNy1iZTM0LTc1YjI5NDI5OTY4YSJ9",
        kind: "secondary",
      },
    ],
    embed: {
      title: "Product Sales Dashboard",
      src: "https://app.fabric.microsoft.com/view?r=eyJrIjoiZjRmYWY1NzUtODQyYi00YzhjLWJiMzktNmI3OTBhZGRiZjMxIiwidCI6IjllMGNmMGU4LWY5YWYtNDliNy1iZTM0LTc1YjI5NDI5OTY4YSJ9",
      kind: "power-bi",
      sourceLabel: "Microsoft Fabric",
    },
    visual: "sales",
    accent: "coral",
  },
];

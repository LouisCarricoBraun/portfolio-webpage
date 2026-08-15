import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import App from "./App";
import { projects } from "./data/projects";

afterEach(cleanup);
beforeEach(() => {
  localStorage.clear();
  document.documentElement.dataset.theme = "light";
});

describe("portfolio", () => {
  it("shows selected work as the first page section", () => {
    render(<App />);

    const main = screen.getByRole("main");
    const firstSection = main.querySelector(":scope > section");

    expect(firstSection).toHaveAttribute("id", "projects");
  });

  it("renders every project from the project data file", () => {
    render(<App />);

    const cards = screen.getAllByTestId("project-card");
    expect(cards).toHaveLength(projects.length);
    expect(
      cards.map((card) => within(card).getByRole("heading").textContent),
    ).toEqual([
      "Microsoft Fabric Sales Analytics App",
      "MLB Analytics Interactive Report",
      "FAANG Stock Analytics Interactive Report",
      "Product Sales Analysis Interactive Report",
      "FIFA World Cup 2026 Analytics Interactive Report",
      "Brokerage Accounts SQL Database",
      "Bayesian Reasoning & Probabilistic Modeling",
    ]);

    expect(cards[0]).toHaveClass("is-featured");
    for (const card of cards.slice(1)) {
      expect(card).not.toHaveClass("is-featured");
    }

    for (const project of projects) {
      expect(screen.getByRole("heading", { name: project.title })).toBeInTheDocument();
    }
  });

  it("uses safe external project links", () => {
    render(<App />);
  
    for (const project of projects) {
      const projectHeading = screen.getByRole("heading", {
        name: project.title,
      });
  
      const projectCard = projectHeading.closest(
        '[data-testid="project-card"]',
      ) as HTMLElement | null;
  
      expect(projectCard).not.toBeNull();
  
      for (const link of project.links) {
        const projectLink = within(projectCard as HTMLElement).getByRole(
          "link",
          {
            name: link.label,
            exact: true,
          },
        );
  
        expect(projectLink).toHaveAttribute("href", link.href);
        expect(projectLink).toHaveAttribute(
          "rel",
          "noopener noreferrer",
        );
      }
    }
  });
  
  it("supports an accessible dark-mode toggle", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Switch to dark mode" }));

    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    expect(screen.getByRole("button", { name: "Switch to light mode" })).toBeInTheDocument();
  });

  it("replaces project artwork with the live embedded projects", () => {
    render(<App />);
    const embeddedProjects = projects.filter((project) => project.embed);

    expect(screen.getAllByTestId("inline-project-frame")).toHaveLength(embeddedProjects.length);
    for (const project of embeddedProjects) {
      const frame = screen.getByTitle(`Embedded preview: ${project.embed!.title}`);
      expect(frame).toHaveAttribute("src", project.embed!.src);
      expect(frame).toHaveAttribute("loading", project.featured ? "eager" : "lazy");
    }
  });

  it("opens one larger project viewer on demand and restores focus", async () => {
    render(<App />);
    const featuredProject = projects.find((project) => project.featured)!;
    const viewerTitle = `Large viewer: ${featuredProject.embed!.title}`;

    expect(screen.queryByTitle(viewerTitle)).not.toBeInTheDocument();

    const trigger = screen.getByRole("button", {
      name: `Open ${featuredProject.title} in large viewer`,
    });
    fireEvent.click(trigger);

    const frame = screen.getByTitle(viewerTitle);
    expect(frame).toHaveAttribute("src", featuredProject.embed!.src);
    expect(frame).toHaveAttribute("loading", "lazy");
    expect(document.querySelectorAll(".report-dialog iframe")).toHaveLength(1);

    fireEvent.click(screen.getByRole("button", { name: "Close project viewer" }));
    expect(screen.queryByTitle(viewerTitle)).not.toBeInTheDocument();
    await waitFor(() => expect(trigger).toHaveFocus());
  });
});

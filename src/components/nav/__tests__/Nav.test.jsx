import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Nav from "../Nav";

describe("tests the nav bar", () => {
  it("check for list element", () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    );

    const nav = screen.getByRole("list");
    expect(nav).toBeInTheDocument();
  });

  it("check for button element", () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    );

    const button = screen.getAllByRole("button");
    expect(button.length).toBeGreaterThan(1);
  });
});

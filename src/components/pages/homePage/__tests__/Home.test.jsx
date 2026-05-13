import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../Home";

describe("tests the home page", () => {
  it("check for homepage images", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const image = screen.getAllByRole("img");
    expect(image.length).toBeGreaterThan(1);
  });

  it("check for homepage text", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const heading = screen.getByText("PMC ONLINE STORE");
    expect(heading).toBeInTheDocument();
  });
});

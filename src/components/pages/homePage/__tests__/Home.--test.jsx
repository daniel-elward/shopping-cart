import { render, screen } from "@testing-library/react";
import { MemoryRouter, RouterProvider } from "react-router";
import { describe, it, expect } from "vitest";
import routes from "../../../../routes";
import Home from "../Home";

const router = createMemoryRouter(routes);

// const MockHome = () => {
//   return (
//     <MemoryRouter initialEntries={["/home"]}>
//       <Home />
//     </MemoryRouter>
//   );
// };

describe("testing homepage", () => {
  it("test heading test", () => {
    render(<RouterProvider router={router} />);

    const headingOne = screen.getByRole("h2");
    expect(headingOne).toBe("PMC ONLINE STORE");
  });
});

// import { render, screen } from "@testing-library/react";
// import { MemoryRouter } from "react-router";
// import { describe, it, expect } from "vitest";
// import Nav from "../Nav";

// const MockNav = () => {
//   return (
//     <>
//       <MemoryRouter>
//         <Nav />
//       </MemoryRouter>
//     </>
//   );
// };

// describe("nav tests", () => {
//   it("renders nav component", () => {
//     render(<MockNav />);
//     const navElement = screen.getByRole("ul");
//     expect(navElement).toHaveClass("test");
//   });
// });

import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Nav from "../Nav";

it("renders nav links", () => {
  render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>,
  );

  expect(screen.getByText(/cart/i)).toBeInTheDocument();
});

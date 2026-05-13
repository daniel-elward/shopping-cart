import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import CartCard from "../CartCard";

const mockProduct = {
  id: "1",
  name: "product name",
  description: "product description",
  basePrice: 5.99,
  image512pxLink: "image/link.jpg",
  iconLink: "icon/link.jpg",
};

const MockedComponent = () => {
  return (
    <MemoryRouter>
      <CartCard key={mockProduct.id} product={mockProduct} />;
    </MemoryRouter>
  );
};

describe("tests the CartCard Component", () => {
  it("tests for product icon", () => {
    render(<MockedComponent />);

    const icon = screen.getByRole("img");
    expect(icon).toHaveAttribute("src", "icon/link.jpg");
  });

  it("check for product name", () => {
    render(<MockedComponent />);

    const name = screen.getByText("Product: product name");
    expect(name.innerHTML).toBe("Product: product name");
  });

  it("check for product price", () => {
    render(<MockedComponent />);

    const price = screen.getByText("Price: ₽ 5.99");
    expect(price.innerHTML).toBe("Price: ₽ 5.99");
  });
});

describe("tests the button controls", () => {
  it("tests for remove button", () => {
    render(<MockedComponent />);

    const removeButton = screen.getByRole("button", { name: /x/i });
    expect(removeButton).toBeInTheDocument();
  });

  it("tests for minus button", () => {
    render(<MockedComponent />);

    const minusButton = screen.getByRole("button", { name: /-/i });
    expect(minusButton).toBeInTheDocument();
  });

  it("tests for plus button", () => {
    render(<MockedComponent />);

    const plusButton = screen.getByRole("button", { name: /\+/i });
    expect(plusButton).toBeInTheDocument();
  });

  it("tests for the textbox", () => {
    render(<MockedComponent />);

    const textbox = screen.getByRole("spinbutton");
    expect(textbox).toBeInTheDocument();
  });
});

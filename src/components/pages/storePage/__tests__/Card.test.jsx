import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Card from "../Card";
import AddToCartButton from "../../cartPage/AddToCartBtn";

const mockProduct = {
  id: "1",
  name: "product name",
  description: "product description",
  basePrice: 5.99,
  image512pxLink: "image/link.jpg",
};

const MockedComponent = () => {
  return (
    <MemoryRouter>
      <Card item={mockProduct} key={mockCart.id} />
    </MemoryRouter>
  );
};

const mockCart = [];

describe("tests the store page cards", () => {
  it("check for product image", () => {
    render(<MockedComponent />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "image/link.jpg");
  });

  it("check for product name", () => {
    render(<MockedComponent />);

    const name = screen.getByRole("heading", { level: 1 });
    expect(name.innerHTML).toBe("product name");
  });

  it("check for product description", () => {
    render(<MockedComponent />);

    const description = screen.getByText("product description");
    expect(description).toBeInTheDocument();
  });

  it("check for product price", () => {
    render(<MockedComponent />);

    const price = screen.getByText("₽ 5.99");
    expect(price).toBeInTheDocument();
  });
});

describe("tests the card buttons", () => {
  it("check for product minus button", () => {
    render(<MockedComponent />);

    const minusButton = screen.getByRole("button", { name: /-/i });
    expect(minusButton).toBeInTheDocument();
  });

  it("check for quantity input", () => {
    render(<MockedComponent />);

    const input = screen.getByRole("spinbutton");
    expect(input).toBeInTheDocument();
  });

  it("check for product plus button", () => {
    render(<MockedComponent />);

    const plusButton = screen.getByRole("button", { name: /\+/i });
    expect(plusButton).toBeInTheDocument();
  });

  it("check for add to cart button", () => {
    render(<AddToCartButton item={mockProduct} quantity={1} />);

    const cartButton = screen.getByRole("button", { name: /add/i });
    expect(cartButton).toBeInTheDocument();
  });
});

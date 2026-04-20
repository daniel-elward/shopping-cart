import { StrictMode, createContext } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import Nav from "./components/nav/Nav";
import Home from "./components/pages/homePage/Home";
import Store from "./components/pages/storePage/Store";
import Cart from "./components/pages/cartPage/Cart";

//initial cart context
export const CartContext = createContext([]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        index: true,
        // path: "home",
        element: <Home />,
      },
      {
        path: "store",
        element: <Store />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

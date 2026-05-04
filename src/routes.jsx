import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Nav from "./components/nav/Nav";
import Home from "./components/pages/homePage/Home";
import Store from "./components/pages/storePage/Store";
import Cart from "./components/pages/cart/Cart";

const router = [
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
];

export default router;

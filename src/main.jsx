import { StrictMode, createContext } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createMemoryRouter,
  RouterProvider,
} from "react-router";
import routes from "./routes";
import "./assets/index.css";
import Nav from "./components/nav/Nav";
import Home from "./components/pages/homePage/Home";
import Store from "./components/pages/storePage/Store";
import Cart from "./components/pages/cartPage/Cart";

//context moved to its own file
//having it in main.jsx was causing propblems when testing
//main was being imported and forcing a document render
//which was causing major issues with js-dom
// export const CartContext = createContext([]);

const router = createMemoryRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

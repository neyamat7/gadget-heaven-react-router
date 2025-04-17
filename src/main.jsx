import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import {
  Layout,
  Home,
  Gadgets,
  Details,
  Dashboard,
  Cart,
  Wishlist,
} from "./components/index.js";
import { GedgetProvider } from "./components/context/useGadgetsContext.jsx";
import { CartProvider } from "./components/context/useDashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "",
        Component: Home,
        children: [
          {
            path: "",
            Component: Gadgets,
          },
          {
            path: "category/:category",
            Component: Gadgets,
          },
        ],
      },
      {
        path: "details/:id",
        Component: Details,
      },
      {
        path: "dashboard",
        Component: Dashboard,
        children: [
          {
            path: "",
            Component: Cart,
          },
          {
            path: "wishlist",
            Component: Wishlist,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GedgetProvider>
      <CartProvider>
        <RouterProvider router={router}></RouterProvider>
      </CartProvider>
    </GedgetProvider>
  </StrictMode>
);

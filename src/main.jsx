import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/router";
import FriendsDataProvider from "./context/FriendsDataProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendsDataProvider>
      <RouterProvider router={router}></RouterProvider>
    </FriendsDataProvider>
  </StrictMode>,
);

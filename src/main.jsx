import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/router";
import FriendsDataProvider from "./context/ActivityContextProvider";
import ActivityContextProvider from "./context/ActivityContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ActivityContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ActivityContextProvider>
  </StrictMode>,
);

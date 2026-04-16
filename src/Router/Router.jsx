import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import HomePage from "../pages/home/page";
import FriendDetails from "../pages/details/page";
import Stats from "../pages/stats/page";
import TimeLine from "../pages/timeline/page";
import ErrorPage from "../components/error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/details/:id",
        element: <FriendDetails></FriendDetails>,
      },
      {
        path: "/stats",
        element: <Stats></Stats>,
      },
      {
        path: "/timeline",
        element: <TimeLine></TimeLine>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);

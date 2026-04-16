import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage/HomePage";
import ErrorPage from "./Pages/Error Page/ErrorPage";
import Timeline from "./Pages/Timeline/Timeline";
import Stats from "./Pages/Stats/Stats";
import FriendDetail from "./Pages/FriendDetail/FriendDetail";
// import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      {
        path: "/Timeline",
        Component: Timeline,
      },
      {
        path: "/Stats",
        Component: Stats,
      },
      {
        path: "/friendDetail/:id",
        Component: FriendDetail,
        loader: () => fetch("/public/friendsData.json"),
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

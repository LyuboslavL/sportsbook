import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import BasketballPage from "./pages/Basketball";
import FootballPage from "./pages/Football";
import VolleyballPage from "./pages/Volleyball";
import TennisPage from "./pages/Tennis";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "basketball", element: <BasketballPage />, children: [] },
      { path: "football", element: <FootballPage />, children: [] },
      { path: "volleyball", element: <VolleyballPage />, children: [] },
      { path: "tennis", element: <TennisPage />, children: [] },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

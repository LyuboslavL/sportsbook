import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import BasketballPage, { loader as basketballLoader } from "./pages/Basketball";
import FootballPage from "./pages/Football";
import VolleyballPage from "./pages/Volleyball";
import TennisPage from "./pages/Tennis";
import ContactPage, { action as contactAction } from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "basketball",
        element: <BasketballPage />,
        loader: basketballLoader,
        children: [],
      },
      { path: "football", element: <FootballPage />, children: [] },
      { path: "volleyball", element: <VolleyballPage />, children: [] },
      { path: "tennis", element: <TennisPage />, children: [] },
      { path: "contact", element: <ContactPage />, action: contactAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

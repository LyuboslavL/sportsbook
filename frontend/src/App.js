import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import BasketballPage, { loader as basketballLoader } from "./pages/Basketball";
import FootballPage, { loader as footballLoader } from "./pages/Football";
import VolleyballPage, { loader as volleyballLoader } from "./pages/Volleyball";
import TennisPage, { loader as tennisLoader } from "./pages/Tennis";
import ContactPage, { action as contactAction } from "./pages/Contact";
import AuthenticationPage from "./pages/Authentication";
import { checkAuthLoader, tokenLoader } from "./util/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "basketball",
        element: <BasketballPage />,
        loader: basketballLoader,
        children: [],
      },
      {
        path: "football",
        element: <FootballPage />,
        loader: footballLoader,
        children: [],
      },
      {
        path: "volleyball",
        element: <VolleyballPage />,
        loader: volleyballLoader,
        children: [],
      },
      {
        path: "tennis",
        element: <TennisPage />,
        loader: tennisLoader,
        children: [],
      },
      { path: "contact", element: <ContactPage />, action: contactAction },
      { path: "auth", element: <AuthenticationPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

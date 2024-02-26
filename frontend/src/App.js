import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import CitiesPage from "./pages/Cities";
import BasketballPage, { loader as basketballLoader } from "./pages/Basketball";
import FootballPage, { loader as footballLoader } from "./pages/Football";
import VolleyballPage, { loader as volleyballLoader } from "./pages/Volleyball";
import TennisPage, { loader as tennisLoader } from "./pages/Tennis";
import ContactPage, { action as contactAction } from "./pages/Contact";
import LoginPage, { action as loginAction } from "./pages/Login";
import RegisterPage, { action as registerAction } from "./pages/Register";
import AboutPage from "./pages/About";
import PlacesRootLayout from "./pages/PlacesRoot";
// import { checkTokenLoader, tokenLoader } from "./util/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    // loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/basketball",
        element: <PlacesRootLayout />,
        children: [
          {
            index: true,
            element: <CitiesPage />,
          },
          {
            path: "Sofia",
            element: <BasketballPage />,
            loader: basketballLoader,
          },
        ],
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
      { path: "about", element: <AboutPage /> },
      {
        path: "login",
        element: <LoginPage />,
        action: loginAction,
      },
      {
        path: "register",
        element: <RegisterPage />,
        action: registerAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

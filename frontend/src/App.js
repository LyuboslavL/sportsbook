import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState, useEffect } from 'react';

import { auth } from './firebaseConfig';
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import BasketballPage, { loader as basketballLoader } from "./pages/Basketball";
import FootballPage, { loader as footballLoader } from "./pages/Football";
import VolleyballPage, { loader as volleyballLoader } from "./pages/Volleyball";
import TennisPage, { loader as tennisLoader } from "./pages/Tennis";
import ContactPage, { action as contactAction } from "./pages/Contact";
import LoginPage, { action as loginAction } from "./pages/Login";
import RegisterPage, { action as registerAction } from "./pages/Register";
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
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    })
  }, []);

  return <RouterProvider router={router} />;
}

export default App;

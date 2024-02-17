import { Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';

import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import { auth } from '../firebaseConfig';

function RootLayout() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {

  })

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;

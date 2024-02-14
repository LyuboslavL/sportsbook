import { getAuth, onAuthStateChanged } from "firebase/auth";
import { redirect } from "react-router-dom";

export function getToken() {
  // const auth = getAuth();
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     const uid = user.uid;
  //     return uid;
  //   } else {
  //     return null;
  //   }
  // });

  const token = localStorage.getItem("token");
  console.log(token);

  if (!token) {
    return null;
  }

  return token;
}

export function tokenLoader() {
  return getToken();
}

export function checkTokenLoader() {
  const token = getToken();

  if (!token) {
    return redirect("/login");
  }

  return null;
}

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

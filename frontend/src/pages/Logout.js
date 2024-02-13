import { redirect } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

export async function action() {
  //   const auth = getAuth();

  //   await signOut(auth);

  localStorage.removeItem("token");
  redirect("/");
}

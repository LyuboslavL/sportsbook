import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { redirect } from "react-router-dom";

import AuthForm from "../components/AuthForm";

function LoginPage() {
  return <AuthForm action="Login" />;
}

export default LoginPage;

export async function action({ request }) {
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  signInWithEmailAndPassword(auth, authData.email, authData.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      localStorage.setItem("token", user.uid);
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
  return redirect("/");
}

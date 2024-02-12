import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { redirect } from "react-router-dom";

import AuthForm from "../components/AuthForm";

function LoginPage() {
  return <AuthForm action="Login" />;
}

export default LoginPage;

export async function action({ request }) {
  const auth = getAuth();

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  signInWithEmailAndPassword(auth, authData.email, authData.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  redirect("/");
}

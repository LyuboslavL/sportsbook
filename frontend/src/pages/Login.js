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

  let hasError = false;

  try {
    await signInWithEmailAndPassword(
      auth,
      authData.email,
      authData.password
    ).then((userCredentials) => {
      const user = userCredentials.user;
      hasError = false;
      localStorage.setItem("token", user.uid);
    });
  } catch (error) {
    const errorMessage = error.message;
    data.error = errorMessage;
    hasError = true;
  }

  if (hasError) {
    alert("Wrong username or password.");
  } else {
    return redirect("/");
  }
}

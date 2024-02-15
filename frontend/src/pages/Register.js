import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { redirect } from "react-router-dom";

import AuthForm from "../components/AuthForm";

function RegisterPage() {
  return <AuthForm action="Register" />;
}

export default RegisterPage;

export async function action({ request }) {
  // const auth = getAuth();

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  createUserWithEmailAndPassword(auth, authData.email, authData.password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      localStorage.setItem("token", user.uid);
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });

  return redirect("/");
}

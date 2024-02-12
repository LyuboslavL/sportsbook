import AuthForm from "../components/AuthForm";

function RegisterPage() {
  return <AuthForm action="Register" />;
}

export default RegisterPage;

export async function action({ request }) {}

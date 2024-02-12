import AuthForm from "../components/AuthForm";

function LoginPage() {
  return <AuthForm action="Login" />;
}

export default LoginPage;

export async function action({ request }) {}

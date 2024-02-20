import { Form, Link, useActionData } from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm({ action }) {
  // const data = useActionData();

  return (
    <>
      <Form method="POST" className={classes.form}>
        <h1>
          <strong>{action}</strong>
        </h1>
        {action === "Login" && (
          <p>
            New user?{" "}
            <span>
              <Link to="/register">Create an account</Link>
            </span>
          </p>
        )}
        {/* {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>} */}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <button>Login</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;

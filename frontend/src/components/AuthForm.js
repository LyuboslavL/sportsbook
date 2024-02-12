import { Form, Link } from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm({ action }) {
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
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
      </Form>
    </>
  );
}

export default AuthForm;

import { Form, Link, useActionData } from "react-router-dom";
import { useState, useRef } from "react";

import classes from "./AuthForm.module.css";

function AuthForm({ action }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const emailRef = useRef();
  // const passwordRef = useRef();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const data = useActionData();

  const inputChangeHandler = (event) => {
    console.log(event.target.type);
  };

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
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={inputChangeHandler}
            // ref={emailRef}
            required
          />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={inputChangeHandler}
            // ref={passwordRef}
            required
          />
        </p>
        <div className={classes.actions}>
          <button>Login</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;

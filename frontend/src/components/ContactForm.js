import { useNavigation, useNavigate, useFetcher } from "react-router-dom";

import classes from "./ContactForm.module.css";

function ContactForm() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  return (
    <fetcher.Form method="POST" action="/contact" className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" name="name" required />
      </p>
      <p>
        <label htmlFor="email">Your Email</label>
        <input id="email" type="text" name="email" required />
      </p>
      <p>
        <label htmlFor="description">Your Question</label>
        <textarea id="description" name="description" rows="5" required />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </div>
    </fetcher.Form>
  );
}

export default ContactForm;

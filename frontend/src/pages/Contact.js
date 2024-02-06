import { redirect } from "react-router-dom";

import ContactForm from "../components/ContactForm";
import PageContent from "../components/PageContent";

function ContactPage() {
  return (
    <PageContent title="Contact Us">
      <ContactForm />
    </PageContent>
  );
}

export default ContactPage;

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");

  window.alert("Sent successfully!");

  // send to backend server...
  return redirect("/");
}

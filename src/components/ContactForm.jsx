import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = ({ t }) => {
  const formID = "xayzbbyl";
  const [state, handleSubmit] = useForm(formID);

  if (state.succeeded) {
    return <p className="form-message">{t.contact.form.successMsg}</p>;
  }

  return (
    <div className="contact-form">
      <h5 className="form-title">{t.contact.form.title}</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-item">
            <label htmlFor="email">{t.contact.form.email}</label>
            <input id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="form-item">
            <label htmlFor="name">{t.contact.form.name}</label>
            <input id="name" type="text" name="name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="form-item">
            <label htmlFor="message">{t.contact.form.message}</label>
            <textarea id="message" name="message" />
            {/* <input type="text" id="message" name="message" /> */}
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </div>
        <button className="btn" type="submit" disabled={state.submitting}>
          {t.contact.form.btn}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

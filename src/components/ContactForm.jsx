import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const formID = "xayzbbyl";
  const [state, handleSubmit] = useForm(formID);

  if (state.succeeded) {
    return <p>Thanks for meesage! We will come back to earliest possible</p>;
  }

  return (
    <div className="contact-form">
      <h5 className="form-title">Contact Form</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="form-item">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="form-item">
            <label htmlFor="message">Message</label>
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

import React, { useRef } from "react";

const ContactForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    alert(`Name: ${name}, Email: ${email}, Message: ${message}`);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          required
          ref={nameRef}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          required
          ref={emailRef}
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          name=""
          id="message"
          cols="30"
          rows="10"
          required
          ref={messageRef}
        ></textarea>
      </div>
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;

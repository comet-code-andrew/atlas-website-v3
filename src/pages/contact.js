import React from "react";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import ContactMap from "@/components/ContactMap";

const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <h3 className="title">Contact Us</h3>
        <div className="row">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <ContactMap />
    </div>
  );
};

export default Contact;

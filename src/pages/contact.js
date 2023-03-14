import React from "react";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import ContactMap from "@/components/ContactMap";
import { useRouter } from "next/router";
import en from "../../locales/en";
import tr from "../../locales/tr";

const Contact = () => {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const t = locale === "en" ? en : tr;

  return (
    <div id="contact">
      <div className="container">
        <h3 className="title">{t.contact.title}</h3>
        <div className="row">
          <ContactInfo t={t} />
          <ContactForm t={t} />
        </div>
      </div>
      <ContactMap />
    </div>
  );
};

export default Contact;

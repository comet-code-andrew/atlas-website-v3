import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const ContactInfo = ({ t }) => {
  return (
    <div className="contact-info">
      <h5 className="info-title">{t.contact.info}</h5>
      <p>
        {" "}
        <FiMail className="icon" /> info@atlaskonsis.com
      </p>
      <p>
        <FiPhone className="icon" />
        TEL +90 342 337 81 53
      </p>
      <p>
        <FiPhone className="icon" />
        FAX +90 342 337 81 54
      </p>
      <p>
        <FiMapPin className="icon" />
        3. Organize Sanayi Bölgesi Celal Doğan Bulvarı No:71 Yeni Sosyal
        Tesisler D-Blok No 18 Başpınar Gaziantep Türkiye
      </p>
    </div>
  );
};

export default ContactInfo;

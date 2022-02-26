import React from "react";

import "./Contact.style.scss";

export default function Contact() {
  return (
    <div className="contact-page">
      <h2 className="contact-page-header">
        Have a question or want to work together?
      </h2>
      <form
        className="contact-page-form"
        action="mailto:nourbalaha0@gmail.com"
        method="post"
        encType="text/plain"
      >
        <input
          className="contact-page-name"
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          className="contact-page-email"
          name="email"
          type="email"
          placeholder="Email"
        />
        <textarea
          className="contact-page-message"
          name="message"
          placeholder="Your Message"
        />
        <input className="contact-page-submit" type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}

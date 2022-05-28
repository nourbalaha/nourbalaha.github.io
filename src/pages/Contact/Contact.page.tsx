import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import "./Contact.style.scss";

export default function Contact() {
  const navigate = useNavigate();
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm('service_00c3dko', 'template_s1hz2ni', form.current!, 'fCCaInLdsUxWJseky')
      .then((result) => {
        Swal.fire(
          'Email has been sent!',
          'Thank you for contacting me.',
          'success'
        ).then(() => {
          navigate("/about");
        })
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        }).then(() => {
          navigate("/about");
        })
      });
  };

  return (
    <div className="contact-page">
      <h2 className="contact-page-header">
        Have a question or want to work together?
      </h2>
      <form className="contact-page-form" ref={form} onSubmit={sendEmail}
      >
        <input
          className="contact-page-name"
          name="name"
          type="text"
          placeholder="Name"
          required
        />
        <input
          className="contact-page-email"
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <textarea
          className="contact-page-message"
          name="message"
          placeholder="Your Message"
          required
        />
        <input className="contact-page-submit" type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}

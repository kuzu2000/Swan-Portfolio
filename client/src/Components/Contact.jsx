import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Toast from './Toast';

const Contact = () => {
  const [open, setOpen] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3nluq7h',
        'template_g0vffkj',
        form.current,
        'FE1UsLYtUxEX2eouy'
      )
      .then(
        (result) => {
          console.log(result.text);
          setOpen(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h1>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Name" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button>
          Submit <i className="fa fa-paper-plane"></i>
        </button>
      </form>
      <Toast open={open} setOpen={setOpen} />
    </section>
  );
};

export default Contact;

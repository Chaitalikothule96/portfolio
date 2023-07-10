import React, { useState } from 'react';
import './App.css';
import { Button, Container } from 'react-bootstrap';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your code to handle form submission here
    setSubmitted(true);
  };

  return (
    <Container fluid className="p-5 bg-dark">
      <h1 className='text-center pb-3 text-light'>Contact Me !</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <Button variant="primary" type="submit">Let's talk</Button>
        </form>
      ) : (
        <div className="submitted-message">
          <h2>Thank you for reaching out!</h2>
          <p>I'll get back to you as soon as possible.</p>
        </div>
      )}
      
      
    </Container>
  );
};

export default Contact;

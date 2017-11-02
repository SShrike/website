import React from 'react';

import ContactForm from '../components/ContactForm';

const ContactPage = () => (
  <div>
    <h2>Contact Information</h2>

    <h3>Email</h3>
    <p>
      Send emails to either{' '}
      <a href="mailto:severen@shrike.me">severen@shrike.me</a> <i>or</i>{' '}
      <a href="mailto:severen.redwood@gmail.com">severen.redwood@gmail.com</a>;
      both resolve to the same inbox.
    </p>

    <h3>Twitter</h3>
    <p>
      Send direct messages or tweets to{' '}
      <a href="//twitter.com/SShrike">@SShrike.</a>
    </p>

    <h3>Discord</h3>
    <p>Send direct messages to Shrike#9528.</p>

    <h3>Contact Form</h3>
    <p>Alternatively you can use this handy dandy form:</p>
    <ContactForm />
  </div>
);

export default ContactPage;

import React, { Component } from 'react';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h2>Contact Information</h2>

        <h3>Email</h3>
        <p>
          Send emails to either{' '}
          <a href="mailto:severen@shrike.me">severen@shrike.me</a> <i>or</i>{' '}
          <a href="mailto:severen.redwood@gmail.com">
            severen.redwood@gmail.com
          </a>; both resolve to the same inbox.
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
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don't fill this out: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
              Your name:<br />
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your email address:<br />
              <input type="email" name="email" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your message:<br />
              <textarea name="message" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}

export default ContactPage;

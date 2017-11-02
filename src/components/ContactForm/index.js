import React, { Component } from 'react';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
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
    const { name, email, message } = this.state;
    const enabled = name.length > 0 && email.length > 0 && message.length > 0;

    return (
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
            Don&apos;t fill this out: <input name="bot-field" />
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
          <button type="submit" disabled={!enabled}>
            Send
          </button>
        </p>
      </form>
    );
  }
}

export default ContactForm;

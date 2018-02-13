import React from 'react';

// TODO: Improve type constraint.
function encode(data: any) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

interface State {
  name: string;
  email: string;
  message: string;
}

class ContactForm extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  // TODO: Improve type constraints on the event handlers.
  handleChange = (event: any) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event: any) => {
    const { name, email, message } = this.state;

    fetch('/', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: encode({
        'form-name': 'contact',

        // TODO: Investigate why ...this.state doesn't work here.
        name: name,
        email: email,
        message: message,
      }),
    })
      .then(() => alert('Success!'))
      .catch((error: any) => alert(error));

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

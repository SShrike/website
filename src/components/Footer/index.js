import React, { Component } from 'react';
import Link from 'gatsby-link';

import Bio from '../Bio';

import './Footer.module.css';

class Footer extends Component {
  render() {
    return (
      <footer styleName="footer">
        <Bio />

        <p styleName="copyright">
          <Link to="/copyright">Copyright © 2017, Severen Redwood.</Link>
        </p>
      </footer>
    );
  }
}

export default Footer;

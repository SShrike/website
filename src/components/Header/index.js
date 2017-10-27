import React from 'react';
import Link from 'gatsby-link';

import './Header.module.css';

const Header = ({ title, subtitle, avatar }) => (
  <header styleName="header">
    <Link to="/">
      <img styleName="avatar" src={avatar} alt="" />

      <h1 styleName="title">
        {title}

        <small styleName="subtitle">{subtitle}</small>
      </h1>
    </Link>
  </header>
);

export default Header;

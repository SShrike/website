import * as React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

import Bio from './Bio';

const Container = styled('footer')`
  padding: 0.5em;
`;

const Copyright = styled('p')`
  font-size: 75%;
`;

const Footer = () => (
  <Container>
    <Bio />

    <Copyright>
      <Link to="/copyright">Copyright © 2017, Severen Redwood.</Link>
    </Copyright>
  </Container>
);

export default Footer;

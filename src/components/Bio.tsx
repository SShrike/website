import * as React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

import { breakpoint, color } from '../constants';

const Container = styled('p')({
  padding: '1em 0',

  margin: '0 auto',
  marginBottom: '0.8em',

  border: `0.15em solid ${color.border}`,
  borderLeft: 0,
  borderRight: 0,

  [breakpoint.desktop]: {
    padding: '0.8em',
  },
});

const Bio = () => (
  <Container>
    Severen Redwood is a student from New Zealand, currently in year 13, who
    writes software and works on various other things in his spare time. His
    contact information is <Link to="/contact">here</Link>, and a list of his
    work is <Link to="/projects">here</Link>.
  </Container>
);

export default Bio;

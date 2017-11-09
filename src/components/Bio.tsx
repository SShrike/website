import * as React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

const P = styled('p')`
  padding: 1em 0;

  margin: 0 auto;
  margin-bottom: 0.8em;

  border: 0.15em solid hsl(183, 31%, 34%);
  border-left: 0;
  border-right: 0;

  @media only screen and (min-width: 48em) {
    padding: 0.8em;
  }
`;

const Bio = () => (
  <P>
    Severen Redwood is a student from New Zealand, currently in year 13, who
    writes software and works on various other things in his spare time. His
    contact information is <Link to="/contact">here</Link>, and a list of his
    work is <Link to="/projects">here</Link>.
  </P>
);

export default Bio;

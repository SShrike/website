import React from 'react';
import Link from 'gatsby-link';

import './Bio.module.css';

const Bio = () => (
  <p styleName="bio">
    Severen Redwood is a student from New Zealand, currently in year 13, who
    writes software and works on various other things in his spare time. His
    contact information is <Link to="/contact">here</Link>, and a list of his
    work is <Link to="/projects">here</Link>.
  </p>
);

export default Bio;

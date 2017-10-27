import React from 'react';

const ProjectsPage = () => (
  <div>
    <h2>Projects</h2>
    <p>The following is a list of past and current projects:</p>

    <h3>Current</h3>
    <p>Currently nothing, watch this space!</p>

    <h3>Past</h3>
    <ul>
      <li>
        <a href="https://github.com/SShrike/tutil">Tutil</a> — A toolbox for
        developing command line applications in Rust.
      </li>
      <li>
        <a href="https://github.com/SShrike/confmacs">Confmacs</a> — A small
        tool for managing multiple Emacs configurations.
      </li>
    </ul>
  </div>
);

export default ProjectsPage;

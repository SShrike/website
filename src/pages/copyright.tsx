import * as React from 'react';
import Helmet from 'react-helmet';

const CopyrightPage = () => (
  <div>
    <Helmet title="Copyright" />

    <h2>Content License</h2>
    <p>
      All non-code content is licensed under the{' '}
      <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
        Creative Commons BY-NC-SA license
      </a>.
    </p>

    <h2>Code License</h2>
    <p>
      All code on this website, unless otherwise explicitly noted, is licensed
      under the <a href="http://unlicense.org/">Unlicense</a>. In other words,
      feel free to do <i>whatever</i> you want with the code.
    </p>
  </div>
);

export default CopyrightPage;

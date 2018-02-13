import React from 'react';
import Helmet from 'react-helmet';

const NotFoundPage = () => (
  <div>
    <Helmet title="Page Not Found" />

    <h1>Page Not Found</h1>
    <p>
      The page you requested does not exist. Perhaps you have made a typo, or it
      has otherwise been deleted or moved.
    </p>
  </div>
);

export default NotFoundPage;

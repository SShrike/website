import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './index.css';
import 'katex/dist/katex.min.css';
import 'prism-themes/themes/prism-ghcolors.css';

const MainLayout = ({ data, children }) => {
  const { title, domain, description, keywords } = data.site.siteMetadata;

  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
        ]}
      >
        <html lang="en-NZ" />
      </Helmet>

      <Header title={domain} subtitle={description} avatar="/avatar.svg" />

      <main>{children()}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;

export const pageQuery = graphql`
  query MainLayoutQuery {
    site {
      siteMetadata {
        title
        domain
        description
        keywords
      }
    }
  }
`;

import * as React from 'react';
import Helmet from 'react-helmet';
import { injectGlobal } from 'emotion';

import { color } from '../constants';
import Header from '../components/Header';
import Footer from '../components/Footer';

import 'katex/dist/katex.min.css';
import 'prism-themes/themes/prism-ghcolors.css';

// Global Styles
injectGlobal({
  html: {
    background: color.background,
  },

  body: {
    padding: '1em',
    // This has to be set to !important for some reason.
    margin: '0 auto !important',
    maxWidth: '48rem',
  },

  main: {
    paddingTop: '0.5em',
  },
});

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
        domain: string;
        description: string;
        keywords: string;
      };
    };
  };

  children: Function;
}

const MainLayout = ({ data, children }: Props) => {
  const { title, domain, description, keywords } = data.site.siteMetadata;

  return (
    <div>
      <Helmet
        defaultTitle={title}
        titleTemplate={`%s | ${title}`}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
        ]}
      />

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

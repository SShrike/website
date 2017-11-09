import * as React from 'react';
import Helmet from 'react-helmet';
import { injectGlobal } from 'emotion';

import Header from '../components/Header';
import Footer from '../components/Footer';

import 'katex/dist/katex.min.css';
import 'prism-themes/themes/prism-ghcolors.css';

injectGlobal`
  html {
    background: hsl(94, 30%, 95%);
  }

  body {
    padding: 1em;
    margin: 0 auto !important;
    max-width: 48rem;
  }

  main {
    padding-top: 0.5em;
  }
`;

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
        title={title}
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

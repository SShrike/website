import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';

import { breakpoint, color } from '../constants';

const Title = styled('span')({
  textTransform: 'initial',

  [breakpoint.desktop]: {
    paddingRight: '0.2em',
    marginRight: '0.2em',
    borderRight: `0.1em solid ${color.border}`,
  },
});

const Meta = styled('small')({
  paddingTop: '0.75em',
  display: 'block',
  fontSize: '40%',

  [breakpoint.desktop]: {
    display: 'inline',
    verticalAlign: 'middle',
  },
});

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
      };
      html: string;
    };
  };
}

const PostTemplate = ({ data }: Props) => {
  const { markdownRemark: post } = data;

  return (
    <article>
      <Helmet title={post.frontmatter.title} />

      <h1>
        <Title>{post.frontmatter.title}</Title>
        <Meta>
          <time>{post.frontmatter.date}</time>
        </Meta>
      </h1>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        date(formatString: "DD/MM/YYYY")
      }
    }
  }
`;

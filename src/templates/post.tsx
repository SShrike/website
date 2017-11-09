import * as React from 'react';
import styled from 'react-emotion';

const Title = styled('span')`
  text-transform: initial;

  @media only screen and (min-width: 48em) {
    padding-right: 0.2em;
    margin-right: 0.2em;
    border-right: 0.1em solid #3c6e71;
  }
`;

const Meta = styled('small')`
  padding-top: 0.75em;
  display: block;
  font-size: 40%;

  @media only screen and (min-width: 48em) {
    display: inline;
    vertical-align: middle;
  }
`;

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

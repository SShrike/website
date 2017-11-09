import * as React from 'react';
import styled from 'react-emotion';

const Title = styled('span')({
  textTransform: 'initial',

  '@media only screen and (min-width: 48em)': {
    paddingRight: '0.2em',
    marginRight: '0.2em',
    borderRight: '0.1em solid #3c6e71',
  },
});

const Meta = styled('small')({
  paddingTop: '0.75em',
  display: 'block',
  fontSize: '40%',

  '@media only screen and (min-width: 48em)': {
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

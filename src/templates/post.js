import React from 'react';

import './post.module.css';

const PostTemplate = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <article>
      <h1>
        <span styleName="title">{post.frontmatter.title}</span>
        <small styleName="meta">
          <time>{post.frontmatter.date}</time>
        </small>
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

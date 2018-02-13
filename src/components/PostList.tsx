import React from 'react';
import GatsbyLink from 'gatsby-link';
import styled from 'react-emotion';

import { breakpoint, color } from '../constants';

const Posts = styled('ul')({
  margin: '0 auto',
  padding: '0.8em',
  listStyle: 'none',
});

const Post = styled('li')({
  marginTop: '-0.5em',
  marginBottom: '1.5em',
});

const Link = styled(GatsbyLink)({
  // Figure out why this !important is needed.
  textDecoration: 'none !important',
});

const Title = styled('span')({
  marginBottom: '0.4em',
  transition: 'all 250ms',
  textTransform: 'initial',

  ':hover': {
    color: color.link,
  },

  [breakpoint.desktop]: {
    paddingRight: '0.2em',
    marginRight: '0.2em',
    borderRight: `0.1em solid ${color.border}`,
  },
});

const Meta = styled('small')({
  display: 'block',
  fontSize: '50%',

  [breakpoint.desktop]: {
    display: 'inline',
    verticalAlign: 'middle',
  },
});

const Excerpt = styled('p')({ color: color.excerpt });

interface Props {
  postEdges: any;
}

class PostList extends React.Component<Props, {}> {
  getPostList() {
    const postList = [];

    this.props.postEdges.forEach((postEdge) => {
      const post = postEdge.node;

      postList.push({
        path: post.frontmatter.path,
        title: post.frontmatter.title,
        date: post.frontmatter.date,
        excerpt: post.excerpt,
        timeToRead: post.timeToRead,
      });
    });

    return postList;
  }

  render() {
    const postList = this.getPostList();

    return (
      <Posts>
        {postList.map((post) => (
          <Post key={post.path}>
            <Link to={post.path}>
              <h2>
                <Title>{post.title}</Title>

                <Meta>{post.date}</Meta>
              </h2>

              <Excerpt>{post.excerpt}</Excerpt>
            </Link>
          </Post>
        ))}
      </Posts>
    );
  }
}

export default PostList;

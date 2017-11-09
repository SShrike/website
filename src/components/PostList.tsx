import * as React from 'react';
import GatsbyLink from 'gatsby-link';
import styled from 'react-emotion';

const Posts = styled('ul')`
  margin: 0 auto;
  padding: 0.8em;
  list-style: none;
`;

const Post = styled('li')`
  margin-top: -0.5em;
  margin-bottom: 1.5em;
`;

const Link = styled(GatsbyLink)`
  // Figure out why this !important is needed.
  text-decoration: none !important;
`;

const Title = styled('span')`
  margin-bottom: 0.4em;
  transition: all 250ms;
  text-transform: initial;

  :hover {
    color: hsl(183, 31%, 34%);
  }

  @media only screen and (min-width: 48em) {
    padding-right: 0.2em;
    margin-right: 0.2em;
    border-right: 0.1em solid hsl(183, 31%, 34%);
  }
`;

const Meta = styled('small')`
  display: block;
  font-size: 50%;

  @media only screen and (min-width: 48em) {
    display: inline;
    vertical-align: middle;
  }
`;

const Excerpt = styled('p')`
  color: hsla(197, 41%, 17%, 0.8);
`;

interface Props {
  postEdges: any;
}

class PostList extends React.Component<Props, {}> {
  getPostList() {
    const postList = [];

    this.props.postEdges.forEach(postEdge => {
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
        {postList.map(post => (
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

import React, { Component } from 'react';
import Link from 'gatsby-link';

import './PostList.module.css';

class PostList extends Component {
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
      <ul styleName="posts">
        {postList.map(post => (
          <li styleName="post" key={post.path}>
            <Link styleName="link" to={post.path}>
              <h2>
                <span styleName="title">{post.title}</span>

                <small styleName="meta">{post.date}</small>
              </h2>

              <p styleName="excerpt">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default PostList;

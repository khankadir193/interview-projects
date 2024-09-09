// src/components/BlogPost.js
import React from 'react';

const BlogPost = ({ title, content }) => {
  console.log('tiltle1111', title, 'content1111', content);
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default BlogPost;

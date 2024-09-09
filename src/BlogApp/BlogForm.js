// src/components/BlogForm.js
import React, { useState } from 'react';
import BlogPost from './BlogPost';

const BlogForm = ({ addPost, setTitle, setContent, content, title }) => {
  // const [title, setTitle] = useState('');
  // const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
    setTitle('');
    setContent('');
  };

  // if(content && title){
  //   return <BlogPost title={title} content={content} />
  // }

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Content</label>
        <textarea
          className="form-control"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="3"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary mt-2">Add Post</button>
    </form>
  );
};

export default BlogForm;

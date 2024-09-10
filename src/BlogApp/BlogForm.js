import React from 'react';

const BlogForm = ({ addPost, setTitle, setContent, setLanguage, content, title, language }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content, language });
    setTitle('');
    setContent('');
    setLanguage('');
  };

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
        <label>Programming Language</label>
        <select
          className="form-control"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          required
        >
          <option value="">Select a language</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Java">Java</option>
          <option value="React JS">React JS</option>
          <option value="Python">Python</option>
          <option value="C++">C++</option>
        </select>
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

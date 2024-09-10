import React from 'react';

const BlogPost = ({ title, content }) => {
  return (
    <div className="card mb-4 shadow-sm border-0 rounded w-50">
      {/* Image placeholder for blog post */}
      <img 
        src="https://via.placeholder.com/600x300" 
        alt="Blog post" 
        className="card-img-top rounded-top"
      />
      <div className="card-body">
        {/* Blog title with better styling */}
        <h4 className="card-title font-weight-bold mb-3 text-primary">{title}</h4>
        {/* Blog content with a lighter color and a smoother font */}
        <p className="card-text text-secondary" style={{ lineHeight: '1.8' }}>{content}</p>
        {/* A button for reading more */}
        <a href="#" className="btn btn-outline-primary">Read More</a>
      </div>
    </div>
  );
};

export default BlogPost;

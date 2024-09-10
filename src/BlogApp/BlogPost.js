import React, { useState } from 'react';
import jsImage from './javascript.jpg';
import './blog.css'; // Import the CSS file for styling

const BlogPost = ({ title, content }) => {
  const [showMore, setShowMore] = useState(false);

  const displayContent = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="card m-4 shadow-sm border-0 rounded w-50">
      {/* Image placeholder for blog post */}
      <img
        src={jsImage}
        alt="Blog post"
        className="card-img-top rounded-top"
      />
      <div className="card-body">
        {/* Blog title with better styling */}
        <h4 className="card-title font-weight-bold mb-3 text-primary custom-title">
          {title}
        </h4>
        {/* Blog content with a lighter color and a smoother font */}
        <p className="card-text text-secondary" style={{ lineHeight: '1.8' }}>
          {showMore === false && content.length > 150 ? (
            <span>
              {content.substring(0, 150)}...
              <a href="#" className="btn btn-outline-primary" onClick={displayContent}>
                Read More
              </a>
            </span>
          ) : (
            content
          )}
        </p>
        {/* Conditionally render the full content when "Read More" is clicked */}
        {showMore && (
          <div>
            <p className="card-text text-secondary" style={{ lineHeight: '1.8' }}>
              {content}
            </p>
            <a href="#" className="btn btn-outline-primary" onClick={displayContent}>
              Show Less
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPost;

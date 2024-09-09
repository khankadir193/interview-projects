import React from 'react';

const HomeComp = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Blog Owner Image */}
        <div className="col-md-4 text-center">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Abdul Kadir Khan" 
            className="img-fluid rounded-circle mb-3"
          />
        </div>
        {/* Blog Introduction */}
        <div className="col-md-8">
          <h1 className="mb-4">Welcome to Abdul Kadir Khan's Blog</h1>
          <p>
            Hello! I'm <strong>Abdul Kadir Khan</strong>, a passionate software developer and tech enthusiast. 
            This blog is a platform where I share my insights on software development, 
            emerging technologies, and my personal journey in the tech industry.
          </p>
          <p>
            Whether you're a beginner looking for tips on programming or an experienced developer seeking 
            fresh perspectives, you're in the right place. I cover topics like JavaScript, React, web development, 
            and more.
          </p>
          <p>
            Feel free to explore the blog, read articles, and don't hesitate to reach out if you have any questions or comments!
          </p>
          <a href="/contact" className="btn btn-primary">Contact Me</a>
        </div>
      </div>
    </div>
  );
}

export default HomeComp;

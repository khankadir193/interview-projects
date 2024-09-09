import React from 'react'
import BlogForm from './BlogForm';

const BlogComp = () => {
  const createPost = () => {
    console.log('Create Post');
    return <BlogForm />
  };

  return (
    <div>
      BlogComp
      <button className='m-3 btn btn-primary btn-sm float-end' onClick={createPost}>Create Post</button>
    </div>
  );
};

export default BlogComp;
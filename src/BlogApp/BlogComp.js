import React, { useState } from 'react'
import BlogForm from './BlogForm';
import BlogPost from './BlogPost';
import BlogList from './BlogList';

const BlogComp = () => {
  const [showForm,setShowForm] = useState();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [showPost, setShowPost] = useState(false);


  const addPost = (post) =>{
    console.log('Add Post');
    // setShowForm(true);
    setPosts([post, ...posts]);
    setShowForm(false);
    setShowPost(true);
    console.log('title...???',title);
    console.log('content...????',content);
  };

  const createPost = () => {
    console.log('Create Post');
    setShowForm(true);
  };

  return (
    <div>
      {/* BlogComp */}
      <button className='m-3 btn btn-primary btn-sm float-end' onClick={createPost}>Create Post</button>
      {showForm ? <BlogForm addPost={addPost} content={content}  title={title} setContent={setContent} setTitle={setTitle} />
      : 'blog content here'}
      {showPost && <BlogList posts={posts} />}
    </div>
  );
};

export default BlogComp;
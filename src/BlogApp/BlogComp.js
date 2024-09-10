import React, { useState } from 'react'
import BlogForm from './BlogForm';
import BlogPost from './BlogPost';
import BlogList from './BlogList';
import postData from './blog.json';

const BlogComp = () => {
  const [showForm,setShowForm] = useState();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [showPost, setShowPost] = useState(true);
  const [language, setLanguage] = useState('');


  const addPost = (post) =>{
    console.log('Add Post');
    // setShowForm(true);
    setPosts([post, ...posts]);
    setShowForm(false);
    setShowPost(true);
  };

  const createPost = () => {
    console.log('Create Post');
    setShowForm(true);
    setShowPost(false);
  };

  return (
    <div>
      {/* BlogComp */}
      <button className='m-3 btn btn-primary btn-sm float-end' onClick={createPost}>Create Post</button>
      {showForm && <BlogForm addPost={addPost} content={content}  title={title} setContent={setContent} setTitle={setTitle} setLanguage={setLanguage} language={language} />}
      {showPost && <BlogList posts={postData} />}
    </div>
  );
};

export default BlogComp;
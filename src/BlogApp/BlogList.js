import React from 'react'
import BlogPost from './BlogPost'

const BlogList = ({posts}) => {
  return (
    <div>
      {
       posts.length ? posts.map((post,index) => {
          return <BlogPost key={index} title={post.title} content={post.content} />
        }) //map through the posts and return a blogpost component for each post
        : 'no posts yet' //if there are no posts, return a message
      }
    </div>
  )
}

export default BlogList
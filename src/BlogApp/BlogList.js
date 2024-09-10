import React from 'react';
import BlogPost from './BlogPost';

const BlogList = ({ posts }) => {
  console.log('posts....',posts);
  return (
    <div className="container">
      {
        // Loop through each language in the posts object
        Object.keys(posts).map((language, langIndex) => (
          <div key={langIndex} className="mb-4">
            {/* Language Heading */}
            <h3 className="text-primary">{language.toUpperCase()}</h3>
            {
              // Check if there are posts for the current language
              posts[language].length
                ? posts[language].map((post, postIndex) => (
                    // Render BlogPost for each post under the current language
                    <BlogPost 
                      key={postIndex} 
                      title={post.title} 
                      content={post.content} 
                    />
                  ))
                : <p>No posts available for {language}</p>
            }
          </div>
        ))
      }
    </div>
  );
};

export default BlogList;

import React, { useState } from 'react';
import BlogPost from './BlogPost';

const BlogList = ({ posts }) => {
  const [showMore, setShowMore] = useState(false);  // Tracks if we are showing more
  const [expandedLang, setExpandedLang] = useState('');  // Tracks which language's content is expanded

  const handleExpandData = (language) => {
    // Set the state to show the full content for the selected language
    setShowMore(true);
    setExpandedLang(language);
  };

  return (
    <div className="container1">
      {
        // Loop through each language in the posts object
        Object.keys(posts).map((language, langIndex) => (
          <div key={langIndex} className="mb-4">
            {/* Language Heading */}
            <h3 className="text-primary">{language.toUpperCase()}</h3>

            {/* Show dummy data by default or full content if Read More was clicked */}
            {
              !showMore || expandedLang !== language ? (
                // Show dummy data if "Read More" is not clicked
                <BlogPost title={`Intro to ${language}`} content={`This is a brief intro to ${language}.`} />
              ) : (
                // Show the full content for the selected language when expanded
                posts[language].map((post, postIndex) => (
                  <BlogPost 
                    key={postIndex} 
                    title={post.title} 
                    content={post.content} 
                  />
                ))
              )
            }

            {/* Show "Read More" only if we haven't expanded the current language */}
            {
              (!showMore || expandedLang !== language) && (
                <a href="#" className="btn btn-outline-primary" onClick={() => handleExpandData(language)}>
                  Read More
                </a>
              )
            }
          </div>
        ))
      }
    </div>
  );
};

export default BlogList;

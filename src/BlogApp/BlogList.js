import React, { useState } from 'react';
import BlogPost from './BlogPost';

const BlogList = ({ posts }) => {
  const [expandedLang, setExpandedLang] = useState(null); // Track which language is expanded

  const handleExpandData = (language) => {
    // Toggle the expanded state. If the same language is clicked again, collapse it.
    setExpandedLang(expandedLang === language ? null : language);
  };

  return (
    <div className="container1">
      {
        // Loop through each language in the posts object
        Object.keys(posts).map((language, langIndex) => (
          <div key={langIndex} className="mb-4">
            {/* Language Heading */}
            <h3 className="text-primary">{language.toUpperCase()}</h3>

            {/* Show dummy data by default or full content if Read More was clicked for that language */}
            {
              expandedLang !== language ? (
                // Show dummy data if "Read More" is not clicked or another language is expanded
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
              expandedLang !== language ? (
                <a href="#" className="btn btn-outline-primary" onClick={() => handleExpandData(language)}>
                  Read More
                </a>
              ) : (
                <a href="#" className="btn btn-outline-secondary" onClick={() => handleExpandData(language)}>
                  Show Less
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

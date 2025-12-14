import React, { useEffect, useState, useCallback } from 'react'
import { bigText } from './Text';
import './scrollStyle.css';

const PARAGRAPH_PER_LOAD = 5;


const InfinitScrollingComp = () => {
    const [visibleCount, setVisibleCount] = useState(PARAGRAPH_PER_LOAD);
    const [isLoading, setIsLoading] = useState(false);

    const allParagraphs = bigText.split('\n\n');
    console.log('allparagraph..---',allParagraphs);

    const loadMoreContent = useCallback(() => {
        if (isLoading || visibleCount >= allParagraphs.length) return;
        
        setIsLoading(true);
        
        // Simulate API delay
        setTimeout(() => {
            setVisibleCount(prev => {
                const newCount = prev + PARAGRAPH_PER_LOAD;
                return Math.min(newCount, allParagraphs.length);
            });
            setIsLoading(false);
        }, 5000);
    }, [isLoading, visibleCount, allParagraphs.length]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= 
                document.documentElement.scrollHeight - 200) {
                loadMoreContent();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadMoreContent]);

    return (
        <div>
            {allParagraphs.slice(0, visibleCount).map((para, index) => (
                <p key={index}>{para}</p>
            ))}
            
            {visibleCount < allParagraphs.length && (
                <div className="loading-container">
                    {isLoading ? (
                        <div className="spinner">Loading...</div>
                    ) : (
                        <button onClick={loadMoreContent}>
                            Load More
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}

export default InfinitScrollingComp;
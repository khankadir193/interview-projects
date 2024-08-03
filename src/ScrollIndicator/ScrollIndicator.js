import React, { useEffect, useState } from 'react'
import './Scroll.css';
import ProgressBar from './ProgressBar';

const ScrollIndicator = () => {
  const [data, setData] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
      const height = document.documentElement.scrollHeight;
      const scrolled = document.documentElement.scrollTop;
      const progress = (scrolled / height) * 100;
      const scrollPercentage = Math.round(progress);
      console.log('progress..',progress);
      console.log('scrollPercentage..',scrollPercentage);
    //   setScrollPercentage(scrollPercentage);
    setScrollPercentage(progress);
  }

  useEffect(() => {
    document.addEventListener('scroll',handleScroll);
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=100');
        const res = await response.json();
        setData(res.products);
      } catch (err) {
        console.log('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  if (data.length === 0) {
    return null;
  }

  return (
    <>
      <ProgressBar progress={scrollPercentage} />
      <div className='scroll-container'>
        <h1>title</h1>
        <div style={{ height: 'calc(100vh - 30px)' }}>
          {data.map((item) => (
            <h3 key={item.id}>{item.title}</h3>
          ))}
        </div>
      </div>
    </>
  );
};


export default ScrollIndicator;
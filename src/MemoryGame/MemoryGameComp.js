import React from 'react';
import './MemoryGame.css';
import cssIcon from './css.png';
import javaIcon from './java.png';
import htmlIcon from './html.png';
import jsIcon from './js.png';

const MemoryGameComp = () => {
  return (
    <div className='memory-game-container'>
        {/* first row */}
        <div className='cirlcles-container'>
            <img src={cssIcon} alt="image" />
        </div>
        <div className='cirlcles-container'>
            <img src={javaIcon} alt="image" />
        </div>
        <div className='cirlcles-container'>
            <img src={htmlIcon} alt="image" />
        </div>
        <div className='cirlcles-container'>
            <img src={jsIcon} alt="image" />
        </div>
        {/* second row */}
        <div className='cirlcles-container'>
            <img src={cssIcon} alt="image" />
        </div>
        <div className='cirlcles-container'>
            <img src={javaIcon} alt="image" />
        </div>
        <div className='cirlcles-container'>
            <img src={htmlIcon} alt="image" />
        </div>
        <div className='cirlcles-container'>
            <img src={jsIcon} alt="image" />
        </div>
        {/* third row */}
        <div className='cirlcles-container'>
            <img src={cssIcon} alt="image" />
        </div>
        <div className='cirlcles-container'>
            <img src={javaIcon} alt="image" />
        </div>
        <div className='cirlcles-container'>
            <img src={htmlIcon} alt="image" />
        </div>
        <div className='cirlcles-container'>
            <img src={jsIcon} alt="image" />
        </div>
    </div>
  )
};

export default MemoryGameComp;
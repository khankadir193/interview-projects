import React from 'react';
import './MemoryGame.css';
import cssIcon from './css.png';
import javaIcon from './java.png';
import htmlIcon from './html.png';
import jsIcon from './js.png';
import reactIcon from './react.png';
import nodeIcon from './node.png';

const MemoryGameComp2 = () => {
    const [flippedCards,setFlippedCards] = React.useState(Array(12).fill(false)); //array of flipped cards
    const images = [cssIcon, javaIcon, htmlIcon, jsIcon, reactIcon,nodeIcon,
        cssIcon, javaIcon, htmlIcon, jsIcon,
        reactIcon,nodeIcon];
    const handleCardClick = (index) => {
        return () => {
            setFlippedCards((prevFlippedCards) => {
                const newFlippedCards = [...prevFlippedCards];
                newFlippedCards[index] = !newFlippedCards[index];
                return newFlippedCards;
            });
        };
    }
    return (
        <div className='memory-game-container'>
            {
                images.map((image, index) => {
                    return (
                        <div 
                        className=  {`cirlcles-container ${flippedCards[index] ? 'flipped' : ''}`}
                        onClick={handleCardClick(index)}
                        key={index}
                        >
                            <div className='card'>
                                <div className='front'>❓</div>
                                <div className='back'>
                                    <img src={image} alt="image" />
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default MemoryGameComp2;
import React from 'react';
import headCoin from './head.jpg';
import tailCoin from './tail.jpg';
import './FilpCoin.css';

const FilpCoin = () => {
    const [isHead, setIsHead] = React.useState(true);

    return (
        <div className="flip-container">
            <img src={headCoin} alt='head-coin' />
            <img src={tailCoin} alt='tail-coin' />
            <button onClick={() => console.log('Flip')}>Flip</button>
        </div>
    );
};

export default FilpCoin;
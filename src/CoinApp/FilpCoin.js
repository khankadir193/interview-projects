import React from 'react';
import headCoin from './head.jpg';
import tailCoin from './tail.jpg';
import './FilpCoin.css';

const FilpCoin = () => {
    const [isHead, setIsHead] = React.useState(true);

    const flipCoin = () => {
        setIsHead(!isHead);
    };
    return (
        <div className="flip-container">
            <img src={isHead ? headCoin : tailCoin} alt='head-coin' />
            {/* <img src={tailCoin} alt='tail-coin' /> */}
            <button onClick={() => flipCoin()}>Flip</button>
        </div>
    );
};

export default FilpCoin;
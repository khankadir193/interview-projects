import React from 'react';
import './GameComp.css';

const GameComp = () => {
    return (
        <div className='game-container'>
            <h1>Welcome to Rock,Paper,Scissor Game.</h1>
            <div className='game-sub-container'>
                <button>Rock</button>
                <button>Paper</button>
                <button>Scissors</button>
            </div>
            <div className='score-container'>
                <h2>Your Choice:</h2>
                <h2>Computer's Choice:</h2>
                <h2>Your Choice</h2>
                <h2>Your Score:</h2>
                <h2>Computer Score:</h2>
            </div>

        </div>
    )
}

export default GameComp
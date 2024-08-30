import React, { useState } from 'react';
import './GameComp.css';

const GameComp = () => {
    const [userScore, setUserScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [userChoice, setUserChoice] = useState(0);
    const [computerChoice, setComputerChoice] = useState(0);
    const [winner, setWinner] = useState('');

    const options = ["Rock", "Paper", "Scissors"];
    const computerCalculation = async () => {
        const random = await Math.floor(Math.random() * options.length);
        return options[random];
    };


    const handleClick = async (event) => {
        const computerChoice = await computerCalculation();
        const buttonContent = await event.target.textContent;
        setComputerChoice(computerChoice);
        setUserChoice(buttonContent);
        if (buttonContent === computerChoice) {
            return;
        } else if (buttonContent === "Rock" && computerChoice === "Scissors") {
            setUserScore(userScore + 1);
        } else if (buttonContent === "Scissors" && computerChoice === "Paper") {
            setUserScore(userScore + 1);
        } else if (buttonContent === "Paper" && computerChoice === "Rock") {
            setUserScore(userScore + 1);
        }else{
            setComputerScore(computerScore + 1);
        }

        if(userScore + computerScore === 5){
            if(userScore > computerScore){   
                alert("You Won");
                setWinner('You Won');
            }else{   
                alert("Computer Won");  
                setWinner('Computer Won');
            }

            setComputerChoice('');
            setComputerScore(0);
            setUserChoice('');
            setUserScore(0);
        }
    }



    return (
        <div className='game-container'>
            <h1>Welcome to Rock,Paper,Scissor Game.</h1>
            <div className='game-sub-container'>
                <button onClick={handleClick}>Rock</button>
                <button onClick={handleClick}>Paper</button>
                <button onClick={handleClick}>Scissors</button>
            </div>
            <div className='score-container'>
                <h2>Your Choice: {userChoice}</h2>
                <h2>Computer's Choice: {computerChoice}</h2>
                <h2>Your Score: {userScore}</h2>
                <h2>Computer Score: {computerScore}</h2>
            </div>
            {winner && <h1>The winner is :- {winner}</h1>}
        </div>
    )
}

export default GameComp
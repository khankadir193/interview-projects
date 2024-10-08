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

    const determineWinner = async(usrChoice, computerChoice) => {
        //if tie just return nothing.
        if (usrChoice === computerChoice) {
            return;
        } 

        //user choice wins
        const userChoiceWins = 
        ((usrChoice === "Rock" && computerChoice === "Scissors") ||
        (usrChoice === "Scissors" && computerChoice === "Paper") || 
        (usrChoice === "Paper" && computerChoice === "Rock"));

        //check whether userChoice else computerChoice
        if (userChoiceWins) {
            setUserScore(prevScore => prevScore + 1);
        } else {
            setComputerScore(prevScore => prevScore + 1);
        }
    };

    const resetGame = async() => {
        setComputerChoice('');
        setComputerScore(0);
        setUserChoice('');
        setUserScore(0);
    };

    const handleClick = async (event) => {
        const computerChoice = await computerCalculation();
        const buttonContent = await event.target.textContent;
        setComputerChoice(computerChoice);
        setUserChoice(buttonContent);
        const winner = await determineWinner(buttonContent, computerChoice); // Call the determineWinner function with the user's choice and the computer's choice
        if (userScore + computerScore === 5) {
            if (userScore > computerScore) {
                alert("You Won");
                setWinner('You Won');
            } else {
                alert("Computer Won");
                setWinner('Computer Won');
            }
            resetGame();
        }
    };



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

export default GameComp;
import { useState } from "react";
import ButtonComp from "./ButtonComp";

const TicTacToeApp = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
    const [winner, setWinner] = useState(null);

    const handleClick = (index) => {
        if (board[index] || winner) {
            return;
        }
        const newBoard = [...board];
        newBoard[index] = isX ? 'X' : 'O';
        setIsX(!isX);
        setBoard(newBoard);
        checkForWinner(newBoard);
    }

    const checkForWinner = (board) => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a]);
                return;
            }
        }

        if (board.every(cell => cell !== null)) {
            setWinner('draw');
        }
    }

    return(
        <div className="button-container">
            {board.map((_, index) => (
                <ButtonComp 
                    key={index} 
                    value={board[index] || ''} 
                    handleClick={() => handleClick(index)}
                />
            ))}
        </div>
    )
};

export default TicTacToeApp;

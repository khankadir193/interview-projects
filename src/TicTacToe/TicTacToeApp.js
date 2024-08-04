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
    }


    return(
        <div className="button-container">
            <ButtonComp value='X' board={board} />
            <ButtonComp value='X' board={board} />
            <ButtonComp value='X' board={board} />
            <ButtonComp value='X' board={board} />
            <ButtonComp value='X' board={board} />
            <ButtonComp value='X' board={board} />
            <ButtonComp value='X' board={board} />
            <ButtonComp value='X' board={board} />
            <ButtonComp value='X' board={board} />
            <ButtonComp value='X' board={board} />
            <ButtonComp value='X' board={board} />
            <ButtonComp value='X' board={board} />

        </div>
    )
};
export default TicTacToeApp;

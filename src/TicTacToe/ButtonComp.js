import React from 'react';
import './ticTacToe.css';


const ButtonComp = ({ value, board , handleClick}) => {
  // if (!value) {
  //   console.error('ButtonComp: value prop is missing or null');
  //   return null;
  // }

  // if (!board) {
  //   console.error('ButtonComp: board prop is missing or null');
  //   return null;
  // }

  return (
    <div>
      <button onClick={handleClick}>{value}</button>
    </div>
  )
}


export default ButtonComp;
import React from 'react';
import './ticTacToe.css';

const ButtonComp = ({value,board}) => {
  return (
    <div>
        <button>{value}</button>
    </div>
  )
}

export default ButtonComp;
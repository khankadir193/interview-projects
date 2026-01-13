import React from 'react';
import useTimer from './useTimer';

const TimerComponent = () => {
    const timer = useTimer(100);
    return (
        <div>
            <p>Count Down Timer</p>
            <p>{timer}</p>
            {timer === 0 && <p>Time's Up</p>}
        </div>
    )
}

export default TimerComponent
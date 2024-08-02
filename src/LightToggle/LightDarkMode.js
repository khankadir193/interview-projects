import React, { useState } from 'react';
import './lightDark.css';

const LightDarkMode = () => {
    const [clicked, isClicked] = useState(false);
    const toggleMode = () => {
        isClicked(!clicked);
    };

    return (
        <div style={{backgroundColor: clicked ? 'dark-mode' : 'light-mode'}}>
            <button onClick={toggleMode}>click</button>
        </div>
    );
}

export default LightDarkMode;
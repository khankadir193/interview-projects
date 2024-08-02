import React, { useState } from 'react';
import './lightDark.css';

const LightDarkMode = () => {
    const [clicked, isClicked] = useState(false);
    const toggleMode = () => {
        isClicked(!clicked);
    };

    return (
        <div className={clicked ? 'dark-mode' : 'light-mode'}>
            <button onClick={toggleMode}>toggleButton</button>
        </div>
    );
}

export default LightDarkMode;
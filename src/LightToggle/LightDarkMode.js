import React, { useState } from 'react'

const LightDarkMode = () => {
    const [clicked, isClicked] = useState(false);
    const toggleMode = () => {
        isClicked(!clicked);
    };

    return (
        <div style={{backgroundColor: clicked ? 'black' : 'white'}}>
            <button onClick={toggleMode}>click</button>
        </div>
    );
}

export default LightDarkMode;
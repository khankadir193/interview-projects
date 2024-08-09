import React, { useState } from 'react';
import ChildComp from './ChildComp';

const ParentComp = () => {
    const [obj,setObj] = useState();
    const handleClick = (event) => {
        setObj(event);
        console.log('event.target.value', event);
    };

    return (
        <div>
            <h2>{obj?.childContent}</h2>
            <h2>{obj?.createdBy}</h2>
            <ChildComp handleClick={handleClick} />
        </div>
    )
};

export default ParentComp;
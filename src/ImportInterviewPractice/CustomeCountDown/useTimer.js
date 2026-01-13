import React, { useEffect, useState } from 'react'

const useTimer = (start) => {
    console.log('starValue...',start);
    const [timer,setTimer] = useState(start);

    useEffect(()=>{
        if (timer === 0) return;

        const timerId = setInterval(()=>{
            setTimer((prev)=> prev - 1);
        },1000);

        return ()=> clearInterval(timerId);
    },[timer]);
    
    return timer;
}

export default useTimer
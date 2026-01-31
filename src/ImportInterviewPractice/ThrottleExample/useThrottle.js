import React, { useRef } from 'react'

const useThrottle = () => {
    const lastTime = useRef(0);

    const throttle = (func,delay)=>{
        // let lastTime = 0;
        return (...args) =>{
            let now = Date.now();
            if(now - lastTime.current >= delay){
                lastTime.current = now;
                func(...args);
            }
        };
    };

  return {throttle};
}

export default useThrottle;
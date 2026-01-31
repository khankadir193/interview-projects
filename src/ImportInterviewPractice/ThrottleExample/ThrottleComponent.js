import React, { useEffect } from 'react';
import useThrottle from './useThrottle';

const ThrottleComponent = () => {
    const { throttle } = useThrottle();

    useEffect(() => {
        const handleScroll = throttle(() => {
            console.log('scrolling');
        }, 1000);

        //normal calling
        // const handleScroll = ()=>{
        //     console.log('scrolling.....');
        // }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [throttle])
    return (
        <div style={{ height: '200vh' }}>Scroll Me</div>
    )
}

export default ThrottleComponent;
import { useEffect, useState } from "react"

const useScroll = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };


        window.addEventListener('resize',handleResize);

        //cleanup function

        return () => window.removeEventListener('resize',handleResize);

    }, [])


    return windowSize;
};

export default useScroll;
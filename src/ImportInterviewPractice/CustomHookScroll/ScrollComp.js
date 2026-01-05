import React from 'react'
import useScroll from './useScroll'

const ScrollComp = () => {
    const { width, height } = useScroll();
    return (
        <div>
            <p>{`Page width: ${width}`}</p>
            <p>{`Page height: ${height}`}</p>
        </div>
    )
}

export default ScrollComp;
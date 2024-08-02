import React, { useEffect, useState } from 'react'
// import './Scroll.css';

const ScrollIndicator = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await fetch('https://dummyjson.com/products?limit=100');
                const res = await response.json();
                setData(res.products);
                console.log('response...', res.products);
            };
            fetchData();
        } catch (err) {
            console.log('getting error..', err);
        }

    }, [])
    return (
        <div className='scroll-container'>
            <h1>title</h1>
            {data.length > 0 && data.map((item) => {
                return (
                    <h3 key={item.id}>{item.title}</h3>
                );
            })}
        </div>
    )
}

export default ScrollIndicator;
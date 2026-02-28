import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './Reducer/counterSlice';

export const CounterComp = () => {
    // const [counter,setCounter] = useState();
    const dispatch = useDispatch();
    const count = useSelector((state) => state?.counter?.value);

    const containerStyle = {
       width:'100%',
       height:'12vh',
       flexDirection:'column',
       justifyContent:'space-around',
       alignItems:'center' 
    }

    const headerStyle = {
        color:'blue',
        fontWeight:'bolder'
    }

    const btn = {
       width:'30%',
       border:'none',
       background:'red', 
       borderRadius:'1vw'
    }

    return (
        <div style={containerStyle}>
            <p style={headerStyle}>CounterValue:{count}</p>
            <button onClick={()=> dispatch(increment())} style={btn}>+</button>
            <button onClick={()=> dispatch(decrement())} style={btn}>-</button>
            <button onClick={()=> dispatch(incrementByAmount())} style={btn}>IncrymentByAmount</button>
        </div>
    )
};

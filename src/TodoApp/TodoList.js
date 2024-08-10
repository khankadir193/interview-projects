import React, { useState } from 'react';
import './todos.css';
import List from './List';


const TodoList = () => {
    const [data, setData] = useState([]);
    const [flag,setFlag] = useState(false);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const input = event.target[0]?.value;
        if (!input) {
            return;
        }
        if (data.includes(input)) {
            setFlag(true);
            return;
        }
        const updatedData = data.concat(input);
        setData(updatedData);
        setFlag(false);
    };
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const input = event.target[0]?.value;
    //     if(input){
    //         data.length > 0 ? data?.map((txt,ind)=>{
    //             if(input===txt){
    //                 setFlag(true);
    //                 return;
    //             }
    //         }) : setData(input);
    //     }else if(flag && input) {
    //         const arr = [...data];
    //         arr.push(input);
    //         setData(arr);
    //         setFlag(false);
    //         console.log('[...data, input]',arr);
    //     } else {
    //         console.log('[...data, input]',[...data, input]);
    //         // setData(input);
    //         return;
    //     }

    // };

    return (
        <div className='container'>
            <div className='todo-container'>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Add Todo' />
                    <button type='submit'>Add TODO</button>
                </form>
                {data.length > 0 && data?.map((item, index) =><List item={item} />)}
            </div>
        </div>
    );
}

export default TodoList;
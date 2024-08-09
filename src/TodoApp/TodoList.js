import React, { useState } from 'react';
import './todos.css';
import List from './List';


const TodoList = () => {
    const [data, setData] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        const input = event.target[0]?.value;
        console.log("input", input);
        console.log("clicked", event);
        setData(input);
    };

    return (
        <div className='container'>
            <div className='todo-container'>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Add Todo' />
                    <button type='submit'>Add TODO</button>
                </form>
                {data && <List addData={setData} data={data} />}
            </div>
        </div>
    );
}

export default TodoList;
import React from 'react';
import './todos.css';


const TodoList = () => {
    const handleSubmit = (event)=>{
        event.preventDefault();
        const input = event.target[0]?.value;
        console.log("input",input);
        console.log("clicked",event);
    };

    return (
        <div className='container'>
            <div className='todo-container'>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Add Todo' />
                    <button type='submit'>Add TODO</button>
                </form>
            </div>
        </div>
    );
}

export default TodoList;
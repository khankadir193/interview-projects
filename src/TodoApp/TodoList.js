import React, { useState } from 'react';
import './todos.css';
import List from './List';


const TodoList = () => {
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);
    const [deleteData,setDeleteData] = useState(false);

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

    const handleDelete = (text,index) => {
        console.log('text...??',text);
        const  result = data.filter(item => item === text);
        // .filter(item => item === item);
        console.log('result...??',result);
        setDeleteData(true);
        console.log('delet...',index);
    };


    return (
        <div className='container'>
            <div className='todo-container'>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Add Todo' />
                    <button type='submit'>Add TODO</button>
                </form>
                {data.length > 0 && data?.map((item, index) => <List item={item} data={data} index={index} handleDelete={handleDelete} />)}
            </div>
        </div>
    );
}

export default TodoList;
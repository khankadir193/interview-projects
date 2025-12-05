import React, { useState } from 'react';
import './stack.css';

const StackComponent = () => {
    const [stackElement, setStackElement] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const stackPush = () => {
        if (inputValue.length === 0) return;
        else if (stackElement.length > 5) {
            alert('stack is overflow');
            return;
        }

        setStackElement([...stackElement, inputValue]);
        setInputValue('');
    };

    const stackPop = () => {
        if (stackElement.length === 0) return;

        const newStack = [...stackElement];
        newStack.pop();

        setStackElement(newStack);
    };

    const handleInputValue = (event) => {
        setInputValue(event.target.value);
    }



    return (
        <div className='stack-main-container'>
            <div className='push-pop-container'>
                <h2>Stack (Push/Pop)</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}>
                    <button onClick={stackPush}>Push</button>
                    <button onClick={stackPop}>Pop</button>
                </div>
                <input
                    onChange={handleInputValue}
                    placeholder='please enter your text'
                    value={inputValue}
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '10px',
                }}
            >
                {stackElement.length === 0 ? (
                    <p>Stack is empty</p>
                ) : (
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {stackElement
                            .slice(0)
                            .reverse()
                            .map((item, index) => (
                                <li
                                    key={index}
                                    style={{
                                        backgroundColor: '#e3f2fd',
                                        margin: '5px 0',
                                        padding: '8px 15px',
                                        borderRadius: '6px',
                                        width: '150px',
                                        textAlign: 'center',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    {item}
                                </li>
                            ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default StackComponent;
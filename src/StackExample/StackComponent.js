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
                <button onClick={stackPush}>Push</button>
                <button onClick={stackPop}>Pop</button>
                <input
                    onChange={handleInputValue}
                    placeholder='please enter your text'
                />
            </div>

            <div className='stack-element-container'>
                <h3>Stack Elements</h3>
                {
                    stackElement.length === 0 ? (
                        <p>Stack is empty</p>
                    ) : (
                        <ul>
                            {
                                stackElement.slice(0).reverse().map((item, index) => {
                                    <li key={index}>{item}</li>
                                })
                            }
                        </ul>
                    )
                }
            </div>
        </div>
    )
}

export default StackComponent;
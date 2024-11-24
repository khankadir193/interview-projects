import React, { useState } from 'react';
import './QuizApp.css';

const QuizQuestions = ({ item, onSubmit }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleRadioChange = (e) => {
        console.log('handleRadioChange..', e.target);
        setSelectedOption(e.target.value);
    };

    const handleClick = () => {
        console.log('Submit button clicked...');
        if (!selectedOption) {
            alert('Please select an option before submitting!');
        } else {
            onSubmit(selectedOption);
        }
    };

    const handleAlert = (option) => {
        alert(`You selected: ${option}`);
    };

    return (
        <div className="list-question">
            <ul>
                <li>{item.question}</li>
                {item.options.map((option, ind) => {
                    return (
                        <div key={ind}>
                            <label>
                                <input
                                    type="radio"
                                    name="options"
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={(e) => {
                                        handleRadioChange(e);
                                        // handleAlert(option); // Trigger alert when the option is clicked
                                    }}
                                />
                                {option}
                            </label>
                        </div>
                    );
                })}
            </ul>
            <button onClick={handleClick}>Submit</button>
        </div>
    );
};

export default QuizQuestions;

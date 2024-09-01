import React,{useState} from 'react';
import './QuizApp.css';
import QuizData from './quizData.json';

const QuizComp = () => {
    console.log('quiz-data...', QuizData.quizData);
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleRadioChange = (e) => {
        setSelectedOption(e.target.value);
    };
    return (
        <div className='quiz-container'>
            <div className='card-container'>
                <h1>Quiz App</h1>
                {QuizData.quizData.map((item, index) => {
                    return (
                        <div className='list-question'>
                            <ul>
                                <li>{item.question}</li>
                                {item.options.map((option, ind) => {
                                    return (
                                        <div>
                                            {/* <ul>
                                                <li>{option}</li>
                                            </ul> */}
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="options"
                                                    value="option3"
                                                checked={selectedOption === 'option3'}
                                                onChange={handleRadioChange}
                                                />
                                                {option}
                                            </label>
                                        </div>
                                    );
                                })}
                            </ul>
                            <button>Submit</button>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default QuizComp;
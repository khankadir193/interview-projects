import React, { useState } from 'react';
import './QuizApp.css';
import QuizData from './quizData.json';
import QuizQuestions from './QuizQuestions';

const QuizComp = () => {
    const [submit, setSubmit] = useState([]);
    const [quizData, setQuizData] = useState([QuizData.quizData[0]]);
    // console.log('quiz-data...', QuizData.quizData);

    const handleSubmit = (option) => {
        if (QuizData.quizData.length - 1 === submit?.length) {
            alert('Quiz Completed');
            setQuizData([QuizData.quizData[0]]);
            return
        } else {
            setQuizData([QuizData.quizData[submit.length + 1]]);
            setSubmit([...submit, option]);
        }
    };


    return (
        <div className='quiz-container'>
            <div className='card-container'>
                <h1>Quiz App</h1>
                {quizData.map((item, index) => {
                    return (
                        <div id={index}>
                            <QuizQuestions
                                item={item}
                                onSubmit={handleSubmit}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default QuizComp;
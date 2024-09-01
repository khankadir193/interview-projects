import React, { useState } from 'react';
import './QuizApp.css';
import QuizData from './quizData.json';
import QuizQuestions from './QuizQuestions';

const QuizComp = () => {
    const [submit,setSubmit] = useState();
    // console.log('quiz-data...', QuizData.quizData);

    const handleSubmit = ()=>{
        console.log('handleSumbit method.....');
    }


    return (
        <div className='quiz-container'>
            <div className='card-container'>
                <h1>Quiz App</h1>
                {QuizData.quizData.map((item, index) => {
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
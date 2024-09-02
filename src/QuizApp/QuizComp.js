import React, { useState } from 'react';
import './QuizApp.css';
import QuizData from './quizData.json';
import QuizQuestions from './QuizQuestions';

const QuizComp = () => {
    const [submit, setSubmit] = useState([]);
    const [quizData, setQuizData] = useState([QuizData.quizData[0]]);
    const [submitData, setSubmitData] = useState([]); // true or false
    const [rightQues,setRightQues] = useState(0);
    // console.log('quiz-data...', QuizData.quizData);

    const questionEvaluate = (option) => {
        if (option === QuizData.quizData[submit.length].correctAnswer) {
            return true;
        } else {
            return false;
        }
    };

    const handleSubmit = (option) => {
        if (QuizData.quizData.length - 1 === submit?.length) {
            alert('Quiz Completed');
            setQuizData([QuizData.quizData[0]]);
            setSubmit([]);
            const totalRightQuestons = submitData.filter(x => x).length;
            setRightQues(totalRightQuestons);
            console.log('totalRightQuestons...',totalRightQuestons);
            return
        } else {
            setQuizData([QuizData.quizData[submit.length + 1]]);
            setSubmit([...submit, option]);
            const queRes = questionEvaluate(option);
            // submitData.push(...queRes);
            setSubmitData([...submitData, queRes]);
            console.log('submitData...',submitData);
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
                })};
                {rightQues ? <h2>Right Answers: {rightQues}</h2> : null}
            </div>
        </div>
    )
}

export default QuizComp;
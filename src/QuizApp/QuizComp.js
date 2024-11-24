import React, { useEffect, useState } from 'react';
import './QuizApp.css';
import QuizData from './quizData.json';
import QuizQuestions from './QuizQuestions';

const QuizComp = () => {
    const [submit, setSubmit] = useState([]);
    const [quizData, setQuizData] = useState([QuizData.quizData[0]]);
    const [submitData, setSubmitData] = useState([]); // true or false
    const [rightQues, setRightQues] = useState(0);
    // console.log('quiz-data...', QuizData.quizData);

    const questionEvaluate = (option) => {
        if (option === QuizData.quizData[submit.length].correctAnswer) {
            return true;
        } else {
            return false;
        }
    };

    const handleQuizCompleted = async () => {
        // Calculate total correct answers
        console.log('Submit Data:', submitData);
        const totalCorrectQuestions = submitData.filter(Boolean).length;

        // alert('Quiz Completed');
        setRightQues(totalCorrectQuestions); // Update the state for correct questions
        setQuizData([QuizData.quizData[0]]); // Reset to the first question
        setSubmit([]); // Reset submitted answers
        setSubmitData([]); // Reset submit data

        console.log('Total Correct Questions:', totalCorrectQuestions);
        alert('Quiz Completed');
    };

    const handleSubmit = async (option) => {
        const isQuizCompleted = QuizData.quizData.length - 1 === submit.length;
        console.log("isQuizCompleted", isQuizCompleted);

        if (isQuizCompleted) {
            const isAnswerCorrect = questionEvaluate(option); // Evaluate the submitted answer
            // Update submit state
            setSubmit((prevSubmit) => [...prevSubmit, option]);

            // Update submitData state
            setSubmitData((prevSubmitData) => [...prevSubmitData, isAnswerCorrect]);

            // Handle quiz completion
            await handleQuizCompleted();
            return;
        }


        // Handle the next question
        const nextQuestionIndex = submit.length + 1;
        const isAnswerCorrect = questionEvaluate(option); // Evaluate the submitted answer

        // Update states for quiz progression
        setQuizData([QuizData.quizData[nextQuestionIndex]]);
        setSubmit([...submit, option]);
        setSubmitData([...submitData, isAnswerCorrect]);

        console.log('Updated Submit Data:', [...submitData, isAnswerCorrect]);
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
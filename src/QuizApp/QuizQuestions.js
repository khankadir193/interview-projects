import React,{useState} from 'react';
import './QuizApp.css';

const QuizQuestions = ({ item, onSubmit}) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleRadioChange = (e) => {
        console.log('handleRadioChange..',e.target);
        setSelectedOption(e.target.value);
    };

    const handleClick = (event) => {
        if(selectedOption){
            onSubmit(selectedOption);
        }else{
            alert('Please select option....?');
        }
        // console.log('selected option....', setSelectedOption);
    };

    return (
        <div className='list-question'>
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
                                    onChange={handleRadioChange}
                                />
                                {option}
                            </label>
                        </div>
                    );
                })}
            </ul>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}
    ;
export default QuizQuestions;
import react, { useState } from 'react';
import './guessStyle.css';

// https://namastedev.com/practice/guess-the-number

const GuessComponent = () => {
    const [nums, setNums] = useState(0);
    const [isFlag, setIsFlag] = useState(false);
    const [randomValue,setRandomValue] = useState(Math.floor(Math.random() * 100));
    const [counter, setCounter] = useState(0);

    const handleChange = (e) => {
        setNums(e.target.value);
    };

    const handleGuess = () => {
        console.log('randValueFromHooks', randomValue);
        if (nums < 100 && nums > 0) {
            if (Number(nums) === Number(randomValue)) {
                // alert('data has been matched..');
                setIsFlag(true);
                setCounter((prev) => prev + 1)
            } else {
                setIsFlag(false);
                setCounter((prev) => prev + 1)
            }
        } else {
            setIsFlag(false)
            setCounter((prev) => prev + 1);
        };

        // console.log('this code has been prompted show we need to ')
    };

    const handleReset = () => {
        setCounter(0);
        setRandomValue(Math.floor(Math.random() * 100));
        setNums(0);
        setIsFlag(false);
    };

    return (
        <div className='guess-container'>
            <h1>Guess The Number</h1>
            <input type='text' placeholder='Enter number between 1 and 100' onChange={handleChange} />
            <div className='guess-btn'>
                <button onClick={handleGuess}>Check Guess</button>
                <button onClick={handleReset}>ResetGame</button>
            </div>
            {
                isFlag ?
                    <p>Congratulations You have been matched {counter} attempts.</p>
                    :
                    <p>value is not matched</p>
            }
        </div>
    )

};

export default GuessComponent;
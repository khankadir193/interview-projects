import react, { useState } from 'react';
import './guessStyle.css';

// https://namastedev.com/practice/guess-the-number

const GuessComponent = () => {
    const [nums,setNums] = useState(0);
    const [isFlag , setIsFlag] = useState(false);
    const [randomValue] = useState(Math.floor(Math.random() * 100));

    const handleChange = (e) => {
        setNums(e.target.value);
    };

    const handleGuess = () => {
        // console.log('Maht randome values...',Math.floor(Math.random() * 100));
        console.log('randValueFromHooks',randomValue);
        console.log('numsValue...',nums);
        if(nums < 100 && nums > 0){
            console.log('this value is true..');
            if(Number(nums) === Number(randomValue)){
                console.log('this value is also is true...');
                alert('data has been matched..');
                setIsFlag(true);
            }else{
                setIsFlag(false);
            }
        }else{
            setIsFlag(false)
        }
    };

    const handleReset = () => {

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
                isFlag ? <p>Value is too high</p> : <p>value is not matched</p>
            }
        </div>
    )

};

export default GuessComponent;
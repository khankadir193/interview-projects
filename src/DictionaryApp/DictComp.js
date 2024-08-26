import React, { useEffect, useState } from 'react';
import ApiComp from '../ApiCall/ApiComp';
import './Dictionary.css';
const DictComp = () => {
    const [api, setApi] = useState();
    const [inputValue, setInputValue] = useState();

    const fetchData = async (txt) => {
        console.log('inputValue...', inputValue.target.value);
        const response = await ApiComp(`https://api.dictionaryapi.dev/api/v2/entries/en/${txt}`);
        setApi(response)
        console.log('response...???', response);
    }


    return (
        <div className='dict-container'>
            <input type='text' placeholder='enter your vocab' onChange={setInputValue} />
            <button onClick={() => fetchData(inputValue.target.value)}>Dictionary</button>
            {/* <h2>{JSON.stringify(api,12,null)}</h2> */}
        </div>
    );
};

export default DictComp;
import React, { useEffect, useState } from 'react';
import ApiComp from '../ApiCall/ApiComp';
import './Dictionary.css';
const DictComp = () => {
    const [api, setApi] = useState();
    const [inputValue, setInputValue] = useState();
    const [definition, setDefinition] = useState([]);

    const fetchData = async (txt) => {
        const response = await ApiComp(`https://api.dictionaryapi.dev/api/v2/entries/en/${txt}`);
        setApi(response);
        setDefinition(response.length ? response[0].meanings[0].definitions : [{ definition: response.message }]); 
    }


    return (
        <>
            <div className='dict-container'>
                <input type='text' placeholder='enter your vocab' onChange={setInputValue} />
                <button onClick={() => fetchData(inputValue.target.value)}>Dictionary</button>
            </div>
            <div className='def-container'>
                {definition?.map((item, index) => {
                    console.log('item...', item);
                    const lines = item.definition.split('\n');
                    console.log('lines...', lines);
                    return (
                        <div key={index}>
                            {lines.map((line, lineIndex) => (
                                <p key={lineIndex} className='def-content'>{index + 1}.{lineIndex + 1}. {line}</p>
                            ))}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default DictComp;
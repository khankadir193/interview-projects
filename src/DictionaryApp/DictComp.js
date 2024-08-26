import React, { useEffect, useState } from 'react';
import ApiComp from '../ApiCall/ApiComp';
import './Dictionary.css';
const DictComp = () => {
    const [api, setApi] = useState();
    const [inputValue, setInputValue] = useState();
    const [definition, setDefinition] = useState([]);

    const fetchData = async (txt) => {
        console.log('inputValue...', inputValue.target.value[0]);
        const response = await ApiComp(`https://api.dictionaryapi.dev/api/v2/entries/en/${txt}`);
        setApi(response);
        setDefinition(response.length ? response[0].meanings[0].definitions : [{definition:'getting error'}]);
        // console.log('response...???', response[0].meanings[0].definitions[0].definition);
        // const def1 = response[0].meanings[0].definitions[0].definition; 
        // const def2 = response[0].meanings[0].definitions[0].definition; 
        // const def3 = response[0].meanings[0].definitions[0].definition; 
        // const newObj = {
        //    firstDefinition:def1, 
        //    firstDefinition:def2, 
        //    firstDefinition:def3, 
        // }
        

    }


    return (
        <div className='dict-container'>
            <input type='text' placeholder='enter your vocab' onChange={setInputValue} />
            <button onClick={() => fetchData(inputValue.target.value)}>Dictionary</button>
            {definition?.map((item) => {
                return (
                    <>
                        <h2>{item?.definition}</h2>
                    </>
                )
            })}
            {/* <h2>{JSON.stringify(api,12,null)}</h2> */}
        </div>
    );
};

export default DictComp;
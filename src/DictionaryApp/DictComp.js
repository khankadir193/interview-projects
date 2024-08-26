import React, { useEffect, useState } from 'react';
import ApiComp from '../ApiCall/ApiComp';
const DictComp = () => {
    const [api,setApi] = useState();

    useEffect(() => {
        const fetchData = async (txt) => {
            const response = await ApiComp(`https://api.dictionaryapi.dev/api/v2/entries/en/${txt}`);
            setApi(response)
            console.log('response...???',response);
        }
        fetchData('synthetic');

    }, [0]);

    return (
        <div>
            <h2>{JSON.stringify(api,12,null)}</h2>
        </div>
    );
};

export default DictComp;
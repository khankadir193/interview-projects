import React, { useEffect } from 'react'

const DebounceComponent = () => {

    const debounce = (func,delay)=>{
        let timerId;

        return (...args)=>{
            clearTimeout(timerId);

            timerId = setTimeout(()=>{
                func.apply(this,args);
            });
        };
    };


    const handleMessage = (message)=>{
        console.log('console message',message);
    };

    const debouncExample = debounce(handleMessage,1000);



    return (
        <div>
            {debouncExample('10001')}
            {debouncExample('khankadir')}
            {debouncExample('abdul jabir khan')}
            {debouncExample('abdullah')}
            {debouncExample('areeb')}
        </div>
    );
}

export default DebounceComponent
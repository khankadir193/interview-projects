import { useEffect, useState } from "react";

const TimeComp = () => {
    const [time, setTime] = useState(() => {
        const time = new Date();
        return { hour: time.getHours(), minute: time.getMinutes(), second: time.getSeconds() };
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const time = new Date();
            setTime({ hour: time.getHours(), minute: time.getMinutes(), second: time.getSeconds() });
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <h2>Digital Time</h2>
            <p>Time:{time.hour}:{time.minute}:{time.second}</p>
            {/* <p> Time:
                {String(time.hour).padStart(2, "0")}:
                {String(time.minute).padStart(2, "0")}:
                {String(time.second).padStart(2, "0")}
            </p> */}
        </>
    );
};
export default TimeComp;
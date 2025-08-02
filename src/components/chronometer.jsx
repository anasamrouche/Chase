import { useState, useEffect } from 'react';

export default function Chronometer(props) {
    const {reset, setReset} = props;
    const [performances] = useState([]);
    const [time, setTime] = useState(new Date);
    const [secondTime, setSecondTime] = useState(0);
    
    useEffect(() => {
        const launch = setInterval(() => {
            setSecondTime(new Date),
            1});
        if (reset) {
            performances.push((secondTime - time)/1000);
            setTime(new Date);
            setReset(false);
        }
        return () => clearInterval(launch);
        }, [reset]);
        
        
        return (
            <>
                <p>Time = {(secondTime - time)/1000}</p>
                <br/>
                {performances.map((t, id) => <p key={id}>{t}, </p>)};
            </>
        );
}
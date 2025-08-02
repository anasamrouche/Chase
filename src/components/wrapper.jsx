import { useState } from 'react';
import Chronometer from './chronometer';
import Button from './button';


export default function Wrapper() {
    const [count, setCount] = useState(0);
    const [reset, setReset] = useState(false);
    
    const [active, setActive] = useState(undefined);
    
    return (
        <>
            <Button active={active} setActive={setActive} count={count} setCount={setCount} setReset={setReset} />
            <Chronometer reset={reset} setReset={setReset} />
        </>
    )
}
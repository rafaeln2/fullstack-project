import React, { useState } from 'react';
export const SimpleCounter = () => {    
    const [count, setCount] = useState(0);
    console.log('Render phase: Component rendering count: ', count);

    const newLocal = () => {        
        setCount(count + 1);
        console.log('after set count + 1 is changed: ', count);        
        setCount(count + 5);
        console.log('after set count + 5 is changed: ', count);
        setCount(count + 10);
        console.log('after set count + 10 is changed: ', count);
    }
    return (<div>
        <h2>Simple Counter: {count}</h2>
        <button onClick={newLocal}>Increment</button>
    </div>)
}
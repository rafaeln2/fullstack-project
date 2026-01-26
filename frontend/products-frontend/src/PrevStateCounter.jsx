import React, { useState } from 'react';
export const PrevStateCounter = () => {    
    const [count, setCount] = useState(0);
    console.log('Render phase: Component rendering count: ', count);

    const newLocal = () => {        
        setCount((prev) => {
            console.log('first update fn: prev count = ', prev);
            return prev + 1
            
        });
        // console.log('after setcount (prev+1) is changed: ', count);        
        setCount((prev) => {
            console.log('second update fn: prev count = ', prev);
            return prev + 5
        });
        // console.log('after setcount (prev+5) is changed: ', count);
        setCount((prev) => {
            console.log('third update fn: prev count = ', prev);
            return prev + 10
        });
        // console.log('after setcount (prev+10) is changed: ', count);
    }
    return (<div>
        <h2>Prev State Counter: {count}</h2>
        <button onClick={newLocal}>Increment</button>
    </div>)
}
import React, { useState } from 'react';
export const BatchingCounter = () => {    
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [isActive, setIsActive] = useState(false);
    console.log('Render phase: Component rendering');

    const newLocal = () => {        
        setCount((prev) => {
            console.log('first update fn: prev count = ', prev);
            return prev + 1
            
        });
        
        setCount((prev) => {
            console.log('second update fn: prev count = ', prev);
            return prev + 5
        });
        
        setCount((prev) => {
            console.log('third update fn: prev count = ', prev);
            return prev + 10
        });

        setName("Updated")
        setIsActive(true)
        
    }
    return (<div>
        <h2>Batching counter: {count}</h2>
        <p>Name: {name}</p>
        <p>Is Active: {isActive ? 'true' : 'false'}</p>
        <button onClick={newLocal}>update all 3</button>
    </div>)
}
import { useState } from "react"
export const Counter = () => {
    
    // UseState começa a controlar o estado em memoria do componente. O 0 é o valor inicial, count é a variavel e setCount altera o count
    const [count, setCount] = useState(() => {console.log("Inital count started: ", 0); return 0;})
    console.log("Counter componente rendered: ", count)
    const handleClick = () => {
        setCount(count + 1)
    }
    return <button onClick={handleClick} >Count: {count}</button>
}
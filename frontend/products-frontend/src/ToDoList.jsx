import { useState } from "react"

export const ToDoList = () => {
    const [items, setItems] = useState([{
        id:1, text:"Learn React", done: false}, 
        {id:2, text:"Learn Node", done: false},
    ]);
    console.log("Rendering items: ", items)

    const addItem = () => {
        const newItem = {id: Date.now(), text: "New item", done: false}
        setItems(prev => [...prev, newItem])
    }

    const removeItem = (id) => {
        setItems(prev => prev.filter(item => item.id !== id))
    }

    const toggleDone = (id) => {
        setItems(prev => prev.map(item => item.id === id ? {...item, done: !item.done} : item))
    }
    return (
        <div>
            <ul>
                {items.map((item) => {
                    return <li key={item.id}>
                        <span style={{textDecoration: item.done ? "line-through" : "none"}}>{item.text}</span>
                        <button onClick={() => removeItem(item.id)}>Delete</button>
                        <button onClick={() => toggleDone(item.id)}>{item.done ? "Undo" : "Done"}</button>
                    </li>
                    })
                }
            </ul> 
            <button onClick={addItem}>Add item</button>
        </div>
    )    
}
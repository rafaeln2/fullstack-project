import { useState } from "react"
export const NewUserCard = () => {
    const [user, setUser] = useState({
        name: "Rafael",
        age: 25,
        email: "rafael@gmail.com",
        address:{
            street: "Rua do pao",
            city: "São Paulo",
        }
    })

    const updateName = () => {
        setUser({
            ...user,
            name: "Joao",
        })
    }
    
    const updateAge = () => {
        setUser(prev => ({
            ...prev,
            age: prev.age + 1,
        }))
    }
    const updateCity = () => {
        setUser(prev => ({
            ...prev,
            address: {
                ...prev.address,
                city: "Rio de Janeiro",
            }
        }))
    }

    return (
        <div>
            <h2>UserName = {user.name}</h2>
            <p>User Age = {user.age}</p>
            <p>User Email = {user.email}</p>
            <p>City = {user.address.city}</p>
            <p>Street = {user.address.street}</p>
            <button onClick={updateName}>Change Name</button>
            <button onClick={updateAge}>Increase age by 1</button>
            <button onClick={updateCity}>Change city</button>
        </div>
    )
}
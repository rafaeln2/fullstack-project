import { useState } from "react"
export const LoginCard = () => {
    const[isLoggedIn, setIsLoggedIn] = useState(false)
    const [message, setMessage] = useState("")
    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn)
    }
    const handleChange = (e) => {
        setMessage(e.target.value)
    }
    return (
        <>
            <button onClick={handleLogin}>{isLoggedIn ? "Logged in" : "Log out"}</button>
            <div>
                <input 
                    type="text" 
                    placeholder="Type a message" 
                    value={message} 
                    onChange = {handleChange}/>
                <p>{message}</p>
            </div>
        </>
    )
}
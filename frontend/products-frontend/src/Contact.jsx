import { ActionButton } from "./ActionButton"

export const Contact = () => {
    const handleSendMessage = (e) => {
        alert('Message sent!')
    }
    return (
        <div>
            <h2>Contact us</h2>
            <ActionButton text="Call us" onClick={handleSendMessage} />
        </div>
    )
}
export const UserDetails = ({name, isOnline}) => {
    return (
    <div>
        <p>Name: {name}</p>
        <p>Status: {isOnline ? "Online" : "Offline"}</p>
    </div>
    ) 
}
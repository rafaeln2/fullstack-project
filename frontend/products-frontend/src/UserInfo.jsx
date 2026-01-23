export const UserInfo = ({name, age, city, email}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Age: {age}</p>
            <p>City: {city}</p>
        </div>
    )    
}
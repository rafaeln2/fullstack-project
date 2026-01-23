
export const CandidateProfile = () => {
    let listRoles = ["Frontend Developer", "Backend Developer", "Fullstack Developer", "DevOps Engineer"];
    let name = "Rafael's profile";
    return (
        <>
            <h1>{name}</h1>            
            <p>This is the candidate profile page.</p>
            <ul>
                {listRoles.map((role, index) => (
                    <li key={index}>{role}</li>
                ))}
            </ul>
        </>
    )    
}
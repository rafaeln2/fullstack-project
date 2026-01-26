export const UserDashboard = ({isPremium}) => {
    
    const [credits, setCredits] = useState(100);
    if (!isPremium) {
        return <div>You are not premium</div>
    }
    return (
    <div>
        Credits {credits}
    </div>
    )
}
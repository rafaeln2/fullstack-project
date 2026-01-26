export const NameList = () => {
    const names = ['Rafael', 'Joao', 'Maria', 'Ana']
    const nameList = names.map((name, index) => <li key={index}>{name}</li>)
    return <ul>{nameList}</ul>
}
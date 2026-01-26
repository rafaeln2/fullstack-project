export const CustomButton = ({text}) => {
    const name = "BotaoRafael"
    const handleClick = (e) => {
        e.preventDefault();
        console.log('Custom Button Clicked', e.target);
        console.log('Custom Button Clicked', e.currentTarget);
        console.log('Custom Button Clicked', e.clientX, e.clientY);           
    }


    return <button onClick={handleClick}>{text}</button>
}
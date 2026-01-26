import { MenuItem } from './MenuItem'
export const Menu = () => {
    const handleOrder = (itemName, itemPrice) => {
        alert(`You ordered: ${itemName} for $${itemPrice}`)
    }
    return (
        <div>
            <h2>Menu</h2>
            <MenuItem name="Notebook" price={1000} onOrder={handleOrder} />
            <MenuItem name="PS4" price={2465} onOrder={handleOrder} />
        </div>
    )
}
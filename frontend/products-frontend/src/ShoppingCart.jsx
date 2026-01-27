import { useState } from "react";
export const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState({
        reactCourse : 0,
        vueCourse : 0
    });

    const prices = {
        reactCourse : 49.99,
        vueCourse : 20.15
    }
    const handleAddReactCourse =() => {
        if( cartItems.reactCourse < 5){
            setCartItems({...cartItems, reactCourse : cartItems.reactCourse + 1})
        }        
    }
    const handleAddVueCourse = () => {
        setCartItems({...cartItems, vueCourse : cartItems.vueCourse + 1})
    }
    const handleClearCart = () => {
        setCartItems({reactCourse : 0, vueCourse : 0})
    }
    return (
        <div className="shopping-card">
            <ProductCart cartItems = {cartItems}
                name = "ReactCourse"
                price = {prices.reactCourse}
                quantity = {cartItems.reactCourse}
                onAddReactCourse = {() => handleAddReactCourse()} onAddCourse = {() => handleAddReactCourse()} />
            <ProductCart cartItems = {cartItems}
                name = "VueCourse"
                price = {prices.vueCourse}
                quantity = {cartItems.vueCourse}
                onAddReactCourse = {() => handleAddReactCourse()} onAddCourse = {() => handleAddVueCourse()} />
            <CartSummary cartItems = {cartItems} prices = {prices} handleClearCart={() => handleClearCart()} />
        </div>
    );
};
export const ProductCart = ({name, price, quantity, onAddCourse, }) => {
    return (
    <div> 
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
            <p>Quantity : {quantity}</p>
            <button onClick={onAddCourse}>Add Course</button>
            
        </div>
    </div>
    );
};

export const CartSummary = ({cartItems, prices, handleClearCart}) => {
    let totalItems = cartItems.reactCourse + cartItems.vueCourse
    let totalPrice = cartItems.reactCourse * prices.reactCourse + cartItems.vueCourse * prices.vueCourse
    return (
        <div className="card-summary">
            <h3>Card Summary</h3>
            <p>total items: {totalItems}</p>
            <p>total price: {totalPrice}</p>
            <button onClick={handleClearCart}>Clear Cart</button>
        </div>
    );
}
export const ProductList = ({products}) => {
    const productsElements = products
    .filter(product => product.price > 1500)
    .map((product) => {
        return (
            <div key={product.id}>
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
            </div>
        )
    })

    return (
        <div>
            <h2>OUR ITEMS</h2>
        {
           productsElements 
        }
        </div>
    )
}
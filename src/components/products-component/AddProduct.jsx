
export default function AddToCart({product, addToCart}) {
    // console.log(addToCart)
    // console.log(product)
    return(
        <button className="product-card-button" onClick={() => addToCart(product) }>Agregar al carrito</button>
    )
}
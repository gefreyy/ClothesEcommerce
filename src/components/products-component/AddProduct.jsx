export default function AddToCart({product, addToCart, setIsModalOpen}) {
    // console.log(addToCart)
    // console.log(product)
    return(
        <button className="product-card-button" onClick={() => {addToCart(product); setIsModalOpen(false);} }>Agregar al carrito</button>
    )
}
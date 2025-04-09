import AddToCart from "./AddProduct";

export default function ProductCard({products, onOpenedModal}) {
    return (
        <div className="products-card-container">
            { products.map((product, index) => (
                <a href="#"  key={index} onClick={() => onOpenedModal(product.id)} >
                    <article className="product-card">
                        <img src={product.imgProduct} alt={product.name} className="product-card-image" />
                        <div className="product-card-info">
                            <h3 className="product-card-name">{product.name}</h3>
                            <p className="product-card-price">Precio: S/{product.price.toFixed(2)}</p>
                            <AddToCart />
                        </div>
                    </article>
                </a>
            ))}
        </div>
    )
}
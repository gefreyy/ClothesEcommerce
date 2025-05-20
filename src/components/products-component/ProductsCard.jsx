import AddToCart from "./AddProduct";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";

export default function ProductCard({
    listProducts,
    onOpenedModal,
    noProducts,
    setModalInfo,
}) {
    // console.log(listProducts)
    return (
        <div className="products-card-container">
            { listProducts.map((product, index) => (
                <article className="product-card" key={index} onClick={() => [setModalInfo(product), onOpenedModal(true)]}>
                    <div className="general-info-product-card">
                        <img src={product.imgProduct} alt={product.name} className="product-card-image" />
                        <div className="product-card-info">
                            <h3 className="product-card-name">{product.name}</h3>
                            <p className="product-card-price">Precio: S/{product.price}</p>
                        </div>
                        <button className="product-card-button">Ver Producto</button>
                    </div>
                </article>
            ))}
            <div className={noProducts ? "no-products show" : "no-products hide"}>
                <h1>No hay productos que mostrar!</h1>
            </div>
        </div>
    )
}
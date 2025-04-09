import AddToCart from "./AddProduct";

export default function ModalProduct({product, isModalOpened, closeModal}) {
    return(
        <div className={`modal-product-dialog ${isModalOpened ? 'show' : 'hide'}`}>
            <div className="modal-product">
                <div className="modal-img-container">
                    <img src={product.imgProduct} alt="product-image" />
                </div>
                <div className="modal-info-container">
                    <h1>{product.name}</h1>
                    <h3>Precio: {product.price !== undefined ? product.price.toFixed(2) : product.price}</h3>
                    <p>{product.desc}</p>
                    <AddToCart />
                    <button className="close-btn" onClick={closeModal}>×</button>
                </div>
            </div>
        </div>
    )
}
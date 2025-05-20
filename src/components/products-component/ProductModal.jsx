import AddToCart from "./AddProduct";
import StarRating from "./StarRating";
import { CartContext } from "../../context/CartContext.jsx";
import { useContext } from "react";

export default function ModalProduct({modalInfo, isModalOpened, closeModal}) {
    const {addToCart, setSelectedSize, setSelectedColor} = useContext(CartContext);
    
    return(
        <div className={`modal-product-dialog ${isModalOpened ? 'show' : 'hide'}`}>
            <div className="modal-product">
                <div className="modal-img-container">
                    <img src={modalInfo.imgProduct} alt="product-image" />
                </div>
                <div className="modal-info-container">
                    <div className="text-container">
                        <div className="title-and-brand">
                            <h1>{modalInfo.name}</h1>
                            {modalInfo.brand !== undefined ? <h2>{modalInfo.brand.name} | {modalInfo.category.name}</h2> : null}
                        </div>
                        <div className="rating-container">
                            <p>3.6</p>
                            <StarRating />
                        </div>
                        <div className="stock-and-price-container">
                            <h3>Precio: <strong>S/{modalInfo.price !== undefined ? modalInfo.price : modalInfo.price}</strong></h3>
                            <h3>Stock: {modalInfo.stock}</h3>
                        </div>                       
                        <p>{modalInfo.desc}</p>
                    </div>
                    <div className="size-and-color-general-container">
                        <div className="size-container">
                            <p>Tallas: <strong>Seleccione una talla</strong></p>
                            {modalInfo.sizes !== undefined ? 
                                modalInfo.sizes.map((size, index) => (
                                    <button className="size-btn" key={index} onClick={() => setSelectedSize(size.name)}><strong>{size.name}</strong></button>
                                )) : null}
                        </div>
                        <div className="color-container">
                            <p>Colores: <strong>Seleccione un color</strong></p>
                            {modalInfo.colors !== undefined ? 
                                modalInfo.colors.map((color, index) => (
                                    <button className="color-btn" key={index} onClick={() => setSelectedColor(color.hex)} style={{backgroundColor: color.hex}}></button>
                                )) : null}
                        </div>                    
                    </div>
                    <AddToCart product={modalInfo} addToCart={addToCart}/>
                    <button className="close-btn" onClick={closeModal}>×</button>
                </div>
            </div>
        </div>
    )
}
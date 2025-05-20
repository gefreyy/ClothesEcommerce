import './CartBody.css'
import { useNavigate } from 'react-router-dom'
import CartItem from './CartItem.jsx'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../context/CartContext.jsx'
import ModalProduct from '../products-component/ProductModal.jsx'

export default function CartBody() {
    const navigate = useNavigate()

    const { cartItems, increaseQuantity, decreaseQuantity, deleteItem, clearCart } = useContext(CartContext) // El nombre cartItems es el nombre que le damos a la variable que contiene el array de productos en CartContext
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState([]);
    
    let totalItems = cartItems.length;
    let totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    let closeModal = () => {
        setIsModalOpen(false)
    }

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? "hidden" : "auto"
    }, [isModalOpen])

    return (
        <main id="cart-body">
            <div className="cart-body-top">
                <div className="title-cart">
                    <h1>Productos en el carrito</h1>
                    <p>Cantidad visible en lista: {totalItems}</p>
                </div>
                <div className="actions-cart">
                    <button className="vaciar-btn" onClick={clearCart}>Vaciar carrito</button>
                    <button onClick={() => navigate('/products')} className="continuar-btn">Continuar comprando →</button>
                </div>
            </div>
            <hr className='separator' style={{margin: '1rem'}}/>
            <section className="general-info-cart-section">
                <CartItem
                    increaseQuantity={increaseQuantity} 
                    decreaseQuantity={decreaseQuantity} 
                    deleteItem={deleteItem}
                    product={cartItems}
                    setModalInfo={setModalInfo}
                    onOpenedModal={setIsModalOpen}
                />
                <ModalProduct
                    closeModal={closeModal}
                    isModalOpened={isModalOpen}
                    modalInfo={modalInfo}
                />
                <div className="price-container">
                    <p>Total: S/{totalPrice.toFixed(2)}</p>
                    <button>Comprar</button>
                </div>
            </section>
        </main>
    )
}
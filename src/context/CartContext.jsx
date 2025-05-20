import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    // Para poder usar estos contextos en cualquier componente, debemos usar el provider
    // Tienen que ser de tipo const para que puedan ser llamados.
    const [cartItems, setCartItems] = useState([]);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    const addToCart = (product) => {
        const updateProduct = {...product, size: selectedSize || null, color: selectedColor || null, quantity: product.quantity || 1}
        setCartItems([...cartItems, updateProduct]);
    }

    const increaseQuantity = (id) => {
        const updateCart = [...cartItems];
        updateCart[id].quantity++;
        setCartItems(updateCart);
    }

    const decreaseQuantity = (id) => {
        const updateCart = [...cartItems];
        if(updateCart[id].quantity > 1) {
            updateCart[id].quantity--;
            setCartItems(updateCart);
        }
    }

    const deleteItem = (id) => {
        const updateCart = [...cartItems];
        updateCart.splice(id, 1);
        setCartItems(updateCart);
    }

    const clearCart = () => {
        setCartItems([]);
    }

    useEffect(() => {
        const storedCart = localStorage.getItem('cartItems');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    return(
        <CartContext.Provider value={{
            cartItems, addToCart, increaseQuantity, deleteItem, decreaseQuantity, clearCart,
            selectedSize, setSelectedSize, selectedColor, setSelectedColor
        }}>
            {children}
        </CartContext.Provider>
    )
}
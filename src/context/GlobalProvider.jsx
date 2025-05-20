import { CartProvider } from "./CartContext.jsx";

export default function GlobalProvider({children}) {
    return(
        <CartProvider>
            {children}
        </CartProvider>
    )
}
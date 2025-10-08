import { ApiProvider } from "./ApiContext.jsx";
import { CartProvider } from "./CartContext.jsx";

export default function GlobalProvider({children}) {
    return(
        <ApiProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </ApiProvider>
    )
}
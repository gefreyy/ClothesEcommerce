import Header from "../components/layout/Header.jsx"
import ProductBody from "../components/products-component/ProductBody.jsx"
import Footer from "../components/layout/Footer.jsx"
import { useState } from "react"

export default function Products() {
    const [searchValue, setSearchValue] = useState('')
    return (
        <main>
            <Header setSearchTerm={setSearchValue}/> {/* TODO: ESTE HACE QUE SE ROMPA EN PANTALLAS PEQUEÑAS */}
            <ProductBody search={searchValue}/>
            <Footer /> {/* TODO: ESTE HACE QUE SE ROMPA EN PANTALLAS PEQUEÑAS */}
        </main>
    )
}
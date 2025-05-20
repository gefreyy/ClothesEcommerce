import Header from "../components/layout/Header.jsx"
import ProductBody from "../components/products-component/ProductBody.jsx"
import Footer from "../components/layout/Footer.jsx"
import { useState } from "react"

export default function Products() {
    const [searchValue, setSearchValue] = useState('')

    const search = (value) => {
        setSearchValue(value)
    }

    return (
        <main>
            <Header search={search}/>
            <ProductBody search={searchValue} />
            <Footer />
        </main>
    )
}
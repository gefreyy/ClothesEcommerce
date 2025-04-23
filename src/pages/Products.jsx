import Header from "../components/layout/Header.jsx"
import ProductBody from "../components/products-component/ProductBody.jsx"
import Footer from "../components/layout/Footer.jsx"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export default function Products() {
    const [searchValue, setSearchValue] = useState('')
    const location = useLocation();

    useEffect(() => {
        const searchParam = new URLSearchParams(location.search)
        const queryParam = searchParam.get('q') || ''
        setSearchValue(queryParam)
    }, [location.search])

    return (
        <main>
            <Header setSearchTerm={setSearchValue}/>
            <ProductBody search={searchValue}/>
            <Footer />
        </main>
    )
}
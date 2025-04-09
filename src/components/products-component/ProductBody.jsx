import ProductFilters from "./ProductsFilter.jsx"
import ProductCard from "./ProductsCard.jsx"
import "./ProductBody.css"
import Pagination from "./ProductsPagination.jsx"
import { useEffect, useRef, useState } from "react"
import ModalProduct from "./ProductModal.jsx"

export default function ProductsBody() {
    const products = [
        {
            id: 1,
            imgProduct: 'https://images.unsplash.com/photo-1716951735063-3d60c2c288e4?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Polo del algodón',
            price: 39.90,
            desc: 'Polo suave al tacto, hecho 100% de algodón ideal para looks frescos y casuales.',
            category: 'Polos',
            tag: ['minimalista']
        },
        {
            id: 2,
            imgProduct: 'https://images.unsplash.com/photo-1623052760790-9605a8579730?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Blusa',
            desc: 'Blusa ligera y elegante, perfecta para complementar tu outfit con estilo y comodidad.',
            price: 45.90,
            category: 'Blusas',
            tag: ['tops']
        },
        {
            id: 3,
            imgProduct: 'https://images.unsplash.com/photo-1661110546797-d86cc72a2765?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Polo oversize',
            desc: 'Estilo urbano y cómodo con este polo oversize que marca tendencia.',
            price: 49.20,
            category: 'Polos',
            tag: ['oversize', 'urbano']
        },
        {
            id: 4,
            imgProduct: 'https://images.unsplash.com/photo-1714143136385-c449be6760f6?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Jean',
            desc: 'Jean clásico de corte recto, ideal para cualquier ocasión y combinable con todo.',
            price: 89.90,
            category: 'Pantalones',
            tag: ['clásico']
        },
        {
            id: 5,
            imgProduct: 'https://images.unsplash.com/photo-1735251186841-2ed286f02990?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Sudadera',
            desc: 'Sudadera con diseño minimalista y tela abrigadora, perfecta para días fríos.',
            price: 99.90,
            category: 'Sudaderas',
            tag: ['minimalista']
        }
    ];

    const categories = [
        { id: 1, name: 'Polos' },
        { id: 2, name: 'Blusas'},
        { id: 3, name: 'Camisas' },
        { id: 4, name: 'Pantalones' },
        { id: 5, name: 'Sudaderas' }
    ]

    const [selectedCategories, setSelectedCategories] = useState([]); // selectedCategories = [] ; setSelectedCategories()
    const [price, setPrice] = useState(249); // price = 249 ; setPrice()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState([])

    const openModal = (product) => {
        setIsModalOpen(true)
        selectProduct(product)
    }

    const closeModdal = () => {
        setIsModalOpen(false)
        setSelectedProduct([])
    }

    const selectProduct = (id) =>{
        const idProduct = products.find((product) => {
            return id === product.id ? product : null
        })
        setSelectedProduct(idProduct);
    }

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? "hidden" : "auto"
        document.body.style.paddingRight = isModalOpen ? "15px" : "0px"
    }, [isModalOpen])

    // Esta función es para manejar el cambio de categoría
    const handleCategoryChange = (name, checked) => {
        setSelectedCategories(prev =>
            checked ? [...prev, name] : prev.filter(cat => cat !== name) // ...prev obtiene l
        )
    };

    // Maneja el cambio de precio
    const handlePriceChange = (value) => {
        setPrice(value);
    };

    // Aqui es el filtrado
    const productosFiltrados = products.filter(product => {
        // Verifica el precio primero
        const pasaPrecio = product.price <= price;
        
        // Si no hay categorías seleccionadas, muestra todos los productos que pasan el filtro de precio
        if (selectedCategories.length === 0) {
            return pasaPrecio;
        }

        // Verifica si alguna de las etiquetas del producto coincide con las categorías seleccionadas
        // Normaliza a minúsculas para comparar correctamente
        const coincideCategorias = selectedCategories.some(cat => 
            product.category.toLowerCase() === cat.toLowerCase()  
        );
        
        // El producto debe pasar ambos filtros: precio y categoría
        return pasaPrecio && coincideCategorias;
    });

    return (
        <main id="products-body">
            <h1>Toda la ropa en un solo lugar.</h1>
            <p>Echa un vistazo a nuestra colección</p>
            <hr />
            <section className="products-body-container">
                <ProductFilters
                    categories = {categories}
                    selectedCategories = {selectedCategories}
                    onCategoryChange = {handleCategoryChange}
                    price = {price}
                    onPriceChange = {handlePriceChange}
                />
                <section className="products-section">
                    <ProductCard products={productosFiltrados} onOpenedModal={openModal} selectedProduct={selectProduct}/>
                    <ModalProduct
                        isModalOpened={isModalOpen}
                        closeModal={closeModdal}
                        product = {selectedProduct}
                    />
                    <Pagination />
                </section>
            </section>
        </main>
        // <h1>Echa un vistazo a nuestra colección</h1>
        
    )
}
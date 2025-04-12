import ProductFilters from "./ProductsFilter.jsx"
import ProductCard from "./ProductsCard.jsx"
import "./ProductBody.css"
import Pagination from "./ProductsPagination.jsx"
import { useEffect, useState } from "react"
import ModalProduct from "./ProductModal.jsx"

export default function ProductsBody({search}) {
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
        },
        {
            id: 6,
            imgProduct: 'https://images.unsplash.com/photo-1630167146816-e1f4ff99c00c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Camisa de cuadros',
            desc: 'Camisa de cuadros, perfecta para looks casuales y elegantes.',
            price: 59.90,
            category: 'Camisas',
            tag: ['casual', 'elegante']
        },
        {
            id: 7,
            imgProduct: 'https://images.unsplash.com/photo-1661110546807-4c1ce22ceced?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Pantalón cargo',
            desc: 'Pantalón de estilo cargo, cómodo y práctico para el día a día.',
            price: 79.90,
            category: 'Pantalones',
            tag: ['cargo', 'casual']
        },
        {
            id: 8,
            imgProduct: 'https://images.unsplash.com/photo-1586038693164-cb7ee3fb8e2c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Sudadera con capucha',
            desc: 'Sudadera abrigadora con capucha, ideal para días fríos.',
            price: 69.90,
            category: 'Sudaderas',
            tag: ['abrigadora', 'comodidad']
        },
        {
            id: 9,
            imgProduct: 'https://images.unsplash.com/photo-1657961940670-5eb629703240?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Blusa de seda',
            desc: 'Blusa elegante de seda, perfecta para ocasiones especiales.',
            price: 120.00,
            category: 'Blusas',
            tag: ['elegante', 'formal']
        },
        {
            id: 10,
            imgProduct: 'https://images.unsplash.com/photo-1742518424609-7d6b0b4107b6?q=80&w=1646&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Polo deportivo',
            desc: 'Polo de tela técnica, ideal para actividades deportivas.',
            price: 55.90,
            category: 'Polos',
            tag: ['deportivo', 'activo']
        },
        {
            id: 11,
            imgProduct: 'https://images.unsplash.com/photo-1593030103066-0093718efeb9?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Blazer elegante',
            desc: 'Blazer de corte slim, ideal para ocasiones formales o para dar un toque sofisticado.',
            price: 119.90,
            category: 'Camisas',
            tag: ['formal', 'elegante']
        },
        {
            id: 12,
            imgProduct: 'https://images.unsplash.com/photo-1594938252461-e42450664907?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Pantalón de vestir',
            desc: 'Pantalón de vestir de corte moderno, ideal para eventos formales.',
            price: 89.90,
            category: 'Pantalones',
            tag: ['formal', 'elegante']
        }
    ];

    const categories = [
        { id: 1, name: 'Polos' },
        { id: 2, name: 'Blusas'},
        { id: 3, name: 'Camisas' },
        { id: 4, name: 'Pantalones' },
        { id: 5, name: 'Sudaderas' }
    ]

    const [isFilterOpen, setIsFilterOpen] = useState(false)

    const [filteredProducts, setFilteredProducts] = useState(products); // Productos filtrados
    const [selectedCategories, setSelectedCategories] = useState([]); // selectedCategories = [] ; setSelectedCategories()
    const [price, setPrice] = useState(249); // price = 249 ; setPrice()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState([])

    const [pagination, setPagination] = useState([])
    const [currentPage, setCurrentPage] = useState(1); // Add this to track current page

    const openModal = (product) => { // Obtengo el ID del producto al momento de que se hace click en una Card de producto
        let scrollY = window.pageYOffset
        setIsModalOpen(true)
        selectProduct(product) // Se lo envío a la funcion
        setTimeout(() => {
            window.scrollTo(0, scrollY)
        }, 0);
    }

    const closeModdal = () => {
        setIsModalOpen(false)
        setSelectedProduct([])
    }

    const selectProduct = (id) =>{ // Recibo ese id
        const idProduct = products.find((product) => { // Comparo el id recibido con alguno del array de productos
            return id === product.id ? product : null
        })
        setSelectedProduct(idProduct); // Establezco el valor de "selectedProduct" al valor encontrado
    }

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? "hidden" : "auto"
    }, [isModalOpen])

    const handleCategoryChange = (name, checked) => {
        setSelectedCategories(prev =>
            checked ? [...prev, name] : prev.filter(cat => cat !== name) // ...prev obtiene l
        )
    };

    const handlePriceChange = (value) => {
        setPrice(value);
    };

    const changePage = (page) => {
        setCurrentPage(page);
    };

    const productsPerPage = 6;

    // Este efecto actualiza la paginación cuando cambia la página o los productos filtrados
    useEffect(() => {
        const start = (currentPage - 1) * productsPerPage;
        const end = currentPage * productsPerPage;
        
        const currentProducts = filteredProducts.slice(start, end);
        setPagination(currentProducts);
    }, [currentPage, filteredProducts]);

    let searchProducts = () => {
        const results = products.filter((product) => {
            const limitPrice = product.price <= price
            if(search) {
                // .includes busca coincidencias EXACTAS si se usa en un array, de no ser así, su comportamiento es igual al .some
                // .some busca si contiene al menos las iniciales
                if(limitPrice && selectedCategories.includes(product.category) || limitPrice && selectedCategories.length === 0) {
                    return product.name.toLowerCase().includes(search.trim().toLowerCase())
                }       
            }
        });
        setFilteredProducts(results);
    }

    let showAllProducts = () => {
        const filtered = products.filter(product => {
            const pasaPrecio = product.price <= price;
            
            if (selectedCategories.length === 0) {
                return pasaPrecio;
            }

            const coincideCategorias = selectedCategories.some(cat => 
                product.category.toLowerCase() === cat.toLowerCase()
            );

            return pasaPrecio && coincideCategorias;
        });
        setFilteredProducts(filtered);
    }

    // Este efecto actualiza los productos filtrados cuando cambian los filtros
    useEffect(() => {
        console.log(`ingresaste: ${search.trim()}`)
        if(search.trim() !== '') {
            searchProducts();
        } else {
            showAllProducts();
        }
        console.log(selectedCategories)
    }, [search, selectedCategories, price]); // Si el valor de selectedCategories o price cambia, ese useEffect se ejecuta!

    const toggleFilter = () => {
        setIsFilterOpen(prev => !prev)
    }

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
                    onFiltersOpen = {toggleFilter}
                    filters = {isFilterOpen}
                />
                <section className="products-section">
                    <div className="top-products">
                        <button className="filter-btn" onClick={toggleFilter}><img src="../src/assets/img/filter-icon.png" alt="filter-icon" /></button>
                    </div>
                    <ProductCard 
                        products={pagination}
                        onOpenedModal={openModal}
                    />
                    <ModalProduct
                        isModalOpened={isModalOpen}
                        closeModal={closeModdal}
                        product = {selectedProduct}
                    />
                    <Pagination 
                        elementsPagination={filteredProducts}
                        showPage={changePage}
                        currentPage={currentPage}
                        productsPerPage={productsPerPage}/>
                </section>
            </section>
        </main>        
    )

}
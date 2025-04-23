import ProductFilters from "./ProductsFilter.jsx"
import ProductCard from "./ProductsCard.jsx"
import "./ProductBody.css"
import Pagination from "./ProductsPagination.jsx"
import { useEffect, useState, useRef } from "react"
import ModalProduct from "./ProductModal.jsx"
import { useLocation, useNavigate } from "react-router-dom"

export default function ProductsBody({search}) {
    const products = [
        {
            id: 1,
            imgProduct: 'https://images.unsplash.com/photo-1716951735063-3d60c2c288e4?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Polo del algodón',
            price: 39.90,
            desc: 'Polo suave al tacto, hecho 100% de algodón ideal para looks frescos y casuales.',
            sex: 'Masculino',
            category: 'Polos',
            tag: ['minimalista']
        },
        {
            id: 2,
            imgProduct: 'https://images.unsplash.com/photo-1623052760790-9605a8579730?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Blusa',
            desc: 'Blusa ligera y elegante, perfecta para complementar tu outfit con estilo y comodidad.',
            price: 45.90,
            sex: 'Femenino',
            category: 'Blusas',
            tag: ['tops']
        },
        {
            id: 3,
            imgProduct: 'https://images.unsplash.com/photo-1661110546797-d86cc72a2765?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Polo oversize',
            desc: 'Estilo urbano y cómodo con este polo oversize que marca tendencia.',
            price: 49.20,
            sex: 'Unisex',
            category: 'Polos',
            tag: ['oversize', 'urbano']
        },
        {
            id: 4,
            imgProduct: 'https://images.unsplash.com/photo-1714143136385-c449be6760f6?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Jean',
            desc: 'Jean clásico de corte recto, ideal para cualquier ocasión y combinable con todo.',
            price: 89.90,
            sex: 'Femenino',
            category: 'Pantalones',
            tag: ['clásico']
        },
        {
            id: 5,
            imgProduct: 'https://images.unsplash.com/photo-1735251186841-2ed286f02990?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Sudadera',
            desc: 'Sudadera con diseño minimalista y tela abrigadora, perfecta para días fríos.',
            price: 99.90,
            sex: 'Unisex',
            category: 'Sudaderas',
            tag: ['minimalista']
        },
        {
            id: 6,
            imgProduct: 'https://images.unsplash.com/photo-1630167146816-e1f4ff99c00c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Camisa de cuadros',
            desc: 'Camisa de cuadros, perfecta para looks casuales y elegantes.',
            price: 59.90,
            sex: 'Masculino',
            category: 'Camisas',
            tag: ['casual', 'elegante']
        },
        {
            id: 7,
            imgProduct: 'https://images.unsplash.com/photo-1661110546807-4c1ce22ceced?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Pantalón cargo',
            desc: 'Pantalón de estilo cargo, cómodo y práctico para el día a día.',
            price: 79.90,
            sex: 'Unisex',
            category: 'Pantalones',
            tag: ['cargo', 'casual']
        },
        {
            id: 8,
            imgProduct: 'https://images.unsplash.com/photo-1586038693164-cb7ee3fb8e2c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Sudadera con capucha',
            desc: 'Sudadera abrigadora con capucha, ideal para días fríos.',
            price: 69.90,
            sex: 'Masculino',
            category: 'Sudaderas',
            tag: ['abrigadora', 'comodidad']
        },
        {
            id: 9,
            imgProduct: 'https://images.unsplash.com/photo-1657961940670-5eb629703240?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Blusa de seda',
            desc: 'Blusa elegante de seda, perfecta para ocasiones especiales.',
            price: 120.00,
            sex: 'Femenino',
            category: 'Blusas',
            tag: ['elegante', 'formal']
        },
        {
            id: 10,
            imgProduct: 'https://images.unsplash.com/photo-1742518424609-7d6b0b4107b6?q=80&w=1646&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Polo deportivo',
            desc: 'Polo de tela técnica, ideal para actividades deportivas.',
            price: 55.90,
            sex: 'Masculino',
            category: 'Polos',
            tag: ['deportivo', 'activo']
        },
        {
            id: 11,
            imgProduct: 'https://images.unsplash.com/photo-1593030103066-0093718efeb9?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Blazer elegante',
            desc: 'Blazer de corte slim, ideal para ocasiones formales o para dar un toque sofisticado.',
            price: 119.90,
            sex: 'Masculino',
            category: 'Camisas',
            tag: ['formal', 'elegante']
        },
        {
            id: 12,
            imgProduct: 'https://images.unsplash.com/photo-1594938252461-e42450664907?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Pantalón de vestir',
            desc: 'Pantalón de vestir de corte moderno, ideal para eventos formales.',
            price: 89.90,
            sex: 'Masculino',
            category: 'Pantalones',
            tag: ['formal', 'elegante']
        }
    ];

    const genres = [
        { id: 'genre-1', name: 'Masculino'},
        { id: 'genre-2', name: 'Femenino'},
        { id: 'genre-3', name: 'Unisex'}
    ];

    const categories = [
        { id: 'cat-1', name: 'Polos' },
        { id: 'cat-2', name: 'Blusas'},
        { id: 'cat-3', name: 'Camisas' },
        { id: 'cat-4', name: 'Pantalones' },
        { id: 'cat-5', name: 'Sudaderas' }
    ];

    const [searchMessage, setSearchMessage] = useState(false)
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)

    const [filteredProducts, setFilteredProducts] = useState(products); // Productos filtrados
    const [selectedGenres, setSelectedGenres] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([]); // selectedCategories = [] ; setSelectedCategories()
    const [price, setPrice] = useState(249); // price = 249 ; setPrice()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState([])

    const [pagination, setPagination] = useState([])
    const [currentPage, setCurrentPage] = useState(1); // Add this to track current page

    const prevFiltersRef = useRef({ categories: [], genres: [], price: 249, search: '' });

    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const genero = params.get("g");
        const categoria = params.get("c");
        const pagina = parseInt(params.get("p")) || 1;
        const query = params.get("q");

        if (genero) {
            setSelectedGenres(genero.split(","));
        }

        if (categoria) {
            setSelectedCategories(categoria.split(","));
        }

        if (query) {
            setSearch(query);
        }

        setCurrentPage(pagina);
    }, []);

    const updateURL= () => {
        const queryParams = new URLSearchParams();
    
        // Use the search prop for the query parameter
        if (search && search.trim()) {
            queryParams.set("q", search.trim());
        }
    
        if (selectedCategories.length > 0) {
            queryParams.set("c", selectedCategories.join(","));
        }
    
        if (selectedGenres.length > 0) {
            queryParams.set("g", selectedGenres.join(","));
        }

        queryParams.set("p", currentPage.toString())
        
        // queryParams.set("p", price.toString());
    
        const newUrl = `/products?${queryParams.toString()}`;        
        window.history.replaceState(null, '', newUrl);
        console.log(prevFiltersRef)
    };

    useEffect(() => {
        const currentFilters = {
            categories: selectedCategories,
            genres: selectedGenres,
            page: currentPage,
            price: price,
            search: search || ''
        };
        
        const prevFilters = prevFiltersRef.current;
        const categoriesChanged = JSON.stringify(prevFilters.categories) !== JSON.stringify(currentFilters.categories);
        const genresChanged = JSON.stringify(prevFilters.genres) !== JSON.stringify(currentFilters.genres);
        const priceChanged = prevFilters.price !== currentFilters.price;
        const searchChanged = prevFilters.search !== currentFilters.search;

        const filtersChanged = categoriesChanged || genresChanged || priceChanged || searchChanged;

        if (filtersChanged && currentPage !== 1) {
            setCurrentPage(1);
            return;
        }
        
        const pageChanged = prevFilters.page !== currentFilters.page;

        if (filtersChanged || pageChanged) {
            updateURL();
            prevFiltersRef.current = currentFilters;
        }
    }, [selectedCategories, selectedGenres, price, search, currentPage]);

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

    // Va guardando lo seleccionado en un array.
    const handleCategoryChange = (name, checked) => {
        setSelectedCategories(prev =>{
            const newCategories = checked ? 
                [...prev, name] : 
                prev.filter(cat => cat !== name);
            
            return newCategories;
        })
    };

    const handleGenreChange = (name, checked) => {
        setSelectedGenres(prev => {
            const newGenres = checked ?
                [...prev, name] :
                prev.filter(gen => gen !== name);
            
            return newGenres;
        })
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
            const coincideSexo = selectedGenres.length === 0 || 
                selectedGenres.includes(product.sex);
            
            const coincideCategoria = selectedCategories.length === 0 || 
                selectedCategories.includes(product.category);

            if(search) {
                // .includes busca coincidencias EXACTAS si se usa en un array, de no ser así, su comportamiento es igual al .some
                // .some busca si contiene al menos las iniciales
                if(limitPrice && coincideSexo && coincideCategoria) {
                    return product.name.toLowerCase().includes(search.trim().toLowerCase())
                }
            }
        });
        setFilteredProducts(results);
        console.log(results)
        setSearchMessage(true);
        setIsEmpty(results.length === 0);
    }

    let showAllProducts = () => {
        const filtered = products.filter(product => {
            const pasaPrecio = product.price <= price;
            
            if(selectedCategories.length === 0 && selectedGenres.length === 0) {
                return pasaPrecio;
            }
            
            const coincideSexo = selectedGenres.length === 0 || 
                selectedGenres.includes(product.sex);
            
            const coincideCategoria = selectedCategories.length === 0 || 
                selectedCategories.includes(product.category);
            
            return pasaPrecio && coincideSexo && coincideCategoria;
        });
        setFilteredProducts(filtered);
        setSearchMessage(false)
        setIsEmpty(filtered.length === 0)
    }

    // console.log(selectedGenres)

    // Este efecto actualiza los productos filtrados cuando cambian los filtros
    useEffect(() => {
        // console.log(`ingresaste: ${search.trim()}`)
        if(search.trim() !== '') {
            searchProducts();
        } else {
            showAllProducts();
        }

        // console.log(selectedCategories)
    }, [search, selectedGenres, selectedCategories, price]); // Si el valor de search, selectedCategories o price cambia, ese useEffect se ejecuta!

    const toggleFilter = () => {
        setIsFilterOpen(prev => !prev)
    }

    return (
        <main id="products-body">
            <div className="products-header-container">
                <div className="products-top-text-container">
                    <h1>Toda la ropa en un solo lugar.</h1>
                    <p>Echa un vistazo a nuestra colección</p>
                </div>
                <div className={searchMessage ? "products-search-container show" : "products-search-container hide"}>
                    <p>Resultados para: "<strong>{search}</strong>"</p>
                </div>
            </div>
            <hr  className="separator"/>
            <section className="products-body-container">
                <ProductFilters
                    genres = {genres}
                    selectedGenre = {selectedGenres}
                    onSelectedGender = {handleGenreChange}
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
                        noProducts={isEmpty}
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
import ProductFilters from "./ProductsFilter.jsx"
import ProductCard from "./ProductsCard.jsx"
import "./ProductBody.css"
import Pagination from "./ProductsPagination.jsx"
import { useEffect, useState } from "react"
import ModalProduct from "./ProductModal.jsx"
import { useLocation, useSearchParams } from "react-router-dom"

export default function ProductsBody({search}) {
    // Trabajando con la URL
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('p') || 1; // Esto obtiene lo que viene luego de ?p= !!!!
    const query = searchParams.get('q'); // Esto obtiene lo que viene luego de ?q= !!!!
    const gender = searchParams.get('gender') || '';
    const brand = searchParams.get('brand') || '';
    const category = searchParams.get('category') || '';

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)

    const [selectedPage, setSelectedPage] = useState(page)
    const [selectedFilters, setSelectedFilters] = useState([])

    const [listBrands, setListBrands] = useState([]);
    const [listGenders, setListGenders] = useState([]);
    const [listCategories, setListCategories] = useState([]);
    const [listProducts, setListProducts] = useState([]);
    const [listPages, setListPages] = useState([]);
    const [modalInfo, setModalInfo] = useState([]);

    localStorage.setItem('selectedFilters', JSON.stringify(selectedFilters))

    const updateSearchParams = (newPage) => {
        const nuevoValor = newPage;
        const nuevosParams = new URLSearchParams(searchParams);
        if(nuevoValor) {
            nuevosParams.set('p', nuevoValor);
            setSelectedPage(nuevoValor);
        }
        setSearchParams(nuevosParams);
    }

    // Cargar los filtros desde URL cuando el componente se monta
    useEffect(() => {
        const filtersFromUrl = [];
        
        // Procesar los filtros de género desde URL
        searchParams.getAll('gender').forEach(gender => {
            filtersFromUrl.push(`gender[]=${gender}`);
        });
        
        // Procesar los filtros de marca desde URL
        searchParams.getAll('brand').forEach(brand => {
            filtersFromUrl.push(`brand[]=${brand}`);
        });
        
        // Procesar los filtros de categoría desde URL
        searchParams.getAll('category').forEach(category => {
            filtersFromUrl.push(`category[]=${category}`);
        });
        
        // Actualizar el estado con los filtros de la URL
        if (filtersFromUrl.length > 0) {
            setSelectedFilters(filtersFromUrl);
        }
    }, []);

    const API = `https://api-clothes-ecommerce.onrender.com/api`;

    let toggleFilter = () => {
        setIsFilterOpen(prev => !prev);
    }
    
    let closeModal = () => {
        setIsModalOpen(false)
    }

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? "hidden" : "auto"
    }, [isModalOpen])

    useEffect(() => {
        document.body.style.overflow = isFilterOpen ? "hidden" : "auto"
    }, [isFilterOpen])

    useEffect(() => {
        Promise.all([
            fetch(`${API}/genders`).then(res => res.json()),
            fetch(`${API}/brands`).then(res => res.json()),
            fetch(`${API}/categories`).then(res => res.json()),
        ]).then(([genders, brands, categories]) => {
            setListGenders(genders)
            setListBrands(brands)
            setListCategories(categories)
        }).catch(err => console.log(err))
    }, [])

    let searchedProducts = (info) => {
        if (query !== null && query !== '') {
            if (selectedFilters.length > 0) {
                setListProducts(info.filter((product) =>
                    product.name.toLowerCase().includes(query.toLowerCase())
                ));
            } else {
                setListProducts(info.data.filter((product) =>
                    product.name.toLowerCase().includes(query.toLowerCase())
                ));
            }
            setPage(null)
        } else if (selectedFilters.length > 0) {
            setListProducts(info)
            setListPages(null)
        } else {
            setListProducts(info.data)
            setListPages(info.last_page)
        }
    }
    
    useEffect(() => {
        if(listProducts.length === 0) {
            setListPages(0)
            setIsEmpty(true)
        } else {
            setIsEmpty(false)
        }
    }, [listProducts])
    
    useEffect(() => {
        const fetchUrl = selectedFilters.length > 0 ? 
            `${API}/all-products?${selectedFilters.join('&')}` :
            `${API}/products?page=${selectedPage}`;
        fetch(fetchUrl)
            .then(res => res.json())
            .then((info) => {
                searchedProducts(info)
                console.log(fetchUrl)
                console.log(selectedFilters)
            })
            .catch(err => console.log(err))
    }, [selectedFilters, selectedPage, search, query, searchParams])
    
    // console.log(`${searchParams.getAll('gender').join('&gender[]=')}`)
    // console.log(selectedFilters)
    return (
        <main id="products-body">
            <div className="products-header-container">
                <div className="products-top-text-container">
                    <h1>Toda la ropa en un solo lugar.</h1>
                    <p>Echa un vistazo a nuestra colección</p>
                </div>
                <div className={query !== null ? "search-text show" : "search-text"}>
                    <p>Resultados para: "<strong>{query}</strong>"</p>
                </div>
            </div>
            <hr  className="separator"/>
            <section className="products-body-container">
                <ProductFilters
                    isFilterOpen={isFilterOpen}
                    toggleFilter={toggleFilter}
                    listGenders={listGenders}
                    listBrands = {listBrands}
                    listCategories={listCategories}
                    selectedFilters={selectedFilters}
                    setSelectedFilters={setSelectedFilters}
                    setSearchParams={setSearchParams}
                    searchParams={searchParams}
                />
                <section className="products-section">
                    <div className="top-products">
                        <button className="filter-btn" onClick={toggleFilter}><img src="/img/filter-icon.png" alt="filter-icon" /></button>
                    </div>
                    <ProductCard 
                        noProducts={isEmpty}
                        setModalInfo={setModalInfo}
                        onOpenedModal={setIsModalOpen}
                        listProducts={listProducts}
                        searchedProducts={searchedProducts}
                    />
                    <ModalProduct
                        closeModal={closeModal}
                        isModalOpened={isModalOpen}
                        modalInfo={modalInfo}
                    />
                    <Pagination 
                        selectedPage = {updateSearchParams}
                        listPages = {listPages}
                        currentPage = {selectedPage}
                    />
                </section>
            </section>
        </main>        
    )

}
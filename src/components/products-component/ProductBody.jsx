import ProductFilters from "./ProductsFilter.jsx"
import ProductCard from "./ProductsCard.jsx"
import "./ProductBody.css"
import Pagination from "./ProductsPagination.jsx"
import { useEffect, useState } from "react"
import ModalProduct from "./ProductModal.jsx"
import { useSearchParams } from "react-router-dom"
import { useGetProductsQuery } from "../../productsApi";

export default function ProductsBody() {
    // Trabajando con la URL
    // const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('p') || 1; // Esto obtiene lo que viene luego de ?p= !!!!
    const query = searchParams.get('q'); // Esto obtiene lo que viene luego de ?q= !!!!

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)

    const [selectedPage, setSelectedPage] = useState(page)
    const [selectedFilters, setSelectedFilters] = useState([])

    const [listProducts, setListProducts] = useState([]);
    const [listPages, setListPages] = useState([]);
    const [modalInfo, setModalInfo] = useState([]);

    const [price, setPrice] = useState(249)

    const { data, isLoading, isFetching } = useGetProductsQuery({
        page: page,
        filters: selectedFilters.join('&')
    });

    const updateSearchParams = (newPage) => {
        const newValue = newPage;
        const newParams = new URLSearchParams(searchParams);
        if(newValue) {
            newParams.set('p', newValue);
            setSelectedPage(newValue);
        }
        setSearchParams(newParams);
    }

    const handlePriceFilter = (price) => {
        const newParams = new URLSearchParams(searchParams);

        if(price) {
            newParams.set('price', price)
            setSelectedPage(1)
        } else {
           newParams.delete('price') 
        }

        newParams.set('p', 1);
        setPrice(price)
        setSearchParams(newParams)
    }

    // Cargar los filtros desde URL cuando el componente se monta
    useEffect(() => {
        let filtersFromUrl = [];
        let needsReset = false;

        // Procesar los filtros de género desde URL
        searchParams.getAll('gender').forEach(gender => {
            filtersFromUrl.push(`gender[]=${gender}`);
            needsReset = true;
        });
        
        // Procesar los filtros de marca desde URL
        searchParams.getAll('brand').forEach(brand => {
            filtersFromUrl.push(`brand[]=${brand}`);
            needsReset = true;
        });
        
        // Procesar los filtros de categoría desde URL
        searchParams.getAll('category').forEach(category => {
            filtersFromUrl.push(`category[]=${category}`);
            needsReset = true;
        });

        // Limpiar cualquier filtro anterior de search=
        filtersFromUrl = filtersFromUrl.filter(f => !f.startsWith('search='));

        // Si hay un valor en query, añadirlo
        if (query) {
            filtersFromUrl.push(`search=${query}`);
        }

        if (query) {
            setSelectedPage(1);
        }

        if (searchParams.has('price')) {
            filtersFromUrl.push(`price=${searchParams.get('price')}`);
            setPrice(Number(searchParams.get('price'))); // sincronizar valor inicial
        }

        if (needsReset && Number(page) > 1) {
            updateSearchParams(1);
        }
        
        // Actualizar el estado solo si hay filtros
        setSelectedFilters(filtersFromUrl);
    }, [query, searchParams]);

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
        if(listProducts.length === 0) {
            setListPages(0)
            setIsEmpty(true)
        } else {
            setIsEmpty(false)
        }
    }, [listProducts])

    useEffect(() => {
        if(data?.last_page < 1) {
            setListPages(0)
            setIsEmpty(true)
        } else {
            setIsEmpty(false)
        }
    }, [data])
    
    return (
        <main id="products-body">
            <div className="products-header-container">
                <div className="products-top-text-container">
                    <h1 className="text-4xl font-bold">Toda la ropa en un solo lugar.</h1>
                    <p className="text-xl">Echa un vistazo a nuestra colección</p>
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
                    selectedFilters={selectedFilters}
                    setSelectedFilters={setSelectedFilters}
                    setSearchParams={setSearchParams}
                    searchParams={searchParams}
                    updateSearchParams={updateSearchParams}
                    handlePriceFilter={handlePriceFilter}
                    setSelectedPage={setSelectedPage}
                    setPrice={setPrice}
                    price={price}
                    loading={isLoading}
                />
                <section className="w-full justify-center">
                    <div className="top-products">
                        <button className="filter-btn" onClick={toggleFilter}><img src="/img/filter-icon.png" alt="filter-icon" /></button>
                    </div>
                    <ProductCard 
                        noProducts={isEmpty}
                        setModalInfo={setModalInfo}
                        onOpenedModal={setIsModalOpen}
                        data={data}
                        isLoading={isLoading}
                        isFetching={isFetching}
                    />
                    <ModalProduct
                        closeModal={closeModal}
                        isModalOpened={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        modalInfo={modalInfo}
                    />
                    <Pagination 
                        selectedPage = {updateSearchParams}
                        listPages = {listPages}
                        currentPage = {selectedPage}
                        data={data}
                        isLoading={isLoading}
                        isFetching={isFetching}
                    />
                </section>
            </section>
        </main>        
    )

}
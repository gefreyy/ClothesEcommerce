import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function ProductFilters({
    listGenders,
    listBrands,
    listCategories,
    isFilterOpen,
    setSelectedFilters,
    selectedFilters,
    setSearchParams,
    searchParams,
}) {
    const handleGenderCheckboxChange = (e) => {
        const gender = e.target.value;
        const checked = e.target.checked;

        const nuevosParams = new URLSearchParams(searchParams);
        const categoriasActuales = nuevosParams.getAll('gender');

        if (checked) {
            if (!categoriasActuales.includes(gender)) {
                nuevosParams.append('gender', gender);
                setSelectedFilters(prev => [...prev, `gender[]=${gender}`]);
            }
        } else {
            const filtradas = categoriasActuales.filter(c => c !== gender);
            nuevosParams.delete('gender');
            filtradas.forEach(c => nuevosParams.append('gender', c));
            setSelectedFilters(prev => prev.filter(c => c !== `gender[]=${gender}`));
        }
        setSearchParams(nuevosParams);
    }

    const handleBrandCheckboxChange = (e) => {
        const brand = e.target.value;
        const checked = e.target.checked;

        const nuevosParams = new URLSearchParams(searchParams);
        const categoriasActuales = nuevosParams.getAll('brand');
        if(checked) {
            if(!categoriasActuales.includes(brand)) {
                nuevosParams.append('brand', brand);
                setSelectedFilters(prev => [...prev, `brand[]=${brand}`]);
            }
        } else {
            const filtradas = categoriasActuales.filter(c => c !== brand);
            nuevosParams.delete('brand');
            filtradas.forEach(c => nuevosParams.append('brand', c));
            setSelectedFilters(prev => prev.filter(c => c !== `brand[]=${brand}`));
        }
        setSearchParams(nuevosParams);
    }

    const handleCategoryCheckboxChange = (e) => {
        const category = e.target.value;
        const checked = e.target.checked;

        const nuevosParams = new URLSearchParams(searchParams);
        const categoriasActuales = nuevosParams.getAll('category');

        if(checked) {
            if(!categoriasActuales.includes(category)) {
                nuevosParams.append('category', category);
                setSelectedFilters(prev => [...prev, `category[]=${category}`]);
            }
        } else {
            const filtradas = categoriasActuales.filter(c => c !== category);
            nuevosParams.delete('category');
            filtradas.forEach(c => nuevosParams.append('category', c));
            setSelectedFilters(prev => prev.filter(c => c !== `category[]=${category}`));
        }
        setSearchParams(nuevosParams);
    }

    const generosSeleccionados = searchParams.getAll('gender');
    const categoriasSeleccionadas = searchParams.getAll('category');
    const marcasSeleccionadas = searchParams.getAll('brand');

    console.log()

    return (
        <aside className={isFilterOpen ? 'products-filters-container open' : 'products-filters-container'}>
            <div className="products-filters">
                <h3>Filtros</h3>
                <div className="filters-container">
                    {listGenders.map((gender, index) => (
                        <div className="filter-item" key={index}>
                            <input
                                type="checkbox"
                                id={`GENDER-${gender.id}`}
                                name={gender.name}
                                value={gender.name}
                                checked={generosSeleccionados.includes(gender.name)}
                                onChange={(e) => {
                                    handleGenderCheckboxChange(e)
                                }}
                            ></input>
                            <label htmlFor={`GENDER-${gender.id}`}>{gender.name}</label>
                        </div>
                    ))}
                    <hr className="separator-filter"/>
                    {listBrands.map((brand, index) => (
                        <div className="filter-item" key={index}>
                            <input
                                type="checkbox"
                                id={`BRAND-${brand.id}`}
                                name={brand.name}
                                value={String(brand.id)}
                                checked={marcasSeleccionadas.includes(String(brand.id))}
                                onChange={(e) => {
                                    handleBrandCheckboxChange(e)
                                }}
                            ></input>
                            <label htmlFor={`BRAND-${brand.id}`}>{brand.name}</label>
                        </div>
                    ))}
                    <hr className="separator-filter"/>
                    {listCategories.map((category, index) => (
                        <div className="filter-item" key={index}>
                            <input 
                                id={`CATEGORY-${category.id}`}
                                type="checkbox" 
                                name={category.name}
                                value={category.name}
                                checked={categoriasSeleccionadas.includes(category.name)}
                                onChange={(e) => {
                                    handleCategoryCheckboxChange(e)
                                }}
                            ></input>
                            <label htmlFor={`CATEGORY-${category.id}`}>{category.name}</label>
                        </div>
                    ))}
                        
                    <div className="filter-price-slider">
                        <label htmlFor="price">Precio</label>
                        <input 
                            type="range"
                            id="price"
                            name="price"
                            min="39"
                            max="249"
                            // value={price}
                            // onChange={(e) => onPriceChange(Number(e.target.value))}
                        />
                        <div className="price-range">
                            <p>S/39.90</p>
                            <p>S/249.90</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside> 
    )
}
export default function ProductFilters({
    categories, 
    selectedCategories, 
    onCategoryChange, 
    price, 
    onPriceChange 
}) {
    return (
        <aside className="products-filters-container">
            <h3>Filtros</h3>
            <div className="products-filters">
                <div className="filters-container">
                    {categories.map((category, index) => (
                        <div className="filter-item" key={index}>
                            <input 
                                type="checkbox" 
                                id={category.id} 
                                name={category.name}
                                checked={selectedCategories.includes(category.name)}
                                onChange={(e) => onCategoryChange(category.name, e.target.checked)}
                            ></input>
                            <label htmlFor={category.id}>{category.name}</label>
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
                            value={price}
                            onChange={(e) => onPriceChange(Number(e.target.value))}
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
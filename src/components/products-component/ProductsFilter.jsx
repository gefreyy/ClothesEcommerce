export default function ProductFilters({
    genres,
    selectedGenre,
    onSelectedGender,
    categories,
    selectedCategories, 
    onCategoryChange, 
    price, 
    onPriceChange,
    filters
}) {
    return (
        <aside className={filters ? 'products-filters-container open' : 'products-filters-container'}>
            <div className="products-filters">
                <h3>Filtros</h3>
                <div className="filters-container">
                    {genres.map((genre, index) => (
                        <div className="filter-item" key={index}>
                        <input 
                            type="checkbox" 
                            id={genre.id} 
                            name={genre.name}
                            checked={selectedGenre.includes(genre.name)}
                            onChange={(e) => onSelectedGender(genre.name, e.target.checked)} /* paso el nombre y el target marcado*/
                        ></input>
                        <label htmlFor={genre.id}>{genre.name}</label>
                    </div>
                    ))}
                    <hr className="separator-filter"/>
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
export default function Pagination({elementsPagination, showPage, currentPage, productsPerPage}) {
    const totalPages = Math.ceil(elementsPagination.length / productsPerPage);

    if (totalPages <= 1) {
        return null;
    }

    return(
        <div className="pagination-section">
            {Array.from({ length: totalPages }).map((_, i) => {
                const pageNumber = i + 1;

                return (
                    <button 
                        key={i} 
                        onClick={() => {
                            console.log("Pagination button clicked:", pageNumber);
                            showPage(pageNumber);
                        }}
                        className={pageNumber === currentPage ? 'active selected' : 'active'}
                    >
                        {pageNumber}
                    </button>
                );
            })}
        </div>
    );
}
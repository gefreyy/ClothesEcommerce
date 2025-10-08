export default function Pagination({selectedPage, currentPage, data, isLoading, isFetching}) {
    if (data?.last_page < 1 || data?.data?.length === 0 || isLoading || isFetching) {
        return null;
    } else {
        return(
            <div className="pagination-section">
                {Array.from({ length: data?.last_page }, (_, i) => i + 1).map((pageNumber) => (
                    <button 
                        key={pageNumber} 
                        onClick={() => { selectedPage(pageNumber); }}
                        className={parseInt(currentPage) === pageNumber ? 'active selected' : 'active'}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>
        );   
    }
}
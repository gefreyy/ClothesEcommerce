export default function Pagination({selectedPage, currentPage, listPages}) {
    let pageNumbers = [];

    for(let i = 1; i <= listPages; i++) {
        pageNumbers.push(i);
    }

    if (pageNumbers.length < 1) {
        return null;
    } else {
        return(
            <div className="pagination-section">
                {pageNumbers.map((pageNumber) => (
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
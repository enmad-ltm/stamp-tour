import Link from 'next/link';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const pageNumbers = Array.from({ length: totalPages }, (_, idx) => idx + 1);
    const pagesToShow = 5;
    const startIndex = Math.max(0, currentPage - Math.floor(pagesToShow / 2));
    const endIndex = Math.min(startIndex + pagesToShow, totalPages);
  
    const visiblePageNumbers = pageNumbers.slice(startIndex, endIndex);
  
    return (
      <div className="pagination-wrap">
        <ul className="pagination">
            {
                currentPage > 2 && (
                    <li className="pagination__item" onClick={() => onPageChange(1)}>
                        <Link href={`/page/${currentPage - 1}`} as={`/page/${currentPage - 1}`} prefetch={false} passHref />
                            <a className="pagination__link">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                                </svg>
                            </a>
                    </li>
                )
            }
            {
                visiblePageNumbers.map((pageNumber) => (
                    <li className="pagination__item" key={pageNumber} onClick={() => onPageChange(pageNumber)} >
                        <Link href={`/page/${pageNumber}`} as={`/page/${pageNumber}`} prefetch={false} passHref />
                            <a className={`pagination__link ${currentPage === pageNumber ? 'active' : ''}`}>{pageNumber}</a>
                    </li>
                ))
            }
            {
                currentPage < totalPages && (
                    <li className="pagination__item" onClick={() => onPageChange(totalPages)}>
                        <Link href={`/page/${totalPages}`} as={`/page/${totalPages}`} prefetch={false} passHref />
                            <a className="pagination__link">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                </svg>
                            </a>
                    </li>
                )
            }
        </ul>
      </div>
    );
  }
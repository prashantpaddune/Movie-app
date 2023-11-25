import {PageButton, PaginationContainer} from "@/common/Pagination/styles";

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
    <PaginationContainer>
        <PageButton
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
        >
            Previous
        </PageButton>
        <span>Page {currentPage} of {totalPages}</span>
        <PageButton
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
        >
            Next
        </PageButton>
    </PaginationContainer>
);

export default Pagination;
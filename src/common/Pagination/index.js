import {PageButton, PaginationContainer, PageInfo} from "@/common/Pagination/styles";

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
    <PaginationContainer>
        <PageButton
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
        >
            Previous
        </PageButton>
        <PageInfo>Page {currentPage} of {totalPages}</PageInfo>
        <PageButton
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
        >
            Next
        </PageButton>
    </PaginationContainer>
);

export default Pagination;
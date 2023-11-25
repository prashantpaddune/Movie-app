import MovieCard from './MovieCard';
import {Container, Heading, SearchInput, Wrapper, Header, SortSelect, FilterContainer} from "@/components/MovieList/styles";
import useGetMovies from "@/hooks/useGetMovies";
import Loader from "@/common/Loader";
import NoDataFound from "@/common/NoDataFound";
import Pagination from "@/common/Pagination";

const MovieList = () => {
    const {
        filteredMovies = [],
        loading = false,
        setSearchTerm = () => {},
        searchTerm = '',
        handleSortChange = () => {},
        setCurrentPage = () => {},
        currentPage = 1,
        totalPages = 1,
        paginatedMovies = [],
        onPageChange = () => {}
    } = useGetMovies();

    const renderItem = () => {
        if (filteredMovies.length === 0) {
            return <NoDataFound />;
        }

        return (
            <Container>
                {paginatedMovies.map((movie, index) => (
                    <MovieCard key={index} movie={movie}/>
                ))}
            </Container>
        );
    }

    if (loading) {
        return (
            <Wrapper>
                <Loader/>
            </Wrapper>
        );
    }

    return (
        <>
            <Header>
                <Heading>Explore Movies</Heading>
                <FilterContainer>
                    <SearchInput
                        type="text"
                        placeholder="Search movies..."
                        value={searchTerm}
                        onChange={e => {
                            setSearchTerm(e.target.value)
                            setCurrentPage(1)
                        }}
                    />
                    <SortSelect onChange={handleSortChange}>
                        <option value="asc">Date Asc</option>
                        <option value="desc">Date Des</option>
                    </SortSelect>
                </FilterContainer>
            </Header>
            {renderItem()}
            {filteredMovies.length > 0 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                />
            )}
        </>

    );
}

export default MovieList;
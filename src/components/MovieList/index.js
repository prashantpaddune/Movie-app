import MovieCard from './MovieCard';
import {Container, Heading, SearchInput, Wrapper, Header, SortSelect, FilterContainer} from "@/components/MovieList/styles";
import useGetMovies from "@/hooks/useGetMovies";
import Loader from "@/common/Loader";
import NoDataFound from "@/common/NoDataFound";

const MovieList = () => {
    const { filteredMovies = [], loading, setSearchTerm, searchTerm, handleSortChange } = useGetMovies();

    const renderItem = () => {
        if (filteredMovies.length === 0) {
            return <NoDataFound />;
        }

        return (
            <Container>
                {filteredMovies.map((movie, index) => (
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
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <SortSelect onChange={handleSortChange}>
                        <option value="asc">Date Asc</option>
                        <option value="desc">Date Des</option>
                    </SortSelect>
                </FilterContainer>
            </Header>
            {renderItem()}
        </>

    );
}

export default MovieList;
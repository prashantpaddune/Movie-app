import MovieCard from './MovieCard';
import {Container, Heading, SearchInput, Wrapper, Header} from "@/components/MovieList/styles";
import useGetMovies from "@/hooks/useGetMovies";
import Loader from "@/common/Loader";
import NoDataFound from "@/common/NoDataFound";

const MovieList = () => {
    const { filteredMovies = [], loading, setSearchTerm, searchTerm } = useGetMovies();

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
                <SearchInput
                    type="text"
                    placeholder="Search movies..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </Header>
            {renderItem()}
        </>

    );
}

export default MovieList;
import MovieCard from './MovieCard';
import { Container, Wrapper } from "@/components/MovieList/styles";
import useGetMovies from "@/hooks/useGetMovies";
import Loader from "@/common/Loader";
import NoDataFound from "@/common/NoDataFound";

const MovieList = () => {
    const { data = [], error, loading } = useGetMovies();

    if (loading) {
        return (
            <Wrapper>
                <Loader/>
            </Wrapper>
        );
    }


    if (data.length === 0) {
        return <NoDataFound />;
    }

    return (
        <Container>
            {data.map(movie => (
                <MovieCard key={movie.Const} movie={movie} />
            ))}
        </Container>
    );
}

export default MovieList;
import { useRequest } from "@/hooks/useRequest";
import { useEffect, useState } from "react";

const useGetMovies = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    const [{ data = [], loading, error }, trigger] = useRequest({
        url: '/',
        method: 'get',
    }, { manual: true, autoCancel: false })

    const sortMovies = (movies) => {
        return movies.sort((a, b) => {
            const dateA = new Date(a['Release Date']);
            const dateB = new Date(b['Release Date']);
            return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        });
    };

    const filteredMovies = searchTerm
        ? sortMovies(data.filter(movie => movie.Title.toLowerCase().includes(searchTerm.toLowerCase())))
        : sortMovies([...data]);

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    useEffect(() => {
        trigger();
    }, []);

    return {
        data,
        loading,
        error,
        filteredMovies,
        setSearchTerm,
        searchTerm,
        handleSortChange,
    }
}

export default useGetMovies;
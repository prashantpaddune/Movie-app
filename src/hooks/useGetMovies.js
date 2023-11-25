import { useRequest } from "@/hooks/useRequest";
import { useEffect, useState } from "react";

const useGetMovies = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

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

    const getPaginatedData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredMovies.slice(startIndex, endIndex);
    };

    const paginatedMovies = getPaginatedData();

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    const onPageChange = (page) => {
        setCurrentPage(page);
    }

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
        paginatedMovies,
        currentPage,
        setCurrentPage,
        onPageChange,
        totalPages: Math.ceil(filteredMovies.length / itemsPerPage)

    }
}

export default useGetMovies;
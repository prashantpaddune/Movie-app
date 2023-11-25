import {useRequest} from "@/hooks/useRequest";
import {useEffect, useState} from "react";

const useGetMovies = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const [{ data, loading, error }, trigger] = useRequest({
        url: '/',
        method: 'get',
    }, { manual: true, autoCancel: false })

    const filteredMovies = searchTerm ? data.filter(movie => movie.Title.toLowerCase().includes(searchTerm.toLowerCase())) : data;

    useEffect(() => {
        trigger();
    }, []);

    return {
        data,
        loading,
        error,
        filteredMovies,
        setSearchTerm,
        searchTerm
    }
}

export default useGetMovies;
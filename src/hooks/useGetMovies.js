import {useRequest} from "@/hooks/useRequest";
import {useEffect} from "react";

const useGetMovies = () => {
    const [{ data, loading, error }, trigger] = useRequest({
        url: '/',
        method: 'get',
    }, { manual: true, autoCancel: false })

    useEffect(() => {
        trigger();
    }, []);

    return {
        data,
        loading,
        error,
    }
}

export default useGetMovies;
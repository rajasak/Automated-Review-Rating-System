import { useEffect, useState } from "react"
import swal from 'sweetalert'
import api from "../../../server/api";



const useAllReviews = () => {
    const [fetchAllData, setFetchAllData] = useState<any[]>()
    const [next, setNext] = useState<string | null>(null);
    const [previous, setPrevious] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false)
    const fetchApi = async (url: string = "/reviews/") => {
        setIsLoading(true)
        try {
            const response = await api.get(url)
            setFetchAllData(response.data.results)
            setNext(response.data.next || null);
            setPrevious(response.data.previous || null);

        } catch (error: any) {
            swal(error.response?.data?.message || "Failed to Fetch All Review")

        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchApi();
    }, []);
    return { isLoading, fetchAllData, next, previous, fetchApi }
}

export default useAllReviews
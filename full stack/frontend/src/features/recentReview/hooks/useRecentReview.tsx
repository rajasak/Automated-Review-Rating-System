import { useEffect, useState } from "react"
import swal from 'sweetalert'
import api from "../../../server/api";


const useRecentReview = () => {
    const [fetchData, setFetchData] = useState<any[]>()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const fetchApi = async () => {
            setIsLoading(true)
            try {
                const response = await api.get(`/reviews/recent/`)
                
                setFetchData(response.data)

            } catch (error: any) {
                
                
                swal(error.respone?.data?.message || "Failed to Fetch Recent Review")

            } finally {
                setIsLoading(false)
            }
        }
        fetchApi()
    }, [])

    return { isLoading, fetchData }
}

export default useRecentReview
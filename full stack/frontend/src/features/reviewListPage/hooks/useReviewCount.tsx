import { useEffect, useState } from "react"
import swal from 'sweetalert'
import api from "../../../server/api";


const useReviewCount = () => {
    const [fetchReviewCount, setFetchReviewCount] = useState<any>()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const fetchApi = async () => {
            setIsLoading(true)
            try {
                const response = await api.get(`/reviews/detail/`)
               
                
                setFetchReviewCount(response.data)

            } catch (error: any) {
                
                swal(error.respone?.data?.message || "Failed to Fetch Review count")

            } finally {
                setIsLoading(false)
            }
        }
        fetchApi()
    }, [])

    return { isLoading, fetchReviewCount }
}

export default useReviewCount
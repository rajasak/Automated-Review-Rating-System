import { useState } from "react"
import swal from 'sweetalert'
import api from "../../../server/api"


const useAddReview = () => {
    const [inputData, setInputData] = useState<string>("")
    const [loading, setloading] = useState(false)
    const handleSubmit = async () => {
        if (!inputData || inputData.trim() === "") {
            swal("Please Enter a Value")
            return
        }

        setloading(true)
        try {
            await api.post(`/reviews/create/`, { review_text: inputData })
            swal("Review Added Successfully")
            setInputData("")
        } catch (error: any) {
            swal(error.respone?.data?.message || "Failed Add Review")

        } finally {
            setloading(false)
        }
    }
    return { handleSubmit, inputData, setInputData, loading }
}

export default useAddReview
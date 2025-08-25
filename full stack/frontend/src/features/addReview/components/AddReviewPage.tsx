import useAddReview from "../hooks/useAddReview"

const AddReviewPage = () => {


    const { handleSubmit, inputData, setInputData, loading } = useAddReview()
    return (
        <div className="max-w-[1600px] mx-auto p-4">
            <div className=" my-4">
                <h2 className="text-xl font-semibold mb-4">Add Your Review</h2>
                <textarea
                    value={inputData || ""}
                    onChange={(e) => setInputData(e.target.value)}
                    maxLength={400}
                    placeholder="Enter Review..."
                    className="border p-4 text-lg w-full h-32 rounded-lg border-gray-300 focus:outline-none resize-none"
                />
                <button
                    disabled={loading || !inputData}
                    onClick={handleSubmit}
                    className="my-2 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold">
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </div>
            
        </div>
    )




}

export default AddReviewPage
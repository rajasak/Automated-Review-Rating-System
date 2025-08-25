import { CgChevronRight } from "react-icons/cg"
import { FaStar } from "react-icons/fa"
import { Link } from "react-router"
import useRecentReview from "../hooks/useRecentReview"
import useReviewCount from "../../reviewListPage/hooks/useReviewCount"
import ReviewSection from "../../reviewListPage/components/ReviewSection"



const RecentReviewPage = () => {
    const { isLoading, fetchData } = useRecentReview()
    const { fetchReviewCount } = useReviewCount()

    return (
        <>
            {
                isLoading ? (
                    <div className="flex justify-center items-center my-10">
                        <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="max-w-[1600px] mx-auto my-6 p-4">
                        <div className="flex gap-4 items-center justify-between">
                            <p className="text-3xl font-semibold drop-shadow-md ">Ratings & Reviews</p>
                            <div className="bg-green-600 text-white flex items-center gap-1 w-16 rounded-2xl justify-center">
                                <span className="font-bold text-xl">{fetchReviewCount?.average_rating}</span>
                                <FaStar />
                            </div>
                            <p className="text-gray-500 mr-auto font-semibold text-xl">{fetchReviewCount?.total_reviews} ratings</p>
                            <Link to={'/add-review'} className="text-white text-lg font-semibold bg-blue-600 rounded-sm px-4 py-2">Rate Product</Link>
                        </div>
                        <ReviewSection/>
                        <div className="my-4 space-y-4">
                            {
                                (fetchData?.length == 0 && !isLoading) ? (
                                    <p className="text-center text-lg my-10 font-semibold">No Recent Reviews</p>
                                ) : (
                                    <>
                                        {fetchData?.map((item: any) => (
                                            <div key={item.id} className="border-b-3 border-gray-100 p-4  ">
                                                <div className="bg-green-600  text-white flex items-center gap-1 w-12 rounded-2xl justify-center">
                                                    <span className="font-bold text-lg">{item?.predicted_rating || "0"}</span>
                                                    <FaStar />
                                                </div>
                                                <p className="mt-3 text-xl">{item?.review_text}</p>
                                                <p className="my-2 font-semibold text-gray-400">{item?.created_at}</p>
                                            </div>
                                        ))}
                                        <Link to={'/review-list'} className="font-bold text-blue-600 flex items-center">
                                            All {fetchReviewCount?.total_reviews} reviews
                                            <CgChevronRight className="size-5" />
                                        </Link>

                                    </>
                                )
                            }


                        </div>
                    </div>
                )
            }
        </>
    )
}

export default RecentReviewPage

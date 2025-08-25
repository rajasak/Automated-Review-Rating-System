
import ReviewSection from "./ReviewSection"
import useReviewCount from "../hooks/useReviewCount"
import useAllReviews from "../hooks/useAllReviews"
import AllReviewList from "./AllReviewList"

const ReviewListPage = () => {
  const { isLoading: isAllReviewsLoading } = useAllReviews();
  const { isLoading: isReviewCountLoading } = useReviewCount();

  const isLoading = isAllReviewsLoading || isReviewCountLoading;
  return (
    <>
      {
        isLoading ?
          <div className="flex justify-center items-center my-10">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          </div> :
          (
            <div className="my-6 max-w-[1600px] mx-auto p-4">
              <p className="text-2xl font-bold">All Reviews</p>
              <ReviewSection />
              <AllReviewList />
            </div>
          )
      }
    </>
  )
}

export default ReviewListPage
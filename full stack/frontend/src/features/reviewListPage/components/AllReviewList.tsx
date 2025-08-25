import { FaStar } from "react-icons/fa"
import useAllReviews from "../hooks/useAllReviews"
import Pagination from "./Pagination"

const AllReviewList = () => {

  const { isLoading, fetchAllData, next, previous, fetchApi } = useAllReviews()


  return (
    <div className="max-w-[1600px] mx-auto my-6">
      <div>
        <p className="text-2xl font-bold drop-shadow-md">Ratings & Reviews</p>
      </div>

      <div className="my-4 space-y-4">
        {
          isLoading ? (
            <p className="text-center text-lg my-10 animate-pulse text-white/70">Loading...</p>
          ) : (fetchAllData?.length == 0 && !isLoading) ? (
            <p className="text-center text-lg my-10 font-semibold">No Recent Reviews</p>
          ) : (
            fetchAllData?.map((item: any) => (
              <div key={item.id} className="border-b-3 border-gray-100 p-4  ">
                <div className="bg-green-600  text-white flex items-center gap-1 w-12 rounded-2xl justify-center">
                  <span className="font-bold text-lg">{item?.predicted_rating || "0"}</span>
                  <FaStar />
                </div>
                <p className="mt-3 text-xl">{item?.review_text}</p>
                <p className="my-2 font-semibold text-gray-400">{item?.created_at}</p>
              </div>
            ))
          )
        }

      </div>


      {/* pagination */}
      {(next || previous) && (
        <Pagination
          isLoading={isLoading}
          next={next}
          previous={previous}
          fetchApi={fetchApi}
        />
      )}
    </div>
  )
}

export default AllReviewList
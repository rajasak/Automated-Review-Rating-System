import { FaStar } from "react-icons/fa";
import useReviewCount from "../hooks/useReviewCount";

const ReviewSection = () => {
  const { fetchReviewCount } = useReviewCount();
  const total =
    fetchReviewCount?.ratings?.reduce(
      (acc: number, r: { count: number }) => acc + Number(r.count),
      0
    ) || 0;

  return (
    <div className="flex max-w-[1200px] mx-auto items-center gap-8">
      {/* Average rating */}
      <div className="p-4 border-r border-gray-400 w-[200px] flex flex-col items-center">
        <div className="bg-green-600 flex items-center gap-2 w-18 p-1 justify-center rounded-2xl">
          <span className="text-xl text-white font-bold">
            {fetchReviewCount?.average_rating}
          </span>
          <span>
            <FaStar size={20} className="text-white" />
          </span>
        </div>
        <p className="text-center text-gray-500 mt-2 font-semibold">
          {fetchReviewCount?.total_reviews} reviews
        </p>
      </div>

      {/* Rating progress bar */}
      <div className="flex-1 p-4">
        {fetchReviewCount?.ratings?.map((item: any) => {
          const percentage = total > 0 ? (item.count / total) * 100 : 0;

          // Set color dynamically
          let barColor = "bg-green-500";
          if (item.star === 2) barColor = "bg-orange-500";
          if (item.star === 1) barColor = "bg-red-500";

          return (
            <div key={item?.star} className="flex items-center gap-4 mb-2">
              <span className="text-lg font-semibold">{item?.star}★</span>
              <div className="h-2 w-full bg-gray-100 rounded">
                <div
                  className={`h-2 rounded ${barColor}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="font-semibold text-gray-500">
                {item.count || "0"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewSection;
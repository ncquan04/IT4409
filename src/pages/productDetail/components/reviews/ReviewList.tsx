import React from "react";
import ReviewItem from "./ReviewItem";
import type { IEvaluation } from "../../../../shared/models/evaluation-model";

interface ReviewListProps {
  evaluations: IEvaluation[];
}

const ReviewList: React.FC<ReviewListProps> = ({ evaluations }) => {
  return (
    <div className="w-full">
      {/* <h3 className="text-2xl font-bold text-gray-900 mb-8">Customer Reviews</h3> */}
      {evaluations.length > 0 ? (
        <div className="divide-y divide-gray-100">
          {evaluations.map((evaluation) => (
            <ReviewItem key={evaluation._id} evaluation={evaluation} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center bg-gray-50 rounded-2xl">
          <p className="text-gray-500 mb-4">There are no reviews yet.</p>
          <p className="text-sm text-gray-400">
            Be the first to share your thoughts!
          </p>
        </div>
      )}

      {/* Mock Pagination/Load More */}
      {evaluations.length > 0 && (
        <div className="mt-8 text-center">
          <button className="px-6 py-3 text-sm font-semibold text-gray-900 border border-gray-200 rounded-full hover:bg-button2 hover:text-white hover:border-button2 transition-all duration-300 hover:cursor-pointer">
            Show more reviews
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewList;

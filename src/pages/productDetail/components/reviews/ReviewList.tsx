import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReviewItem from "./ReviewItem";
import type { IEvaluation } from "../../../../shared/models/evaluation-model";

interface ReviewListProps {
  evaluations: IEvaluation[];
}

const ReviewList: React.FC<ReviewListProps> = ({ evaluations }) => {
  const [visibleCount, setVisibleCount] = useState(5);

  const rootReviews = evaluations.filter((e) => !e.parentEvaluationId);
  const visibleReviews = rootReviews.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <div className="w-full">
      {evaluations.length > 0 ? (
        <div className="space-y-4">
          <AnimatePresence>
            {visibleReviews.map((evaluation) => {
              const replies = evaluations.filter(
                (e) => e.parentEvaluationId === evaluation._id
              );
              return (
                <motion.div
                  key={evaluation._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ReviewItem evaluation={evaluation} />
                  {replies.length > 0 && (
                    <div className="-mt-4 pl-4 md:pl-16 space-y-4 pb-6">
                      {replies.map((reply) => (
                        <ReviewItem
                          key={reply._id}
                          evaluation={reply}
                          isReply
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      ) : (
        <div className="py-12 text-center bg-gray-50 rounded-2xl">
          <p className="text-gray-500 mb-4">There are no reviews yet.</p>
          <p className="text-sm text-gray-400">
            Be the first to share your thoughts!
          </p>
        </div>
      )}

      {/* Show More Button */}
      {visibleCount < rootReviews.length && (
        <div className="mt-8 text-center">
          <button
            onClick={handleShowMore}
            className="px-6 py-3 text-sm font-semibold text-gray-900 border border-gray-200 rounded-full hover:bg-button2 hover:text-white hover:border-button2 transition-all duration-300 hover:cursor-pointer"
          >
            Show more reviews
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewList;

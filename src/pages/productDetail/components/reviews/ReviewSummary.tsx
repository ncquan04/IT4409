import React, { useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IEvaluation } from "../../../../shared/models/evaluation-model";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";
import { AppRoutes } from "../../../../navigation";
import StarIcon2 from "../../../../icons/StarIcon2";

import EvaluationForm from "./EvaluationForm";

import { submitEvaluation } from "../../../../redux/async-thunk/evaluation.thunk";
import { useAppDispatch } from "../../../../redux/store";

interface ReviewSummaryProps {
  evaluations: IEvaluation[];
  productId?: string;
}

const ReviewSummary: React.FC<ReviewSummaryProps> = ({
  evaluations,
  productId,
}) => {
  const [showForm, setShowForm] = React.useState(false);
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const { averageRating, totalReviews, starCounts } = useMemo(() => {
    const total = evaluations.length;
    if (total === 0) {
      return {
        averageRating: 0,
        totalReviews: 0,
        starCounts: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
      };
    }

    const counts = evaluations.reduce(
      (acc, curr) => {
        acc[curr.rate] = (acc[curr.rate] || 0) + 1;
        return acc;
      },
      { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 } as Record<number, number>
    );

    const sum = evaluations.reduce((acc, curr) => acc + curr.rate, 0);
    const avg = (sum / total).toFixed(1);

    return { averageRating: avg, totalReviews: total, starCounts: counts };
  }, [evaluations]);

  useEffect(() => {
    if (location.state?.openReviewForm && isAuthenticated) {
      setShowForm(true);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, isAuthenticated, navigate, location.pathname]);

  const handleWriteReview = () => {
    if (!isAuthenticated) {
      navigate(AppRoutes.LOGIN, {
        state: {
          from: {
            pathname: location.pathname,
            search: location.search,
            state: { openReviewForm: true },
          },
        },
      });
      return;
    }
    setShowForm(true);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-2xl">
      <div className="flex flex-col gap-6">
        <div className="flex items-baseline gap-2">
          <span className="text-6xl font-black text-button2">
            {averageRating}
          </span>
          <span className="text-button2 font-medium">/ 5.0</span>
        </div>

        <div className="flex items-center gap-1 text-yellow-400">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon2
              key={star}
              className={`w-6 h-6 ${
                star <= Math.round(Number(averageRating))
                  ? "fill-current"
                  : "text-gray-200 fill-current"
              }`}
            />
          ))}
          <span className="ml-2 text-button2 font-medium">
            ({totalReviews} reviews)
          </span>
        </div>

        <div className="space-y-3 mt-2">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-1">
              <span className="w-3 font-medium text-sm text-gray-500">
                {star}
              </span>
              <StarIcon2 className="w-4 h-4 text-gray-300 fill-yellow-400" />
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-yellow-400 rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${
                      totalReviews > 0
                        ? (starCounts[star as keyof typeof starCounts] /
                            totalReviews) *
                          100
                        : 0
                    }%`,
                  }}
                ></div>
              </div>
              <span className="w-8 text-right text-sm text-gray-400 tabular-nums">
                {starCounts[star as keyof typeof starCounts]}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-2">
          Share your thoughts
        </h4>
        <p className="text-sm text-gray-500 mb-4">
          If you’ve used this product, share your thoughts with other customers
        </p>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!showForm ? (
              <motion.button
                key="write-review-btn"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                onClick={handleWriteReview}
                className="w-full py-3 px-4 bg-white border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-black hover:border-black transition-all duration-200 cursor-pointer"
              >
                Write a Review
              </motion.button>
            ) : (
              <motion.div
                key="evaluation-form"
                initial={{ opacity: 0, height: 0, y: 20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <EvaluationForm
                  onCancel={() => setShowForm(false)}
                  onSubmit={(data) => {
                    if (productId && user) {
                      dispatch(
                        submitEvaluation({
                          productId,
                          userId: user._id,
                          rate: data.rate,
                          content: data.content,
                          images: data.images,
                        })
                      );
                      setShowForm(false);
                    } else {
                      if (!isAuthenticated) {
                        handleWriteReview();
                      }
                    }
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ReviewSummary;

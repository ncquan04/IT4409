import React from "react";
import type { IEvaluation } from "../../../../shared/models/evaluation-model";

interface ReviewItemProps {
  evaluation: IEvaluation;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ evaluation }) => {
  return (
    <div className="py-8 first:pt-0">
      <div className="flex items-start gap-4">
        {/* Mock Avatar */}
        <div className="shrink-0 w-12 h-12 rounded-full bg-linear-to-br from-gray-100 to-gray-200 text-gray-600 font-bold text-lg flex items-center justify-center border-2 border-white shadow-sm">
          {evaluation.userId.charAt(0).toUpperCase()}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between mb-2">
            <h4 className="font-bold text-gray-900 text-base">
              {evaluation.userId}
            </h4>
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
              Oct 20, 2023
            </span>
          </div>

          <div className="flex items-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-4 h-4 ${
                  star <= evaluation.rate
                    ? "text-yellow-400 fill-current"
                    : "text-gray-200 fill-current"
                }`}
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>

          <div className="text-gray-600 leading-relaxed space-y-2 mb-4">
            {evaluation.content.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          {evaluation.imageUrlFeedback &&
            evaluation.imageUrlFeedback.length > 0 && (
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {evaluation.imageUrlFeedback.map((img, idx) => (
                  <div
                    key={idx}
                    className="shrink-0 relative group rounded-xl overflow-hidden cursor-zoom-in"
                  >
                    <img
                      src={img}
                      alt={`Feedback ${idx}`}
                      className="w-24 h-24 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;

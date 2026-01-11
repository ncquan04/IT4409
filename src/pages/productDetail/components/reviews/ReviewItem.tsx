import React from "react";
import type { IEvaluation } from "../../../../shared/models/evaluation-model";

import StarIcon2 from "../../../../icons/StarIcon2";

interface ReviewItemProps {
  evaluation: IEvaluation;
  isReply?: boolean;
}

const ReviewItem: React.FC<ReviewItemProps> = ({
  evaluation,
  isReply = false,
}) => {
  const isSeller =
    evaluation.userId === "Apex Store Support" || evaluation.userId === "admin";
  const displayDate = "Oct 20, 2023"; // Mock date

  if (isReply) {
    return (
      <div className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-100 relative">
        <div className="absolute top-0 left-6 -mt-2 w-4 h-4 bg-gray-50 border-t border-l border-gray-100 transform rotate-45"></div>

        <div className="flex items-start gap-4">
          <div
            className={`shrink-0 rounded-full flex items-center justify-center font-bold shadow-sm w-10 h-10 text-sm ${
              isSeller
                ? "bg-button2 text-white border-2 border-button2/80"
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            {isSeller ? "S" : evaluation.userId.charAt(0).toUpperCase()}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-gray-900 text-sm">
                  {evaluation.userId}
                </h4>
                {isSeller && (
                  <span className="px-2 py-0.5 bg-button2 text-white text-[10px] uppercase font-bold tracking-wider rounded-md">
                    Seller
                  </span>
                )}
              </div>
              <span className="text-xs text-gray-400">{displayDate}</span>
            </div>

            <div className="text-gray-600 text-sm leading-relaxed">
              {evaluation.content.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Normal root review
  return (
    <div className="py-6 first:pt-0">
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
              {displayDate}
            </span>
          </div>

          <div className="flex items-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon2
                key={star}
                className={`w-4 h-4 ${
                  star <= evaluation.rate
                    ? "text-yellow-400 fill-current"
                    : "text-gray-200 fill-current"
                }`}
              />
            ))}
          </div>

          <div
            className={`text-gray-600 leading-relaxed space-y-2 mb-4 ${
              isReply ? "text-sm" : ""
            }`}
          >
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

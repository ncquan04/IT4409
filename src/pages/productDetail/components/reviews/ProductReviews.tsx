import React, { useEffect } from "react";
import ReviewSummary from "./ReviewSummary";
import ReviewList from "./ReviewList";

import SectionTag from "../../../../components/common/sectionTag/SectionTag";

import { fetchEvaluationsByProductId } from "../../../../redux/async-thunk/evaluation.thunk";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";

interface ProductReviewsProps {
  productId?: string;
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ productId }) => {
  const dispatch = useAppDispatch();
  const { evaluations, isLoading } = useAppSelector(
    (state) => state.evaluation
  );

  useEffect(() => {
    if (productId) {
      dispatch(fetchEvaluationsByProductId(productId));
    }
  }, [productId, dispatch]);

  if (isLoading && evaluations.length === 0) {
    return (
      <div className="py-20 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
      </div>
    );
  }

  return (
    <section
      className="flex flex-col gap-8 md:gap-12 lg:gap-16 pt-10 border-t border-gray-100"
      aria-label="Product Reviews"
    >
      <SectionTag title="Ratings & Reviews" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-8 order-2 lg:order-1">
          <ReviewList evaluations={evaluations} />
        </div>
        <div className="lg:col-span-4 order-1 lg:order-2">
          <div className="sticky top-24">
            <ReviewSummary evaluations={evaluations} productId={productId} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReviews;

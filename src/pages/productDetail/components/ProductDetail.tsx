import { useState } from "react";
import type { Product } from "../../../shared/models/product-model";
import StarRating from "../../../components/common/starRating/StarRating";
import SectionLineSeparator from "../../home/components/SectionLineSeparator";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import QuantitySelector from "../../../components/common/quantitySelector/QuantitySelector";
import CommonButton from "../../../components/common/CommonButton";
import HeartIcon from "../../../icons/HeartIcon";
import ProductOfferInfo from "./ProductOfferInfo";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [imageIdx, setImageIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleBuy = () => {};

  const handleAddToWishList = () => {
    setAdded(true);
  };

  const handleRemoveFromWishList = () => {
    setAdded(false);
  };

  return (
    <section className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
      {/* Image gallery - hidden on mobile, vertical on desktop */}
      <nav
        className="hidden lg:block w-[120px] xl:w-[170px] h-[400px] xl:h-[600px]"
        aria-label="Product image thumbnails"
      >
        <Swiper
          direction="vertical"
          slidesPerView={4}
          spaceBetween={8}
          className="h-full"
        >
          {product.imageUrl.map((url, idx) => (
            <SwiperSlide key={idx}>
              <button
                className={`w-full h-[90px] xl:h-[138px] rounded-sm overflow-hidden cursor-pointer border ${
                  imageIdx === idx ? "border-button2" : "border-transparent"
                } hover:border-button2 transition-colors`}
                onClick={() => setImageIdx(idx)}
                aria-label={`View image ${idx + 1}`}
              >
                <img
                  src={url}
                  alt={`${product.title} - Image ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </nav>

      <div className="flex flex-col gap-4 md:w-[500px] lg:w-[400px] xl:w-[500px]">
        <figure className="w-full h-[300px] sm:h-[400px] md:h-[500px] xl:h-[600px] rounded-sm overflow-hidden bg-gray-100">
          <img
            src={product.imageUrl[imageIdx]}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </figure>

        <nav className="lg:hidden w-full" aria-label="Product image thumbnails">
          <Swiper
            direction="horizontal"
            slidesPerView={4}
            spaceBetween={8}
            breakpoints={{
              640: { slidesPerView: 5 },
              768: { slidesPerView: 6 },
            }}
          >
            {product.imageUrl.map((url, idx) => (
              <SwiperSlide key={idx}>
                <button
                  className={`w-full aspect-square rounded-sm overflow-hidden cursor-pointer border ${
                    imageIdx === idx ? "border-button2" : "border-transparent"
                  } hover:border-button2 transition-colors`}
                  onClick={() => setImageIdx(idx)}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img
                    src={url}
                    alt={`${product.title} - Image ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </nav>
      </div>

      <article className="flex flex-1 flex-col gap-3 md:gap-4 items-start justify-start">
        <h1 className="text-xl sm:text-2xl text-black font-semibold">
          {product.title}
        </h1>
        <div className="flex flex-row gap-2 flex-wrap items-center">
          {product.rating && <StarRating rating={product.rating} />}
          {product.rating && (
            <div className="w-[1px] h-4 bg-black" aria-hidden="true" />
          )}
          <span
            className={`text-sm font-normal ${
              product.quantity > 0 ? "text-button1" : "text-button2"
            }`}
            aria-live="polite"
          >
            {product.quantity > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <div
          className="flex flex-row gap-2 flex-wrap items-baseline"
          role="group"
          aria-label="Product pricing"
        >
          <span
            className={`text-xl sm:text-2xl font-normal ${
              product.salePrice ? "text-button2" : "text-black"
            } ${product.salePrice ? "line-through" : ""}`}
          >
            {product.price}
          </span>
          {product.salePrice && (
            <span className="text-xl sm:text-2xl text-black font-font-normal">
              {product.salePrice}
            </span>
          )}
        </div>
        <p className="text-sm font-normal text-black">{product.description}</p>
        <p className="text-sm font-normal text-black">
          {product.descriptionDetail}
        </p>
        <SectionLineSeparator />
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <QuantitySelector
            maxQuantity={product.quantity}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <div className="flex flex-row gap-3 md:gap-4 flex-1 sm:flex-none">
            <CommonButton
              label="Buy Now"
              onClick={handleBuy}
              style={{
                width: "100%",
                minWidth: 140,
                maxWidth: 165,
                height: 46,
              }}
              className="flex-1 sm:flex-none"
            />
            <button
              className="w-[44px] h-[44px] border-[1px] border-[#00000033] rounded-sm flex justify-center items-center hover:cursor-pointer shrink-0"
              onClick={added ? handleRemoveFromWishList : handleAddToWishList}
              aria-label={added ? "Remove from wishlist" : "Add to wishlist"}
              aria-pressed={added}
            >
              <HeartIcon fill={added ? "#db4444bb" : "transparent"} />
            </button>
          </div>
        </div>
        <ProductOfferInfo />
      </article>
    </section>
  );
};

export default ProductDetail;

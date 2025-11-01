import { useMemo } from "react";
import SaleTag from "./SaleTag";
import StarRating from "../starRating/StarRating";
import { useI18n } from "../../../contexts/I18nContext";
import type { Product } from "../../../shared/models/product-model";

interface ItemCardProps {
  item: Product;
}

const ItemCard = ({item} : ItemCardProps) => {
  const i18n = useI18n();

  const salePercent = useMemo(() => {
    if (item.salePrice && item.salePrice < item.price) {
      return Math.round(((item.price - item.salePrice) / item.price) * 100);
    }
    return 0;
  }, [item.price, item.salePrice]);

  const handleAddToCart = () => {};

  return (
    <article className="w-[270px] flex flex-col gap-4">
      <figure className="w-[270px] h-[250px] relative rounded-sm overflow-hidden group m-0">
        <img
          src={item.imageUrl[0]}
          alt={item.title}
          className="w-full h-full object-cover "
        />
        <SaleTag
          salePercent={salePercent}
          style={{ position: "absolute", top: 12, left: 12 }}
        />
        <button
          className="w-full pb-1 pt-1 absolute bottom-0 bg-black flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out cursor-pointer border-0"
          onClick={handleAddToCart}
          aria-label={i18n.t("Add to Cart")}
        >
          <span className="text-base text-white font-medium">
            {i18n.t("Add to Cart")}
          </span>
        </button>
      </figure>
      <section className="flex flex-col gap-2">
        <h3 className="text-base text-black font-medium m-0">{item.title}</h3>
        <div className="flex flex-row gap-3">
          <data
            className="text-base text-secondary2 font-medium"
            value={item.salePrice || item.price}
          >
            $
            {item.salePrice
              ? item.salePrice.toFixed(2)
              : item.price.toFixed(2)}
          </data>
          {item.salePrice && (
            <data
              className="text-base text-black opacity-50 line-through font-medium"
              value={item.price}
            >
              ${item.price.toFixed(2)}
            </data>
          )}
        </div>
        <div className="flex flex-row gap-2 items-center">
          <StarRating rating={item.rating || 0} />
          <span className="text-sm text-black opacity-50 font-medium">
            ({item.quantity})
          </span>
        </div>
      </section>
    </article>
  );
};

export default ItemCard;

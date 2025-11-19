import { useI18n } from "../../../contexts/I18nContext";
import type { Product } from "../../../shared/models/product-model";

interface ItemBannerProps {
  ratio: "16:9" | "1:1";
  item: Product;
}

const ItemBanner = ({ ratio, item }: ItemBannerProps) => {
  const i18n = useI18n();

  return (
    <article
      className="w-full h-full bg-black flex justify-center items-center rounded-sm overflow-hidden relative"
      aria-label={item.title}
    >
      <figure className="w-full h-full m-0 relative">
        <img
          src={item.imageUrl[0]}
          alt={item.title}
          className={
            ratio === "16:9"
              ? "w-full h-full object-cover"
              : "w-full h-full object-cover"
          }
        />
        <figcaption className="flex flex-col gap-2 md:gap-4 items-start absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-[30px] md:left-[30px]">
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-semibold">
            {item.title}
          </span>
          <p className="text-xs sm:text-sm text-white font-normal line-clamp-2">
            {item.description}
          </p>
          <a
            href="#"
            className="text-sm md:text-base text-white font-medium underline cursor-pointer hover:text-gray-200 transition-colors"
            aria-label={`${i18n.t("Shop Now")} - ${item.title}`}
          >
            {i18n.t("Shop Now")}
          </a>
        </figcaption>
      </figure>
    </article>
  );
};

export default ItemBanner;

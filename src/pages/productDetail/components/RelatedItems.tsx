import { useEffect, useState } from "react";
import type { Product } from "../../../shared/models/product-model";
import SectionTag from "../../../components/common/sectionTag/SectionTag";
import { useI18n } from "../../../contexts/I18nContext";
import ItemCard from "../../../components/common/itemCard/ItemCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";

interface RelatedItemsProps {
  product: Product;
}

const RelatedItems = ({ product }: RelatedItemsProps) => {
  const i18n = useI18n();
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    //get related item
  }, []);

  return (
    <section
      className="flex flex-col gap-4 md:gap-6 lg:gap-8"
      aria-labelledby="related-items-heading"
    >
      <SectionTag title="Related Items" />
      {items.length === 0 ? (
        <div
          className="w-full h-24 flex items-center justify-center"
          role="status"
        >
          <p className="text-gray-500">{i18n.t("No related items found")}</p>
        </div>
      ) : (
        <Swiper
          spaceBetween={15}
          slidesPerView={"auto"}
          style={{ width: "100%" }}
          breakpoints={{
            640: { spaceBetween: 20 },
            768: { spaceBetween: 25 },
            1024: { spaceBetween: 30 },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide
              key={index}
              className="!w-[200px] sm:!w-[220px] md:!w-[250px] lg:!w-[270px]"
            >
              <ItemCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default RelatedItems;

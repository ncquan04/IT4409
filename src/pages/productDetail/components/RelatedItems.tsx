import { useEffect, useState } from "react";
import type { Product } from "../../../shared/models/product-model";
import SectionTag from "../../../components/common/sectionTag/SectionTag";
import { useI18n } from "../../../contexts/I18nContext";
import "swiper/swiper.css";
import ItemSwiper from "../../../components/common/itemSwiper/ItemSwiper";

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
        <ItemSwiper items={items} />
      )}
    </section>
  );
};

export default RelatedItems;

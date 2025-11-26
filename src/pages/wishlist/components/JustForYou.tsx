import { useEffect, useState } from "react";
import { Product } from "../../../shared/models/product-model";
import SectionTag from "../../../components/common/sectionTag/SectionTag";
import ItemSwiper from "../../../components/common/itemSwiper/ItemSwiper";
import { SAMPLE_ITEMS } from "../../../samples";

const JustForYou = () => {
  const [personalizedItems, setPersonalizedItems] = useState<Product[]>([]);

  useEffect(() => {
    //fetch personalized items for the user
  }, []);

  return (
    <section
      className="flex flex-col gap-6 md:gap-8 lg:gap-12 px-0 sm:px-2 md:px-4"
      aria-labelledby="just-for-you-section-heading"
    >
      <h2 id="just-for-you-section-heading" className="sr-only">
        Just For You
      </h2>
      <SectionTag title="Just For You" />
      {/* <ItemSwiper items={personalizedItems} /> */}
      <div className="w-full">
        <ItemSwiper items={SAMPLE_ITEMS} />
      </div>
    </section>
  );
};

export default JustForYou;

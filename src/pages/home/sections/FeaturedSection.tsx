import SectionTag from "../../../components/common/sectionTag/SectionTag";
import { Product } from "../../../shared/models/product-model";
import ItemBanner from "../components/ItemBanner";

interface FeaturedSectionProps {
  featuredProducts: Product[];
}

const FeaturedSection = (props: FeaturedSectionProps) => {
  const fiveFeaturedProducts = props.featuredProducts.slice(0, 5);

  return (
    <section className="flex flex-col gap-8" aria-labelledby="featured-section-title">
      <div className="flex flex-row justify-between items-center">
        <SectionTag title="Featured" />
      </div>
      <div className="flex flex-row gap-8">
        <div className="w-128 h-128">
          <ItemBanner ratio="1:1" item={fiveFeaturedProducts[0]} />
        </div>
        <div className="flex flex-1 flex-col gap-8">
            <div className="w-full h-60">
                <ItemBanner ratio="16:9" item={fiveFeaturedProducts[1]} />
            </div>
            <div className="flex flex-row gap-8">
                <div className="w-1/2 h-60">
                    <ItemBanner ratio="16:9" item={fiveFeaturedProducts[2]} />
                </div>
                <div className="w-1/2 h-60">
                    <ItemBanner ratio="16:9" item={fiveFeaturedProducts[3]} />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;

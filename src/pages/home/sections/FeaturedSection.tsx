import SectionTag from "../../../components/common/sectionTag/SectionTag";
import { Product } from "../../../shared/models/product-model";
import ItemBanner from "../components/ItemBanner";

interface FeaturedSectionProps {
    featuredProducts: Product[];
}

const FeaturedSection = (props: FeaturedSectionProps) => {
    const fiveFeaturedProducts = props.featuredProducts.slice(0, 5);

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-row justify-between items-center">
                <SectionTag title="Categories" />
            </div>
            <div className="w-96 h-96">
                <ItemBanner
                    ratio="1:1"
                    item={fiveFeaturedProducts[0]}
                />
            </div>
        </div>
    )
}

export default FeaturedSection;
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTag from "../../../components/common/sectionTag/SectionTag";
import type { Product } from "../../../shared/models/product-model";
import ItemCard from "../../../components/common/itemCard/ItemCard";
import CommonButton from "../../../components/common/CommonButton";

interface ThisMonthSectionProps {
    bestSellingProducts: Product[];
}

const ThisMonthSection = (props: ThisMonthSectionProps) => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-row justify-between items-center">
                <SectionTag title="Today's" />
            <CommonButton
                label="View All Products"
                onClick={() => {}}
                style={{ width: 159, height: 56, alignSelf: "center" }}
            />
            </div>
            <Swiper
                spaceBetween={30}
                slidesPerView={"auto"}
                style={{ width: "100%" }}
            >
                {props.bestSellingProducts.slice(0, 8).map((item, index) => (
                    <SwiperSlide key={index} style={{ width: 270 }}>
                        <ItemCard
                            item={item}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            
        </div>
    )
}

export default ThisMonthSection;
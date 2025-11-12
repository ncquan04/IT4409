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
        <section className="flex flex-col gap-8" aria-labelledby="thismonth-section-title">
            <div className="flex flex-row justify-between items-center">
                <SectionTag title="This Month" />
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
            
        </section>
    )
}

export default ThisMonthSection;
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
        <section className="flex flex-col gap-4 md:gap-6 lg:gap-8" aria-labelledby="thismonth-section-title">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <SectionTag title="This Month" />
            <CommonButton
                label="View All Products"
                onClick={() => {}}
                style={{ alignSelf: "center" }}
                className="w-full sm:w-40 md:w-44 h-12 md:h-14"
            />
            </div>
            <Swiper
                spaceBetween={15}
                slidesPerView={"auto"}
                style={{ width: "100%" }}
                breakpoints={{
                    640: { spaceBetween: 20 },
                    768: { spaceBetween: 25 },
                    1024: { spaceBetween: 30 }
                }}
            >
                {props.bestSellingProducts.slice(0, 8).map((item, index) => (
                    <SwiperSlide key={index} className="!w-[200px] sm:!w-[220px] md:!w-[250px] lg:!w-[270px]">
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
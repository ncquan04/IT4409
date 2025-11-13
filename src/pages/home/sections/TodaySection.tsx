import ItemCard from "../../../components/common/itemCard/ItemCard";
import SectionTag from "../../../components/common/sectionTag/SectionTag";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import CommonButton from "../../../components/common/CommonButton";
import type { Product } from "../../../shared/models/product-model";

interface TodaySectionProps {
    items: Product[];
}

const TodaySection = (props: TodaySectionProps) => {
    return (
        <section className="flex flex-col gap-4 md:gap-6 lg:gap-8" aria-labelledby="today-section-title">
            <SectionTag title="Today's" />
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
                {props.items.slice(0, 8).map((item, index) => (
                    <SwiperSlide key={index} className="!w-[200px] sm:!w-[220px] md:!w-[250px] lg:!w-[270px]">
                        <ItemCard 
                            item={item}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <CommonButton 
                label="View All Products"
                onClick={() => {}}
                style={{ alignSelf: "center" }}
                className="w-full sm:w-64 md:w-56 h-12 md:h-14"
            />
        </section>
    );
}

export default TodaySection;
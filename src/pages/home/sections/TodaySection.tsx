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
        <section className="flex flex-col gap-8" aria-labelledby="today-section-title">
            <SectionTag title="Today's" />
            <Swiper
                spaceBetween={30}
                slidesPerView={"auto"}
                style={{ width: "100%" }}
            >
                {props.items.slice(0, 8).map((item, index) => (
                    <SwiperSlide key={index} style={{ width: 270 }}>
                        <ItemCard 
                            item={item}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <CommonButton 
                label="View All Products"
                onClick={() => {}}
                style={{ width: 234, height: 56, alignSelf: "center" }}
            />
        </section>
    );
}

export default TodaySection;
import ItemCard from "../../../components/common/itemCard/ItemCard";
import SectionTag from "../../../components/common/sectionTag/SectionTag";
import type { Product } from "../../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import CommonButton from "../../../components/common/CommonButton";

interface TodaySectionProps {
    items: Product[];
}

const TodaySection = (props: TodaySectionProps) => {
    return (
        <div className="flex flex-col gap-8">
            <SectionTag title="Today's" />
            <Swiper
                spaceBetween={30}
                slidesPerView={"auto"}
                style={{ width: "100%" }}
            >
                {props.items.slice(0, 8).map((item, index) => (
                    <SwiperSlide key={index} style={{ width: 270 }}>
                        <ItemCard 
                            name={item.name}
                            price={item.price}
                            image={"https://placehold.co/270x250"}
                            available={1}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <CommonButton 
                label="View All Products"
                onClick={() => {}}
                style={{ width: 234, height: 56, alignSelf: "center" }}
            />
        </div>
    );
}

export default TodaySection;
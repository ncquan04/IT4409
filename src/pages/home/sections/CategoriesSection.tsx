import SectionTag from "../../../components/common/sectionTag/SectionTag";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import "swiper/swiper.css";
import CategoryCard from "../components/CategoryCard";
import type { Category } from "../../../shared/models/category-model";
import LeftRightNavigator from "../components/LeftRightNavigator";
import { useRef } from "react";

interface CategoriesSectionProps {
    categories: Category[];
}

const CategoriesSection = (props: CategoriesSectionProps) => {
    const swiperRef = useRef<SwiperRef>(null);

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-row justify-between items-center">
                <SectionTag title="Categories" />
                <LeftRightNavigator 
                    onLeftClick={() => {
                        swiperRef.current?.swiper.slidePrev();
                    }}
                    onRightClick={() => {
                        swiperRef.current?.swiper.slideNext();
                    }}
                />
            </div>
            <Swiper
                ref={swiperRef}
                spaceBetween={30}
                slidesPerView={"auto"}
                style={{ width: "100%" }}
            >
                {props.categories.map((category, index) => (
                    <SwiperSlide key={index} style={{ width: 170 }}>
                        <CategoryCard category={category} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CategoriesSection;
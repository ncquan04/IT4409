import SectionTag from "../../../components/common/sectionTag/SectionTag";
import type { Category } from "../../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import CategoryCard from "../components/CategoryCard";

interface CategoriesSectionProps {
    categories: Category[];
}

const CategoriesSection = (props: CategoriesSectionProps) => {
    return (
        <div className="flex flex-col gap-8">
            <SectionTag title="Categories" />
            <Swiper
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
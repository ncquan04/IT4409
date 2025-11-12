import { HORIZONTAL_PADDING_REM } from "../../constants";
import { SAMPLE_CATEGORIES, SAMPLE_ITEMS } from "../../samples";
import BannerSwiper from "./components/BannerSwiper";
import CategorySelector from "./components/CategorySelector";
import SectionLineSeparator from "./components/SectionLineSeparator";
import CategoriesSection from "./sections/CategoriesSection";
import FeaturedSection from "./sections/FeaturedSection";
import ThisMonthSection from "./sections/ThisMonthSection";
import TodaySection from "./sections/TodaySection";

const HomePage = () => {
  return (
    <main
      style={{ paddingLeft: `${HORIZONTAL_PADDING_REM + 'rem'}`, paddingRight: `${HORIZONTAL_PADDING_REM + 'rem'}` }}
      className="flex flex-col gap-8"
    >
      <div className="flex flex-row gap-16 pb-16 items-center">
        <CategorySelector categories={SAMPLE_CATEGORIES} />
        <div className="w-[1px] self-stretch bg-gray-300" role="separator" aria-orientation="vertical" />
        <BannerSwiper 
          products={SAMPLE_ITEMS}
        />
      </div>
      <TodaySection items={SAMPLE_ITEMS} />
      <SectionLineSeparator />
      <CategoriesSection categories={SAMPLE_CATEGORIES} />
      <SectionLineSeparator />
      <ThisMonthSection bestSellingProducts={SAMPLE_ITEMS} />
      <SectionLineSeparator />
      <FeaturedSection featuredProducts={SAMPLE_ITEMS}/>
    </main>
  )
};

export default HomePage;

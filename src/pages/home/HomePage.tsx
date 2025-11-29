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
      className="flex flex-col gap-4 md:gap-6 lg:gap-8 px-4 sm:px-6 md:px-8 lg:px-[var(--horizontal-padding)]"
      style={{ '--horizontal-padding': `${HORIZONTAL_PADDING_REM}rem` } as React.CSSProperties} 
    >
      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-16 pb-4 md:pb-8 lg:pb-16 lg:items-center">
        <CategorySelector categories={SAMPLE_CATEGORIES} />
        <div className="hidden lg:block w-[1px] self-stretch bg-gray-300" role="separator" aria-orientation="vertical" />
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

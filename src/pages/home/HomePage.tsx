import { HORIZONTAL_PADDING_REM } from "../../constants";
import { SAMPLE_CATEGORIES, SAMPLE_ITEMS } from "../../samples";
import SectionLineSeparator from "./components/SectionLineSeparator";
import CategoriesSection from "./sections/CategoriesSection";
import ThisMonthSection from "./sections/ThisMonthSection";
import TodaySection from "./sections/TodaySection";

const HomePage = () => {
  return (
    <div
      style={{ paddingLeft: `${HORIZONTAL_PADDING_REM + 'rem'}`, paddingRight: `${HORIZONTAL_PADDING_REM + 'rem'}` }}
      className="flex flex-col gap-8"
    >
      <TodaySection items={SAMPLE_ITEMS} />
      <SectionLineSeparator />
      <CategoriesSection categories={SAMPLE_CATEGORIES} />
      <SectionLineSeparator />
      <ThisMonthSection bestSellingProducts={SAMPLE_ITEMS} />
    </div>
  )
};

export default HomePage;

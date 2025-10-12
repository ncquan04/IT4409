import { useI18n } from "../../../contexts/I18nContext";
import { languageNames } from "../../../i18n";
import ArrowDownIcon from "../../../icons/ArrowDownIcon";

const TopHeader = () => {
  const i18n = useI18n();
  const { currentLocale } = useI18n();

  return (
    <aside
      className="w-full h-[48px] bg-black justify-between items-center flex flex-row pl-6 pr-6"
      aria-label="Promotions and language selector"
    >
      <div aria-hidden="true" />
      <div className="flex flex-row gap-2 items-center">
        <p className="text-white text-sm m-0">
          {i18n.t(
            "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
          )}
        </p>
        <a href="#" className="text-sm text-white underline">
          {i18n.t("Shop now")}
        </a>
      </div>
      <div className="p-2 justify-center items-center gap-2 flex flex-row">
        <span className="text-sm text-white">
          {i18n.t(languageNames[currentLocale])}
        </span>
        <ArrowDownIcon width={12} height={12} fill="white" aria-hidden="true" />
      </div>
    </aside>
  );
};

export default TopHeader;

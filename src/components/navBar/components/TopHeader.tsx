import { useI18n } from "../../../contexts/I18nContext";
import { languageNames } from "../../../i18n";
import ArrowDownIcon from "../../../icons/ArrowDownIcon";

const TopHeader = () => {
  const i18n = useI18n();
  const { currentLocale } = useI18n();

  return (
    <div className="w-full h-[48px] bg-black justify-between items-center flex flex-row pl-6 pr-6">
      <div></div>
      <div className="flex flex-row gap-2">
        <text className="text-white text-sm">
          {i18n.t(
            "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
          )}
        </text>
        <text className="text-sm text-white underline">
          {i18n.t("Shop now")}
        </text>
      </div>
      <div className="p-2 justify-center items-center gap-2 flex flex-row">
        <text className="text-sm text-white">
          {i18n.t(languageNames[currentLocale])}
        </text>
        <ArrowDownIcon width={12} height={12} fill="white" />
      </div>
    </div>
  );
};

export default TopHeader;

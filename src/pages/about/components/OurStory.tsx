import { useI18n } from "../../../contexts/I18nContext";
import OurStoryImage from "../../../assets/images/OurStory.png";

const OurStory = () => {
  const i18n = useI18n();

  return (
    <div className="flex flex-row justify-between items-center -mr-12 gap-16">
      <div className="flex flex-1 flex-wrap flex-col gap-10">
        <span className="text-[54px] font-semibold text-black ">
          {i18n.t("Our Story")}
        </span>
        <span className="text-base font-medium text-black whitespace-pre-line">
          {i18n.t(
            "Launched in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. \n Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer."
          )}
        </span>
      </div>
      <img src={OurStoryImage} />
    </div>
  );
};

export default OurStory;

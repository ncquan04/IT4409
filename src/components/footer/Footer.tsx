import { useI18n } from "../../contexts/I18nContext";
import AccountSection from "./components/AccountSection";
import QuickLinkSection from "./components/QuickLinkSection";
import SupportSection from "./components/SupportSection";

const Footer = () => {
  const i18n = useI18n();

  return (
    <footer className="w-full bg-black pt-12 pb-6 pl-6 pr-6" role="contentinfo">
      <div className=" flex flex-row justify-around gap-6 pb-12">
        <section className="flex-1/4 max-w-40" aria-label="Brand">
          <p className="text-xl font-semibold text-white">Apex</p>
        </section>
        <SupportSection />
        <AccountSection />
        <QuickLinkSection />
      </div>
      <p className="text-base text-center text-gray-500">
        &copy; 2024 Apex. {i18n.t("All rights reserved.")}
      </p>
    </footer>
  );
};

export default Footer;

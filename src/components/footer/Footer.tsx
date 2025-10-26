import { useI18n } from "../../contexts/I18nContext";
import CustomerServiceIcon from "../../icons/CustomerServiceIcon";
import DeliveryIcon from "../../icons/DeliveryIcon";
import AccountSection from "./components/AccountSection";
import FeatureCard from "./components/FeatureCard";
import QuickLinkSection from "./components/QuickLinkSection";
import SupportSection from "./components/SupportSection";

const Footer = () => {
  const i18n = useI18n();

  return (
    <main className="flex flex-col pt-12 gap-24">
      <section className="flex flex-row justify-center items-start gap-16" aria-label="Features">
        <FeatureCard 
          icon={<DeliveryIcon width={40} height={40}/>}
          title={i18n.t("FREE AND FAST DELIVERY")}
          description={i18n.t("Free delivery for all orders over $140")}
        />
        <FeatureCard 
          icon={<CustomerServiceIcon width={40} height={40}/>}
          title={i18n.t("24/7 CUSTOMER SERVICE")}
          description={i18n.t("Friendly 24/7 customer support")}
        />
        <FeatureCard 
          icon={<CustomerServiceIcon width={40} height={40}/>}
          title={i18n.t("MONEY BACK GUARANTEE")}
          description={i18n.t("We return money within 30 days")}
        />
      </section>
      <footer className="w-full bg-black pt-12 pb-6 pl-6 pr-6" role="contentinfo">
        <nav className="flex flex-row justify-around gap-6 pb-12" aria-label="Footer navigation">
          <section className="flex-1/4 max-w-40" aria-label="Brand">
            <p className="text-xl font-semibold text-white">Apex</p>
          </section>
          <SupportSection />
          <AccountSection />
          <QuickLinkSection />
        </nav>
        <p className="text-base text-center text-gray-500">
          &copy; 2024 Apex. {i18n.t("All rights reserved.")}
        </p>
      </footer>
    </main>
  );
};

export default Footer;

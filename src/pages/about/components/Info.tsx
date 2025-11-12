import DollarIcon from "../../../icons/DollarIcon";
import MarketIcon from "../../../icons/MarketIcon";
import MoneyBagIcon from "../../../icons/MoneyBagIcon";
import ShoppingBagIcon from "../../../icons/ShoppingBagIcon";
import InfoCard from "./InfoCard";

const Infos = [
  {
    icon: MarketIcon,
    title: "10.5K",
    description: "Sellers active our site",
  },
  {
    icon: DollarIcon,
    title: "33K",
    description: "Monthly product sale",
  },
  {
    icon: ShoppingBagIcon,
    title: "45.5K",
    description: "Customers active in our site",
  },
  {
    icon: MoneyBagIcon,
    title: "25K",
    description: "Annual gross sale in our site",
  },
];

const Info = () => {
  return (
    <div className="flex flex-row gap-8 justify-around items-center">
      {Infos.map((info, index) => (
        <InfoCard
          key={index}
          icon={info.icon}
          title={info.title}
          description={info.description}
        />
      ))}
    </div>
  );
};

export default Info;

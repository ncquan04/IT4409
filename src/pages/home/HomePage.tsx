import CameraIcon from "../../icons/CameraIcon";
import ComputerIcon from "../../icons/ComputerIcon";
import GamingIcon from "../../icons/GamingIcon";
import HeadphoneIcon from "../../icons/HeadPhoneIcon";
import PhoneIcon from "../../icons/PhoneIcon";
import SmartwatchIcon from "../../icons/SmartwatchIcon";
import CategoriesSection from "./sections/CategoriesSection";
import TodaySection from "./sections/TodaySection";

const SAMPLE_ITEMS = [
  {
    id: "1",
    name: "Sample Product 1",
    price: 29.99,
    description: "This is a sample product description.",
  },
  {
    id: "2",
    name: "Sample Product 2",
    price: 49.99,
    description: "This is another sample product description.",
  },
  {
    id: "3",
    name: "Sample Product 3",
    price: 19.99,
    description: "This is yet another sample product description.",
  },
  {
    id: "4",
    name: "Sample Product 4",
    price: 99.99,
    description: "This is a different sample product description.",
  },
  {
    id: "5",
    name: "Sample Product 5",
    price: 59.99,
    description: "This is a unique sample product description.",
  },
]

const SAMPLE_CATEGORIES = [
  {
    name: "Phones",
    icon: <PhoneIcon />,
  },
  {
    name: "Computers",
    icon: <ComputerIcon />,
  },
  {
    name: "Smartwatch",
    icon: <SmartwatchIcon />,
  },
  {
    name: "Camera",
    icon: <CameraIcon />,
  },
  {
    name: "Headphones",
    icon: <HeadphoneIcon />,
  },
  {
    name: "Gaming",
    icon: <GamingIcon />,
  }
]

const HomePage = () => {
  return (
    <div className="flex flex-col gap-16 pl-8 pr-8">
      <TodaySection items={SAMPLE_ITEMS} />
      <CategoriesSection categories={SAMPLE_CATEGORIES} />
    </div>
  )
};

export default HomePage;

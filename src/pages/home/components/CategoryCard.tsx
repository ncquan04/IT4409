
import { useState, type ComponentType } from "react";
import type { Category } from "../../../shared/models/category-model";
import PhoneIcon from "../../../icons/PhoneIcon";
import ComputerIcon from "../../../icons/ComputerIcon";
import SmartwatchIcon from "../../../icons/SmartwatchIcon";
import CameraIcon from "../../../icons/CameraIcon";
import HeadphoneIcon from "../../../icons/HeadPhoneIcon";
import GamingIcon from "../../../icons/GamingIcon";

const CategoryCard = ({ category }: { category: Category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent: ComponentType<{ stroke?: string }> | null = (() => {
    switch (category.name.toLowerCase()) {
      case "phones":
        return PhoneIcon;
      case "computers":
        return ComputerIcon;
      case "smartwatch":
        return SmartwatchIcon;
      case "camera":
        return CameraIcon;
      case "headphones":
        return HeadphoneIcon;
      case "gaming":
        return GamingIcon;
      default:
        return null;
    }
  })();

  return (
    <article
      className={`w-[170px] h-[145px] flex flex-col justify-center items-center gap-2 rounded-sm hover:bg-secondary2 hover:cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderWidth: 1,
        borderColor: isHovered ? "#DB4444" : "#00000033"
      }}
      role="button"
      tabIndex={0}
      aria-label={`Category: ${category.name}`}
    >
      {IconComponent ? <IconComponent stroke={isHovered ? "white" : "black"} /> : null}
      <span className={`text-base font-medium ${isHovered ? "text-white" : "text-black"}`}>{category.name}</span>
    </article>
  );
};

export default CategoryCard;

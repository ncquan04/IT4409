import type { Category } from "../../../types";

import { useState } from "react";

const CategoryCard = ({ category }: { category: Category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = category.icon;
  return (
    <div
      className={`w-[170px] h-[145px] flex flex-col justify-center items-center gap-2 rounded-sm border-[1px] border-[${isHovered ? "#DB4444" : "#00000033"}] hover:bg-secondary2 hover:cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {IconComponent && typeof IconComponent === "function"
        ? <IconComponent stroke={isHovered ? "white" : 'black'} />
        : IconComponent}
      <span className={`text-base font-medium ${isHovered ? "text-white" : "text-black"}`}>{category.name}</span>
    </div>
  );
};

export default CategoryCard;

import type { Category } from "../../../types";

const CategoryCard = ({category}: {category: Category}) => {
    return (
        <div className="w-[170px] h-[145px] flex flex-col justify-center items-center gap-2 rounded-sm border-[1px] border-[#00000033]">
            {category.icon}
            <span className="text-base font-medium text-black">{category.name}</span>
        </div>
    );
}

export default CategoryCard;
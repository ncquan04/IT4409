import type { Category } from "../../../shared/models/category-model";

interface CategorySelectorProps {
    categories: Category[]
}

const CategorySelector = (props: CategorySelectorProps) => {
    const handleSelectCategory = () => {

    }

    return (
        <nav className="flex flex-col gap-4 w-full lg:w-auto" aria-label="Category navigation">
            <ul className="list-none p-0 m-0 flex flex-row lg:flex-col gap-2 md:gap-4 overflow-x-auto lg:overflow-visible">
                {props.categories.map((category, index) => (
                    <li key={index} className="flex-shrink-0">
                        <button 
                            onClick={handleSelectCategory}
                            className="text-sm md:text-base text-black font-medium hover:cursor-pointer bg-transparent border-0 p-0 text-left w-full hover:underline whitespace-nowrap"
                            aria-label={`Select ${category.name} category`}
                        >
                            {category.name}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default CategorySelector;
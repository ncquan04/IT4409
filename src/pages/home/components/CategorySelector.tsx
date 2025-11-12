import type { Category } from "../../../shared/models/category-model";

interface CategorySelectorProps {
    categories: Category[]
}

const CategorySelector = (props: CategorySelectorProps) => {
    const handleSelectCategory = () => {

    }

    return (
        <nav className="flex flex-col gap-4" aria-label="Category navigation">
            <ul className="list-none p-0 m-0 flex flex-col gap-4">
                {props.categories.map((category, index) => (
                    <li key={index}>
                        <button 
                            onClick={handleSelectCategory}
                            className="text-base text-black font-medium hover:cursor-pointer bg-transparent border-0 p-0 text-left w-full hover:underline"
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
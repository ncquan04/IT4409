import { useNavigate, useSearchParams } from "react-router";
import { useAppDispatch, useAppSelector, type RootState } from "../../../redux/store";
import { useEffect } from "react";
import categoriesAync from "../../../redux/async-thunk/categories.thunk";

const SearchFilterPanel = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const categories = useAppSelector((state: RootState) => state.categories.categories);

    const updateParams = (params: Record<string, string | undefined>) => {
        const newParams = new URLSearchParams(searchParams);

        Object.entries(params).forEach(([key, value]) => {
            if (!value) newParams.delete(key);
            else newParams.set(key, value);
        });

        navigate({
            pathname: "/search",
            search: newParams.toString(),
        });
    };

    useEffect(() => {
        dispatch(categoriesAync.fectchCategories());
    }, []);

    return (
        <div className="w-64 space-y-4">
            {/* Category */}
            <div>
                <p className="font-medium mb-2">Danh mục</p>
                {categories.map((cat) => (
                    <button
                        key={cat._id}
                        className="block text-left text-sm hover:text-blue-500"
                        onClick={() => updateParams({ categoryId: cat._id })}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* Price */}
            <div>
                <p className="font-medium mb-2">Giá</p>
                <button
                    onClick={() =>
                        updateParams({
                            minPrice: "5000000",
                            maxPrice: "10000000",
                        })
                    }
                >
                    5tr – 10tr
                </button>
            </div>
        </div>
    );
};

export default SearchFilterPanel;

import { useEffect, useCallback } from "react";
import { useSearchParams } from "react-router";
import { useAppDispatch, useAppSelector, type RootState } from "../../redux/store";
import searchAsync from "../../redux/async-thunk/search.thunk";
import SearchItemList from "./components/productItem";
import SearchFilterPanel from "./components/SearchFilterPanel";

const SearchPage = () => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const { products, page, totalPages, isLoading } = useAppSelector(
        (state: RootState) => state.search,
    );

    // ===== base query (từ SearchBar) =====
    const q = searchParams.get("q") || "";

    // ===== filters (chỉ có ở SearchPage) =====
    const categoryId = searchParams.get("categoryId") || undefined;
    const specKey = searchParams.get("specKey") || undefined;
    const specValue = searchParams.get("specValue") || undefined;

    const minPrice = searchParams.get("minPrice")
        ? Number(searchParams.get("minPrice"))
        : undefined;

    const maxPrice = searchParams.get("maxPrice")
        ? Number(searchParams.get("maxPrice"))
        : undefined;

    const buildPayload = (page: number) => ({
        userInput: q,
        categoryId,
        specKey,
        specValue,
        minPrice,
        maxPrice,
        page,
    });

    /* ===== fetch page 1 khi q hoặc filter đổi ===== */
    useEffect(() => {
        if (!q) return;

        dispatch(searchAsync.searchProducts(buildPayload(1)));
    }, [q, categoryId, specKey, specValue, minPrice, maxPrice]);

    /* ===== infinite scroll ===== */
    const loadMore = useCallback(() => {
        if (isLoading) return;
        if (page! >= totalPages) return;

        dispatch(searchAsync.searchProducts(buildPayload(page! + 1)));
    }, [isLoading, page, totalPages, q, categoryId, specKey, specValue, minPrice, maxPrice]);

    const hasMore = page! < totalPages;

    return (
        <div className="flex flex-col gap-6">
            {/* LEFT: filter chỉ tồn tại ở SearchPage */}
            <SearchFilterPanel />

            {/* RIGHT: result */}
            <SearchItemList
                items={products}
                isLoading={isLoading}
                hasMore={hasMore}
                loadMore={loadMore}
            />
        </div>
    );
};

export default SearchPage;

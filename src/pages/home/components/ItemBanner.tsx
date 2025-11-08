import { useI18n } from "../../../contexts/I18nContext";
import type { Product } from "../../../shared/models/product-model"

interface ItemBannerProps {
    ratio: '16:9' | '1:1',
    item: Product;
}

const ItemBanner = ({
    ratio,
    item
}: ItemBannerProps) => {
    const i18n = useI18n();

    if (ratio === '16:9') {
        return (
            <div className="w-full h-full bg-black flex justify-center items-center rounded-sm overflow-hidden">
                <img 
                    src={item.imageUrl[0]}
                    alt={item.title}
                    className="w-full h-full object-contain"
                />
            </div>
        )
    }

    return (
        <div className="w-full h-full bg-black flex justify-center items-center rounded-sm overflow-hidden relative">
            <img 
                src={item.imageUrl[0]}
                alt={item.title}
                className="w-full h-full object-contain"
            />
            <div className="flex flex-col gap-4 items-start absolute bottom-[30px] left-[30px]">
                <span className="text-white text-2xl font-semibold">{item.title}</span>
                <p className="text-white text-sm font-normal">{item.description}</p>
                <span className="text-white text-base font-medium underline cursor-pointer">
                    {i18n.t("Shop Now")}
                </span>
            </div>
        </div>
    )
}

export default ItemBanner;
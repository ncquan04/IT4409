import { useI18n } from "../../../contexts/I18nContext";
import type { Product } from "../../../shared/models/product-model"

interface ItemBannerProps {
    ratio: '16:9' | '1:1',
    item: Product;
}


const ItemBanner = ({ ratio, item }: ItemBannerProps) => {
    const i18n = useI18n();

    return (
        <section
            className="w-full h-full bg-black flex justify-center items-center rounded-sm overflow-hidden relative"
            aria-label={item.title}
        >
            <figure className="w-full h-full m-0 relative">
                <img
                    src={item.imageUrl[0]}
                    alt={item.title}
                    className={
                        ratio === '16:9'
                            ? "w-full h-full object-cover"
                            : "w-full h-full object-contain"
                    }
                />
                <figcaption className="flex flex-col gap-4 items-start absolute bottom-[30px] left-[30px]">
                    <span className="text-white text-2xl font-semibold">{item.title}</span>
                    <p className="text-white text-sm font-normal">{item.description}</p>
                    <a
                        href="#"
                        className="text-white text-base font-medium underline cursor-pointer"
                        aria-label={i18n.t("Shop Now") as string}
                    >
                        {i18n.t("Shop Now")}
                    </a>
                </figcaption>
            </figure>
        </section>
    );
}

export default ItemBanner;
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { Product } from "../../../shared/models/product-model";
import { useI18n } from "../../../contexts/I18nContext";

interface BannerSwiperProps {
    products: Product[];
}

const BannerSwiper = ({ products }: BannerSwiperProps) => {
    const i18n = useI18n();

    return (
        <section className="flex-1 min-w-0" style={{ aspectRatio: '892/344' }} aria-label="Featured products carousel">
            <style>{`
                .banner-swiper .swiper-pagination-bullet {
                    background: white;
                    opacity: 0.5;
                }
                .banner-swiper .swiper-pagination-bullet-active {
                    background: #ef4444;
                    opacity: 1;
                }
            `}</style>
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ 
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="banner-swiper w-full h-full rounded-sm"
            >
                {products.map((product) => (
                    <SwiperSlide key={product._id}>
                        <article
                            className="w-full h-full bg-black flex justify-center items-center overflow-hidden relative"
                            aria-label={product.title}
                        >
                            <figure className="w-full h-full m-0 relative">
                                <img
                                    src={product.imageUrl[0]}
                                    alt={product.title}
                                    className="w-full h-full object-cover"
                                />
                                <figcaption className="flex flex-col gap-4 items-start absolute bottom-[30px] left-[30px]">
                                    <span className="text-white text-2xl font-semibold">
                                        {product.title}
                                    </span>
                                    <p className="text-white text-sm font-normal">
                                        {product.description}
                                    </p>
                                    <a
                                        href="#"
                                        className="text-white text-base font-medium underline cursor-pointer hover:text-gray-200 transition-colors"
                                        aria-label={`${i18n.t("Shop Now")} - ${product.title}`}
                                    >
                                        {i18n.t("Shop Now")}
                                    </a>
                                </figcaption>
                            </figure>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default BannerSwiper;
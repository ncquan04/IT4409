import { useEffect, useState } from "react";
import { Product } from "../../shared/models/product-model";
import Wishlist from "./components/Wishlist";
import { SAMPLE_ITEMS } from "../../samples";
import { HORIZONTAL_PADDING_REM } from "../../constants";
import JustForYou from "./components/JustForYou";

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  useEffect(() => {
    //get wishlist items
  }, []);

  return (
    <main
      className="flex flex-col gap-12 md:gap-16 lg:gap-24 px-4 sm:px-6 md:px-8 lg:px-[var(--horizontal-padding)] py-4 md:py-6 lg:py-8"
      style={
        {
          "--horizontal-padding": `${HORIZONTAL_PADDING_REM}rem`,
        } as React.CSSProperties
      }
    >
      <section aria-labelledby="wishlist-heading">
        <h1 id="wishlist-heading" className="sr-only">
          Wishlist
        </h1>
        <Wishlist products={SAMPLE_ITEMS} />
      </section>
      <section aria-labelledby="just-for-you-heading">
        <h2 id="just-for-you-heading" className="sr-only">
          Just For You
        </h2>
        <JustForYou />
      </section>
    </main>
  );
};

export default WishlistPage;

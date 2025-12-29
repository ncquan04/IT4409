import { useEffect, useState } from "react";
import { HORIZONTAL_PADDING_REM } from "../../constants";
import { useI18n } from "../../contexts/I18nContext";
import ItemCard from "./components/ItemCard";
import type { CartItem } from "../../types";
import CommonButton from "../../components/common/CommonButton";
import CouponCode from "./components/CouponCode";
import CartTotal from "./components/CartTotal";

const CartPage = () => {
  const i18n = useI18n();
  const [cart, setCart] = useState<CartItem[]>([
    {
      productId: "1",
      quantity: 1,
    },
    {
      productId: "2",
      quantity: 2,
    },
  ]);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    //get cart
  }, []);

  const handleReturnToShop = () => {};

  const handleUpdateCart = () => {};

  return (
    <main
      className="flex flex-col gap-16 px-4 md:px-8 lg:px-[var(--horizontal-padding)]"
      style={
        {
          "--horizontal-padding": `${HORIZONTAL_PADDING_REM}rem`,
        } as React.CSSProperties
      }
    >
      <section className="flex flex-col gap-4" aria-label="Cart Items">
        <div className="hidden md:flex flex-row min-h-[72px] justify-between items-center px-8 py-4 shadow-sm rounded-lg">
          <div className="w-1/4 flex justify-start">
            <span className="text-base font-normal text-text2">
              {i18n.t("Product")}
            </span>
          </div>
          <div className="w-1/4 flex justify-center">
            <span className="text-base font-normal text-text2">
              {i18n.t("Price")}
            </span>
          </div>
          <div className="w-1/4 flex justify-center">
            <span className="text-base font-normal text-text2">
              {i18n.t("Quantity")}
            </span>
          </div>
          <div className="w-1/4 flex justify-end">
            <span className="text-base font-normal text-text2">
              {i18n.t("Subtotal")}
            </span>
          </div>
        </div>
        {cart.map((product) => (
          <ItemCard
            key={product.productId}
            productId={product.productId}
            _quantity={product.quantity}
            setTotal={setTotal}
          />
        ))}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="w-full md:w-[218px] h-[56px]">
            <CommonButton
              label="Return To Shop"
              onClick={handleReturnToShop}
              transparentBg
            />
          </div>
          <div className="w-full md:w-[218px] h-[56px]">
            <CommonButton
              label="Update Cart"
              onClick={handleUpdateCart}
              transparentBg
            />
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 items-center lg:items-start">
        <CouponCode setDiscount={setDiscount} />
        <CartTotal total={total} discount={discount} />
      </div>
    </main>
  );
};

export default CartPage;

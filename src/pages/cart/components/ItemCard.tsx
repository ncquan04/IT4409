import { useState } from "react";
import QuantitySelector from "../../../components/common/quantitySelector/QuantitySelector";
import { formatPrice } from "../../../utils";
import type { ICartResponseItem } from "../../../services/api/api.cart";
import { useAppDispatch } from "../../../redux/store";
import cartAsync from "../../../redux/async-thunk/cart.thunk";

const ItemCard = ({ item }: { item: ICartResponseItem }) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(item.quantity);

  const product = item.product;
  const variant = product.selectedVariant;

  const handleQuantityChange = (newQuantity: number) => {
    if (variant) {
      dispatch(
        cartAsync.updateCartItemThunk({
          productId: product._id,
          variantId: variant._id,
          quantity: newQuantity,
        })
      ).then(() => {
        dispatch(cartAsync.fetchCart());
      });
    }
  };

  const price = variant?.price || 0;
  const subtotal = price * quantity;

  return (
    <article className="flex flex-col md:flex-row justify-between items-center px-8 py-4 shadow-sm rounded-lg gap-4 md:gap-0">
      <div className="w-full md:w-1/4 flex justify-center md:justify-start">
        <img
          src={variant?.images?.[0]}
          alt={product.title}
          className="max-w-24 max-h-24 object-contain"
        />
      </div>
      <div className="w-full md:w-1/4 flex justify-between md:justify-center items-center">
        <span className="md:hidden text-base font-medium text-text2">
          Price:
        </span>
        <span className="text-base font-normal text-text2">
          {formatPrice(price)}
        </span>
      </div>
      <div className="w-full md:w-1/4 flex justify-center">
        <QuantitySelector
          maxQuantity={variant?.quantity || 10}
          quantity={quantity}
          setQuantity={setQuantity}
          onQuantityChange={handleQuantityChange}
        />
      </div>
      <div className="w-full md:w-1/4 flex justify-between md:justify-end items-center">
        <span className="md:hidden text-base font-medium text-text2">
          Subtotal:
        </span>
        <span className="text-base font-normal text-text2">
          {formatPrice(subtotal)}
        </span>
      </div>
    </article>
  );
};

export default ItemCard;

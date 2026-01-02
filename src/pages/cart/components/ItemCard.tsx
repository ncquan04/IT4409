import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import QuantitySelector from "../../../components/common/quantitySelector/QuantitySelector";
import { fetchProductById } from "../../../services/api/api.products";
import type {
  IProduct,
  IProductVariant,
} from "../../../shared/models/product-model";
import { formatPrice } from "../../../utils";

const ItemCard = ({
  productId,
  _quantity,
  setTotal,
  variantId,
}: {
  productId: string;
  variantId?: string;
  _quantity: number;
  setTotal: Dispatch<SetStateAction<number>>;
}) => {
  const [item, setItem] = useState<IProduct | null>(null);
  const [itemVariant, setItemVariant] = useState<IProductVariant>();
  const [quantity, setQuantity] = useState<number>(_quantity);
  const [subtotal, setSubtotal] = useState<number>(0);

  useEffect(() => {
    const fetchItem = async () => {
      const product = await fetchProductById(productId);
      setItem(product);
      const variant = product?.variants.find(
        (variant) => variant._id === variantId
      );
      setItemVariant(variant);
      if (variant) {
        setSubtotal(variant.price * quantity);
      }
    };
    fetchItem();
  }, [productId]);

  useEffect(() => {
    setTotal((prev) => prev + subtotal);
    return () => {
      setTotal((prev) => prev - subtotal);
    };
  }, [subtotal]);

  return (
    <article className="flex flex-col md:flex-row justify-between items-center px-8 py-4 shadow-sm rounded-lg gap-4 md:gap-0">
      <div className="w-full md:w-1/4 flex justify-center md:justify-start">
        <img
          src={itemVariant?.images?.[0]}
          alt={item?.title}
          className="max-w-24 max-h-24 object-contain"
        />
      </div>
      <div className="w-full md:w-1/4 flex justify-between md:justify-center items-center">
        <span className="md:hidden text-base font-medium text-text2">
          Price:
        </span>
        <span className="text-base font-normal text-text2">
          {formatPrice(itemVariant?.price)}
        </span>
      </div>
      <div className="w-full md:w-1/4 flex justify-center">
        <QuantitySelector
          maxQuantity={itemVariant?.quantity || 10}
          quantity={quantity}
          setQuantity={setQuantity}
          onQuantityChange={(newQuantity) => {
            setSubtotal((itemVariant?.price || 0) * newQuantity);
          }}
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

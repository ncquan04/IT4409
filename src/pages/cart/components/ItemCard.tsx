import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { Product } from "../../../shared/models/product-model";
import { SAMPLE_ITEMS } from "../../../samples";
import QuantitySelector from "../../../components/common/quantitySelector/QuantitySelector";

const ItemCard = ({
  productId,
  _quantity,
  setTotal,
}: {
  productId: string;
  _quantity: number;
  setTotal: Dispatch<SetStateAction<number>>;
}) => {
  const [item, setItem] = useState<Product>(SAMPLE_ITEMS[0]);
  const [quantity, setQuantity] = useState<number>(_quantity);
  const [subtotal, setSubtotal] = useState<number>(
    item.variants[0].price * _quantity
  );

  useEffect(() => {
    //get item
    setTotal((prev) => prev + subtotal);
    return () => {
      setTotal((prev) => prev - subtotal);
    };
  }, [subtotal]);

  return (
    <article className="flex flex-col md:flex-row justify-between items-center px-8 py-4 shadow-sm rounded-lg gap-4 md:gap-0">
      <div className="w-full md:w-1/4 flex justify-center md:justify-start">
        <img
          src={item?.variants[0].images[0]}
          alt={item.title}
          className="max-w-24 max-h-24 object-contain"
        />
      </div>
      <div className="w-full md:w-1/4 flex justify-between md:justify-center items-center">
        <span className="md:hidden text-base font-medium text-text2">
          Price:
        </span>
        <span className="text-base font-normal text-text2">
          {item.variants[0].price}
        </span>
      </div>
      <div className="w-full md:w-1/4 flex justify-center">
        <QuantitySelector
          maxQuantity={item.variants[0].quantity}
          quantity={quantity}
          setQuantity={setQuantity}
          onQuantityChange={(newQuantity) => {
            setSubtotal(item.variants[0].price * newQuantity);
          }}
        />
      </div>
      <div className="w-full md:w-1/4 flex justify-between md:justify-end items-center">
        <span className="md:hidden text-base font-medium text-text2">
          Subtotal:
        </span>
        <span className="text-base font-normal text-text2">
          {subtotal.toFixed(2)}
        </span>
      </div>
    </article>
  );
};

export default ItemCard;

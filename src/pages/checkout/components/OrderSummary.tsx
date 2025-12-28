import { useState } from "react";
import { Product } from "../../../shared/models/product-model";
import CommonButton from "../../../components/common/CommonButton";
import bank1 from "../../../assets/images/image 30.png";
import bank2 from "../../../assets/images/image 31.png";
import bank3 from "../../../assets/images/image 32.png";
import bank4 from "../../../assets/images/image 33.png";

interface OrderSummaryProps {
  products: (Product & { quantity: number })[];
}

const bankOptionsImg = [bank1, bank2, bank3, bank4];

const OrderSummary = ({ products }: OrderSummaryProps) => {
  const [paymentMethod, setPaymentMethod] = useState<"bank" | "cod">("cod");
  const [couponCode, setCouponCode] = useState("");

  const subtotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <section className="flex flex-col gap-8 w-full lg:w-[40%] mt-8 lg:mt-24 text-black">
      <ul className="flex flex-col gap-6">
        {products.map((product) => (
          <li key={product._id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12">
                <img
                  src={product.imageUrl[0]}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-base">{product.title}</span>
            </div>
            <span className="text-base">
              ${product.price * product.quantity}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between py-4 border-b border-gray-300">
          <span className="text-base">Subtotal:</span>
          <span className="text-base">${subtotal}</span>
        </div>
        <div className="flex justify-between py-4 border-b border-gray-300">
          <span className="text-base">Shipping:</span>
          <span className="text-base">Free</span>
        </div>
        <div className="flex justify-between py-4">
          <span className="text-base">Total:</span>
          <span className="text-base">${total}</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <input
              type="radio"
              id="bank"
              name="payment"
              className="w-5 h-5 accent-black"
              checked={paymentMethod === "bank"}
              onChange={() => setPaymentMethod("bank")}
              style={{ colorScheme: "light" }}
            />
            <label htmlFor="bank" className="text-base cursor-pointer">
              Bank
            </label>
          </div>
          <div className="flex gap-2">
            {bankOptionsImg.map((bank, index) => (
              <div className="w-[42px] h-[28px] flex justify-center items-center">
                <img src={bank} alt={`Bank ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="radio"
            id="cod"
            name="payment"
            className="w-5 h-5 accent-black"
            checked={paymentMethod === "cod"}
            onChange={() => setPaymentMethod("cod")}
            style={{ colorScheme: "light" }}
          />
          <label htmlFor="cod" className="text-base cursor-pointer">
            Cash on delivery
          </label>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 h-auto sm:h-14">
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="flex-1 w-full sm:w-auto h-14 sm:h-auto border border-black rounded px-6 outline-none text-black"
        />
        <CommonButton
          label="Apply Coupon"
          onClick={() => {}}
          className="w-full sm:w-auto px-8 h-14 sm:h-full"
        />
      </div>

      <CommonButton
        label="Place Order"
        onClick={() => {}}
        className="w-full sm:w-auto px-8 self-start"
      />
    </section>
  );
};

export default OrderSummary;

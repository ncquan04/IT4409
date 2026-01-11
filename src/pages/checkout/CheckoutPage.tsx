import PageTransition from "../../components/common/PageTransition";
import { useLocation } from "react-router-dom";
import {
  Product,
  type IProductVariant,
} from "../../shared/models/product-model";
import { HORIZONTAL_PADDING_REM } from "../../constants";
import BillingDetails from "./components/BillingDetails";
import OrderSummary from "./components/OrderSummary";

interface CheckoutState {
  products: (Product & {
    selectedVariant: IProductVariant;
    quantity: number;
  })[];
}

const CheckoutPage = () => {
  const location = useLocation();
  const state = location.state as CheckoutState;
  const products = state?.products || [];

  return (
    <PageTransition>
      <main
        className="flex flex-col lg:flex-row justify-between gap-8 px-4 sm:px-6 md:px-8 lg:px-(--horizontal-padding) py-8 lg:py-20"
        style={
          {
            "--horizontal-padding": `${HORIZONTAL_PADDING_REM}rem`,
          } as React.CSSProperties
        }
      >
        <BillingDetails />
        <OrderSummary products={products} />
      </main>
    </PageTransition>
  );
};

export default CheckoutPage;

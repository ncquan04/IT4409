import PageTransition from "../../components/common/PageTransition";
import { useLocation } from "react-router";
import { type IProduct, type IProductVariant } from "../../shared/models/product-model";
import { HORIZONTAL_PADDING_REM } from "../../constants";
import BillingDetails from "./components/BillingDetails";
import OrderSummary from "./components/OrderSummary";
import { useAppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { updateOrder } from "../../redux/slice/payment.slice";

interface CheckoutState {
    products: {
        product: IProduct;
        variant: IProductVariant;
        quantity: number;
    }[];
}

const CheckoutPage = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const state = location.state as CheckoutState;
    const products = state?.products || [];

    useEffect(() => {
        dispatch(updateOrder({ field: "listProduct", value: products }));
    }, [products]);

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
                <OrderSummary />
            </main>
        </PageTransition>
    );
};

export default CheckoutPage;

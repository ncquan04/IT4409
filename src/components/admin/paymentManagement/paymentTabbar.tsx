import { setPaymentTab } from "../../../redux/slice/payment-management.slice";
import { useAppDispatch, useAppSelector, type RootState } from "../../../redux/store";
import { Contacts } from "../../../shared/contacts";

const PAYMENT_STATUS = Contacts.Status.Payment;

const PAYMENT_TABS = [
    {
        key: "PAID",
        label: "Đã thanh toán",
        status: PAYMENT_STATUS.PAID,
    },
    {
        key: "PENDING",
        label: "Chưa thanh toán",
        status: PAYMENT_STATUS.PENDING,
    },
    {
        key: "REFUNDED",
        label: "Đã refund",
        status: PAYMENT_STATUS.REFUNDED,
    },
];

const PaymentStatusTabs = () => {
    const dispatch = useAppDispatch();
    const { paymentTab } = useAppSelector((state: RootState) => state.paymentManagement);

    return (
        <div className="border-b bg-white">
            <div className="flex gap-6 px-4">
                {PAYMENT_TABS.map((tab) => {
                    const active = paymentTab === tab.status;

                    return (
                        <button
                            key={tab.key}
                            onClick={() => dispatch(setPaymentTab(tab.status))}
                            className={`
                                relative py-3 text-sm font-medium
                                ${active ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}
                            `}
                        >
                            {tab.label}

                            {/* Active underline */}
                            {active && (
                                <span
                                    className="
                                        absolute left-0 right-0 -bottom-px
                                        h-0.5 bg-blue-600
                                    "
                                />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default PaymentStatusTabs;

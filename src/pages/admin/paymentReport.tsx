import PaymentManagementHeader from "../../components/admin/paymentManagement/paymentHeader";
import PaymentStatusTabs from "../../components/admin/paymentManagement/paymentTabbar";

const PaymentReportPage = () => {
    return (
        <div className="min-h-screen bg-gray-50/50 p-6 md:p-10">
            <PaymentManagementHeader />
            {/* Tabs */}
            <PaymentStatusTabs />

            {/* Table */}
            {/* <div className="p-4">
                <PaymentTable />
            </div> */}
        </div>
    );
};
export default PaymentReportPage;

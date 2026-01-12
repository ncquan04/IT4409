import SearchIcon from "../../../icons/SearchIcon";

const PaymentManagementHeader = () => {
    return (
        <div className="bg-white border-b">
            <div className="px-4 py-4 flex items-center justify-between">
                {/* Left */}
                <div>
                    <h1 className="text-lg font-semibold text-gray-800">Payment Management</h1>
                    <p className="text-sm text-gray-500">Quản lý các giao dịch thanh toán online</p>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">
                    {/* Search */}
                    <div className="relative">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                            placeholder="Tìm theo mã đơn, SĐT..."
                            className="
                                pl-9 pr-3 py-2 text-sm
                                border rounded-md
                                focus:outline-none focus:ring-2 focus:ring-blue-500
                            "
                        />
                    </div>

                    {/* Export */}
                    <button
                        className="
                            px-3 py-2 text-sm
                            border rounded-md
                            hover:bg-gray-50
                        "
                    >
                        Tìm kiếm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentManagementHeader;

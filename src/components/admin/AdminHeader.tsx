import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../navigation";
import { useAuth } from "../../contexts/AuthContext";
import logo from '../../../public/icon.jpg'

const AdminHeader = () => {
    const navigate = useNavigate();
    const { logout } = useAuth(); // Assuming useAuth provides a logout function

    const handleLogout = async () => {
        try {
            await logout();
            navigate(AppRoutes.LOGIN);
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-30">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <div 
                    className="flex items-center gap-2 cursor-pointer" 
                    onClick={() => navigate(AppRoutes.ADMIN)}
                >
                    <img src={logo} width={50} height={50} />
                     <h1 className="text-2xl font-bold tracking-tighter text-black">
                        Apex
                    </h1>
                </div>

                {/* Logout Button */}
                <div className="flex flex-row gap-8 justify-center items-center">
                    <span className="text-2xl font-bold tracking-tighter text-black">Admin</span>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                    Logout
                </button>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;

import { useEffect } from "react";

const AdminProtectedRoute = ({ children }: { children: any }) => {
    useEffect(() => {
        console.log("admin protected router start");
    }, []);
    return <>{children}</>;
};

export default AdminProtectedRoute;

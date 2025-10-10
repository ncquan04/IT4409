import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";

export const AppRoutes = {
  HOME: "/",
  LOGIN: "/login",
};

const RootNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.HOME} element={<HomePage />} />
        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigation;

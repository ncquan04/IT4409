import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import NavBar from "../components/navBar/NavBar";

export const AppRoutes = {
  DEFAULT: "/",
  HOME: "/home",
  LOGIN: "/login",
  SIGNUP: "/signup",
  CONTACT: "/contact",
  ABOUT: "/about",
  WISHLIST: "/wishlist",
  CART: "/cart",
};

const RootNavigation = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.DEFAULT} element={<HomePage />} />
          <Route path={AppRoutes.HOME} element={<HomePage />} />
          <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
          {/* <Route path={AppRoutes.SIGNUP} element={<LoginPage />} />
          <Route path={AppRoutes.CONTACT} element={<LoginPage />} />
          <Route path={AppRoutes.ABOUT} element={<LoginPage />} />
          <Route path={AppRoutes.WISHLIST} element={<LoginPage />} />
          <Route path={AppRoutes.CART} element={<LoginPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RootNavigation;

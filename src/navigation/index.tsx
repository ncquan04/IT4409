import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import SignUpPage from "../pages/login/LogInSignUpPage";
import LogInSignUpPage from "../pages/login/LogInSignUpPage";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import ContactPage from "../pages/contact/ContactPage";
import ProductDetailPage from "../pages/productDetail/ProductDetailPage";
import WishlistPage from "../pages/wishlist/WishlistPage";

export const AppRoutes = {
  DEFAULT: "/",
  HOME: "/home",
  ACCOUNT: "/account",
  LOGIN: "/login",
  SIGNUP: "/signup",
  CONTACT: "/contact",
  ABOUT: "/about",
  WISHLIST: "/wishlist",
  CART: "/cart",
  PRIVACY_POLICY: "/privacy-policy",
  TERMS_OF_USE: "/terms-of-use",
  FAQ: "/faq",
  PRODUCT_DETAIL: "/products/:productId",
};

const RootNavigation = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="flex-1 flex flex-col">
          <Routes>
            <Route path={AppRoutes.DEFAULT} element={<HomePage />} />
            <Route path={AppRoutes.HOME} element={<HomePage />} />
            <Route
              path={AppRoutes.LOGIN}
              element={<LogInSignUpPage action="login" />}
            />
            <Route
              path={AppRoutes.SIGNUP}
              element={<SignUpPage action="signup" />}
            />
            <Route path={AppRoutes.CONTACT} element={<ContactPage />} />
            <Route
              path={AppRoutes.PRODUCT_DETAIL}
              element={<ProductDetailPage />}
            />
            <Route path={AppRoutes.WISHLIST} element={<WishlistPage />} />  
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default RootNavigation;

import CartButton from "./CartButton";
import PageSelector from "./PageSelector";
import SearchBar from "./SearchBar";
import WishlistButton from "./WishlistButton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full flex flex-row pt-4 pb-4 pl-6 pr-6 justify-between items-center">
      <Link
        to="/"
        className="flex flex-row gap-1 items-center hover:cursor-pointer"
        aria-label="Go to home"
      >
        <img src="/icon.jpg" alt="Apex logo" className="h-10" />
        <span className="text-2xl text-black font-bold">Apex</span>
      </Link>
      <nav aria-label="Primary" className="contents">
        <PageSelector />
      </nav>
      <div className="justify-center items-center flex flex-row">
        <SearchBar />
        <WishlistButton />
        <CartButton />
      </div>
    </div>
  );
};

export default Header;

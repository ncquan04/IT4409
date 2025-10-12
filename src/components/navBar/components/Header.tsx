import logo from "../../../assets/icon.jpg";
import CartButton from "./CartButton";
import PageSelector from "./PageSelector";
import SearchBar from "./Searchbar";
import WishlistButton from "./WishlistButton";

const Header = () => {
  return (
    <div className="w-full flex flex-row pt-4 pb-4 pl-6 pr-6 justify-between items-center">
      <div
        className="flex flex-row gap-1 items-center hover:cursor-pointer"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <img src={logo} alt="Logo" className="h-10" />
        <span className="text-2xl text-black font-bold">Apex</span>
      </div>
      <PageSelector />
      <div className="justify-center items-center flex flex-row">
        <SearchBar />
        <WishlistButton />
        <CartButton />
      </div>
    </div>
  );
};

export default Header;

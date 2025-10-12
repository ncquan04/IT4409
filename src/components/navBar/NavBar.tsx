import Header from "./components/Header";
import TopHeader from "./components/TopHeader";

const NavBar = () => {
  return (
    <header
      className="flex flex-col border-b-gray-300 border-b-2 "
      role="banner"
    >
      <TopHeader />
      <Header />
    </header>
  );
};

export default NavBar;

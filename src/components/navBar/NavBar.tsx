import Header from "./components/Header";
import TopHeader from "./components/TopHeader";

const NavBar = () => {
  return (
    <div className="flex flex-col border-b-gray-300 border-b-2 ">
      <TopHeader />
      <Header />
    </div>
  );
};

export default NavBar;

import { useState } from "react";
import { useI18n } from "../../../contexts/I18nContext";
import SearchIcon from "../../../icons/SearchIcon";

const SearchBar = () => {
  const i18n = useI18n();
  const [userInput, setUserInput] = useState<string>("");

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSearch = () => {
    // your code here
    console.log("Search for:", userInput);
  };

  return (
    <form
      role="search"
      className="h-[38px] bg-gray-100 rounded-lg flex flex-row items-center pl-4 pr-4 relative"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <label htmlFor="navbar-search" className="sr-only">
        {i18n.t("Search")}
      </label>
      <input
        id="navbar-search"
        type="search"
        placeholder={i18n.t("What are you looking for?")}
        className="text-gray-600 border-0 bg-transparent outline-0 w-full h-full truncate pr-12"
        value={userInput}
        onChange={handleChangeText}
      />
      <button
        type="submit"
        aria-label={i18n.t("Search") as string}
        className="absolute top-[10px] right-2"
      >
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;

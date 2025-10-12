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
    //your code here
    console.log("Search for:", userInput);
  };

  return (
    <div className="h-[38px] bg-gray-100 rounded-lg flex flex-row items-center pl-4 pr-4 relative">
      <input
        type="text"
        placeholder={i18n.t("What are you looking for?")}
        className="text-gray-600 border-0 bg-transparent outline-0 w-full h-full truncate pr-12"
        value={userInput}
        onChange={handleChangeText}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
          }
        }}
      />
      <SearchIcon
        style={{ position: "absolute", top: 10, right: 12 }}
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;

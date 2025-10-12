import { useMemo } from "react";
import { useI18n } from "../../../contexts/I18nContext";

const PageSelector = () => {
  const i18n = useI18n();
  const currentPath = window.location.pathname;

  const pages = useMemo(() => {
    return [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
      { name: "About", path: "/about" },
      { name: "Sign Up", path: "/signup" },
    ];
  }, []);

  return (
    <div className="flex flex-row gap-6 justify-center items-center">
      {pages.map((page) => (
        <text
          key={page.name}
          className={`text-sm text-gray-600  hover:cursor-pointer ${
            currentPath === page.path ? "underline" : ""
          }`}
          onClick={() => {
            window.location.href = page.path;
          }}
        >
          {i18n.t(page.name)}
        </text>
      ))}
    </div>
  );
};

export default PageSelector;

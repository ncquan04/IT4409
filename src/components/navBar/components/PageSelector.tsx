import { useMemo } from "react";
import { useI18n } from "../../../contexts/I18nContext";
import { Link, useLocation } from "react-router-dom";

const PageSelector = () => {
  const i18n = useI18n();
  const { pathname } = useLocation();

  const pages = useMemo(() => {
    return [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
      { name: "About", path: "/about" },
      { name: "Sign Up", path: "/signup" },
    ];
  }, []);

  return (
    <ul className="flex flex-row gap-6 justify-center items-center list-none m-0 p-0">
      {pages.map((page) => (
        <li key={page.name}>
          <Link
            to={page.path}
            className={`text-sm text-gray-600 hover:cursor-pointer ${
              pathname === page.path ? "underline" : ""
            }`}
            aria-current={pathname === page.path ? "page" : undefined}
          >
            {i18n.t(page.name)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PageSelector;

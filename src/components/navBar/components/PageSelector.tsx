import { useMemo } from "react";
import { useI18n } from "../../../contexts/I18nContext";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

interface PageSelectorProps {
  mobile?: boolean;
}

const PageSelector = ({ mobile = false }: PageSelectorProps) => {
  const i18n = useI18n();
  const { pathname } = useLocation();
  const { isAuthenticated } = useAuth();

  const pages = useMemo(() => {
    return [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
      { name: "About", path: "/about" },
      isAuthenticated ? { name: "Log Out", path: "/logout" } : undefined,
    ].filter((page) => page !== undefined);
  }, [isAuthenticated]);

  if (mobile) {
    return (
      <ul className="flex flex-col gap-4 list-none m-0 p-0">
        {pages.map((page) => (
          <li key={page.name}>
            <Link
              to={page.path}
              className={`text-base text-gray-600 hover:cursor-pointer block py-2 ${
                pathname === page.path ? "underline font-semibold" : ""
              }`}
              aria-current={pathname === page.path ? "page" : undefined}
            >
              {i18n.t(page.name)}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

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

import { useI18n } from "../../../contexts/I18nContext";

interface HeaderProps {
  action: "login" | "signup";
}

const Header = (props: HeaderProps) => {
  const i18n = useI18n();

  return (
    <header className="w-full h-auto flex flex-col gap-2">
      <h1 id="auth-heading" className="text-[32px] font-semibold text-black">
        {i18n.t(
          props.action === "login" ? "Log in to Apex" : "Create an account"
        )}
      </h1>
      <p className="text-base text-gray-600">
        {i18n.t("Enter your details below")}
      </p>
    </header>
  );
};

export default Header;

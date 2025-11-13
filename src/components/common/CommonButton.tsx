import { useI18n } from "../../contexts/I18nContext";

interface CommonButtonProps {
  label?: string;
  onClick: () => void;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const CommonButton = (props: CommonButtonProps) => {
  const i18n = useI18n();

  return (
    <button
      className={`w-full h-14 rounded-lg bg-button2 hover:bg-hoverButton hover:cursor-pointer ${props.className || ''}`}
      onClick={props.onClick}
      style={props.style}
      type={props.type || "button"}
    >
      {props.label || i18n.t("Continue")}
    </button>
  );
};

export default CommonButton;

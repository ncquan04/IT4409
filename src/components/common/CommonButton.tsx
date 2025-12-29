import { useI18n } from "../../contexts/I18nContext";

interface CommonButtonProps {
  label?: string;
  onClick: () => void;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  transparentBg?: boolean;
  className?: string;
}

const CommonButton = (props: CommonButtonProps) => {
  const i18n = useI18n();

  return (
    <button
      className={`w-full h-14 rounded-lg ${
        props.transparentBg
          ? "bg-transparent border border-[#00000033] text-black"
          : "bg-button2 hover:bg-hoverButton text-white"
      } hover:cursor-pointer ${props.className || ""}`}
      onClick={props.onClick}
      style={props.style}
      type={props.type || "button"}
    >
      {i18n.t(props.label || "Continue")}
    </button>
  );
};

export default CommonButton;

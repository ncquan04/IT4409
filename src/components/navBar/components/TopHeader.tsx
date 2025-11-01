import { HORIZONTAL_PADDING_REM } from "../../../constants";
import { useI18n } from "../../../contexts/I18nContext";
import { languageNames } from "../../../i18n";
import ArrowDownIcon from "../../../icons/ArrowDownIcon";
import LanguageSelectDropdown from "./LanguageSelectDropdown";
import { useEffect, useRef, useState } from "react";

const TopHeader = () => {
  const i18n = useI18n();
  const { currentLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(false);
    }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <aside
      style={{
        paddingLeft: `${HORIZONTAL_PADDING_REM + 'rem'}`,
        paddingRight: `${HORIZONTAL_PADDING_REM + 'rem'}`
      }}
      className={`w-full h-[48px] bg-black justify-between items-center flex flex-row`}
      aria-label="Promotions and language selector"
    >
      <div aria-hidden="true" />
      <div className="flex flex-row gap-2 items-center">
        <p className="text-white text-sm m-0">
          {i18n.t(
            "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
          )}
        </p>
        <a href="#" className="text-sm text-white underline">
          {i18n.t("Shop now")}
        </a>
      </div>
      <div className="relative" ref={containerRef}>
        <button
          type="button"
          className="p-2 justify-center items-center gap-2 flex flex-row select-none"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <span className="text-sm text-white">
            {languageNames[currentLocale]}
          </span>
          <span
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          >
            <ArrowDownIcon
              width={12}
              height={12}
              fill="white"
              aria-hidden="true"
            />
          </span>
        </button>
        <LanguageSelectDropdown
          open={open}
          onSelect={() => {
            setOpen(false);
          }}
        />
      </div>
    </aside>
  );
};

export default TopHeader;

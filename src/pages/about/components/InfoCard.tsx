import type { JSX } from "react";
import { useI18n } from "../../../contexts/I18nContext";

interface InfoCardProps {
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  description: string;
}

const InfoCard = (props: InfoCardProps) => {
  const i18n = useI18n();

  return (
    <div className="w-[270px] h-[230px] rounded-sm border-1 border-[#00000033] flex flex-col justify-center items-center gap-4">
      <div className="flex w-[80px] h-[80px] rounded-full justify-center items-center bg-[#36373833]">
        <div className="flex w-[58px] h-[58px] rounded-full bg-black justify-center items-center">
          <props.icon />
        </div>
      </div>
      <span className="text-3xl text-black font-bold">
        {i18n.t(props.title)}
      </span>
      <span className="text-base font-medium text-black">
        {i18n.t(props.description)}
      </span>
    </div>
  );
};

export default InfoCard;

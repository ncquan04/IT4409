import InstagramIcon from "../../../icons/InstagramIcon";
import LinkedInIcon from "../../../icons/LinkedInIcon";
import TwitterIcon from "../../../icons/TwitterIcon";

interface LeaderCardProps {
  name: string;
  position: string;
  image: string;
}

const LeaderCard = (props: LeaderCardProps) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <img src={props.image} alt={props.name} />
      <span className="text-3xl font-medium text-black">{props.name}</span>
      <span className="text-base font-normal text-black">{props.position}</span>
      <div className="flex flex-row gap-2">
        <TwitterIcon className="hover:cursor-pointer" />
        <InstagramIcon className="hover:cursor-pointer" />
        <LinkedInIcon className="hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default LeaderCard;

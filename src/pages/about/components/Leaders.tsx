import TomCruiseImage from "../../../assets/images/TomCruise.png";
import EmmaWatsonImage from "../../../assets/images/EmmaWatson.png";
import WillSmithImage from "../../../assets/images/WillSmith.png";
import LeaderCard from "./LeaderCard";

const LEADERS = [
  {
    name: "Tom Cruise",
    position: "Founder & Chairman",
    image: TomCruiseImage,
  },
  {
    name: "Emma Watson",
    position: "Managing Director",
    image: EmmaWatsonImage,
  },
  {
    name: "Will Smith",
    position: "Product Designer",
    image: WillSmithImage,
  },
];

const Leaders = () => {
  return (
    <div className="w-full flex flex-row justify-around items-center">
      {LEADERS.map((leader, index) => (
        <LeaderCard
          key={index}
          name={leader.name}
          position={leader.position}
          image={leader.image}
        />
      ))}
    </div>
  );
};

export default Leaders;

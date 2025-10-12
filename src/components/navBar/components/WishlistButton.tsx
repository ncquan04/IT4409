import HeartIcon from "../../../icons/HeartIcon";

const WishlistButton = () => {
  const handleClick = () => {
    window.location.href = "/wishlist";
  };

  return (
    <div
      className="pr-4 pl-4 justify-center items-center hover:cursor-pointer"
      onClick={handleClick}
    >
      <HeartIcon />
    </div>
  );
};

export default WishlistButton;

import HeartIcon from "../../../icons/HeartIcon";

const WishlistButton = () => {
  const handleClick = () => {
    window.location.href = "/wishlist";
  };

  return (
    <button
      type="button"
      className="pr-4 pl-4 justify-center items-center hover:cursor-pointer"
      onClick={handleClick}
      aria-label="Open wishlist"
    >
      <HeartIcon />
    </button>
  );
};

export default WishlistButton;

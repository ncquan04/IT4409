import CartIcon from "../../../icons/CartIcon";

const CartButton = () => {
  const handleClick = () => {
    window.location.href = "/cart";
  };

  return (
    <button
      type="button"
      className="justify-center items-center hover:cursor-pointer"
      onClick={handleClick}
      aria-label="Open cart"
    >
      <CartIcon width={28} height={28} />
    </button>
  );
};

export default CartButton;

import CartIcon from "../../../icons/CartIcon";

const CartButton = () => {
  const handleClick = () => {
    window.location.href = "/cart";
  };

  return (
    <div
      className="pr-4  justify-center items-center hover:cursor-pointer"
      onClick={handleClick}
    >
      <CartIcon width={28} height={28} />
    </div>
  );
};

export default CartButton;

import { FaTrash, FaMinus, FaPlus, FaCheckCircle } from "react-icons/fa";
import { FaSlidersH, FaShoppingBag } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from "../context/useDashboard";
import { useGadgets } from "../context/useGadgetsContext";
import { useNavigate } from "react-router";
import { Bounce, toast } from "react-toastify";

const Cart = () => {
  const { cart, resetCart } = useCartContext();
  const { gadgets, loading } = useGadgets();
  const navigate = useNavigate();

  let showLoading;
  if (loading) {
    showLoading = (
      <div className="flex justify-center">
        Cart data is Loading...
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
    return;
  }

  const cartItems = gadgets.filter((gadget) =>
    cart.includes(gadget.product_id)
  );

  let totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  function handlePurchase() {
    if (cartItems.length < 1) {
      toast.info("🦄 You Have not added any item to the cart!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    document.getElementById("success_modal").showModal();
  }

  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-8 p-4 bg-white rounded-lg shadow-sm max-w-screen-xl mx-auto mt-5">
          {/* Left side - Cart title */}
          <h1 className="text-3xl font-bold text-gray-800">Cart</h1>

          {/* Right side - Actions */}
          <div className="flex items-center gap-4">
            {/* Total cost */}
            <div className="md:flex items-center px-4 py-2 bg-gray-50 rounded-full">
              <span className="font-medium text-gray-600 mr-2">Total:</span>
              <span className="font-bold text-lg text-primary">
                $ {totalPrice}
              </span>
            </div>

            {/* Sort button */}
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors cursor-pointer">
              <span className="text-gray-700 font-medium">Sort by price</span>
              <FaSlidersH className="text-gray-500 rotate-90" />
            </button>

            {/* Purchase button */}
            <button
              onClick={handlePurchase}
              className="
  relative flex items-center justify-center gap-2 
  px-8 py-3 bg-white text-gray-900 
  font-medium rounded-lg
  overflow-hidden
  group transition-all duration-300
  border border-gray-200
  hover:border-transparent
  shadow-sm hover:shadow-md
"
            >
              {/* Gradient shine overlay */}
              <div
                className="
    absolute inset-0 -z-10 
    bg-gradient-to-r from-blue-50 via-white to-purple-50
    opacity-0 group-hover:opacity-100
    transition-opacity duration-500
  "
              ></div>

              {/* Animated underline effect */}
              <div
                className="
    absolute bottom-0 left-1/2 -translate-x-1/2
    h-0.5 w-0 bg-blue-500
    group-hover:w-full
    transition-all duration-300
  "
              ></div>

              {/* Button content with transform effects */}
              <FaShoppingBag
                className="
    transition-transform duration-300
    group-hover:scale-110 group-hover:-rotate-12
  "
              />

              <span
                className="
    relative overflow-hidden
  "
              >
                <span
                  className="
      inline-block transition-transform duration-300
      group-hover:translate-y-[-2px]
    "
                >
                  Purchase
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
      {loading && showLoading}
      {cartItems.length < 1 && <EmptyCart></EmptyCart>}
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.product_id} cartItem={cartItem}></CartItem>
      ))}

      {/* modal to show after purchasse */}
      <dialog id="success_modal" className="modal">
        <div className="modal-box text-center p-10 max-w-md">
          {/* Checkmark Icon */}
          <div className="flex justify-center mb-6">
            <FaCheckCircle className="text-6xl text-success" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-4">Payment Successful!</h3>

          {/* Order Badge */}
          <div className="bg-success/10 p-4 rounded-lg mb-6">
            <div className="flex items-center justify-center gap-3">
              <FaShoppingBag className="text-success text-xl" />
              <p className="font-medium"> Your Order has been placed</p>
            </div>
          </div>

          {/* Description */}
          <p className="mb-6 text-gray-600">
            Thank you for your purchase! Your items will arrive soon.
          </p>

          {/* Actions */}
          <div className="modal-action justify-center">
            <button
              onClick={() => {
                document.getElementById("success_modal").close();
                resetCart();
                navigate("/dashboard");
              }}
              className="btn btn-primary px-8"
            >
              Track Order
            </button>
            {/* Close button */}
            <button
              className="btn btn-ghost border border-gray-300 px-8"
              onClick={() => {
                document.getElementById("success_modal").close();
                resetCart();
                navigate("/");
              }}
            >
              Continue Shopping
            </button>
          </div>
        </div>

        {/* Click outside to close */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Cart;

function CartItem({ cartItem }) {
  const { deleteFromCart } = useCartContext();

  const { product_id, product_title, description, price, product_image } =
    cartItem;

  return (
    <div className="w-full max-w-screen-xl mx-auto space-y-4 bg-white rounded-md mb-5">
      {/* Cart Item */}
      <div className="flex flex-col sm:flex-row gap-6 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <img
            className="w-32 h-32 object-contain rounded-lg bg-gray-50 p-2"
            src={product_image}
            alt=""
          />
        </div>

        {/* Product Info */}
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-800">
            {product_title}
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {description}
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              {/* Quantity Selector */}
              <div className="flex items-center border border-gray-300 rounded-md">
                <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                  <FaMinus size={12} />
                </button>
                <span className="px-3 py-1 text-sm">1</span>
                <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                  <FaPlus size={12} />
                </button>
              </div>

              {/* Price */}
              <span className="text-lg font-medium text-gray-900">
                ${price}
              </span>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => deleteFromCart(product_id)}
              className="p-2 text-red-500 hover:text-red-700 transition-colors"
              aria-label="Remove item"
            >
              <FaTrash size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-sm border border-gray-100 max-w-md mx-auto text-center mb-5">
      <FiShoppingCart className="text-gray-400 text-5xl mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        Your Cart is empty
      </h3>
      <p className="text-gray-500 mb-6">
        Looks like you haven't added any items yet.
      </p>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        onClick={() => navigate("/")}
      >
        Start Shopping
      </button>
    </div>
  );
};

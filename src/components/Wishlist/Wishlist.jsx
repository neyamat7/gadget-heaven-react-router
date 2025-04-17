import { FaTrash, FaPlus, FaMinus, FaCartPlus } from "react-icons/fa";
import { useCartContext } from "../context/useDashboard";
import { useGadgets } from "../context/useGadgetsContext";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router";

const Wishlist = () => {
  const { gadgets, loading } = useGadgets();
  const { wishlist } = useCartContext();

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

  let wishItems = gadgets.filter((gadget) =>
    wishlist.includes(gadget.product_id)
  );

  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-2xl my-5 font-semibold">Wishlist</h2>
      {loading && showLoading}
      {wishItems.length < 1 && <EmptyCart></EmptyCart>}
      {wishItems.map((item) => (
        <WishlistItem key={item.product_id} item={item}></WishlistItem>
      ))}
    </div>
  );
};

export default Wishlist;

function WishlistItem({ item }) {
  const { addToCart, deleteFromWishlist } = useCartContext();

  const { product_id, product_title, description, price, product_image } = item;

  return (
    <div className="w-full max-w-screen-xl mx-auto space-y-4 bg-white rounded-md mb-5">
      {/* Wishlist Item */}
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
              {/* Price */}
              <span className="text-lg font-medium text-gray-900">
                ${price}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              {/* Add to Cart Button */}
              <button
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                aria-label="Add to cart"
                onClick={() => {
                  addToCart(product_id);
                  deleteFromWishlist(product_id);
                }}
              >
                <FaCartPlus size={16} />
                <span>Add to Cart</span>
              </button>

              {/* Remove Button */}
              <button
                onClick={() => deleteFromWishlist(product_id)}
                className="p-2 text-red-500 hover:text-red-700 transition-colors"
                aria-label="Remove item"
              >
                <FaTrash size={18} />
              </button>
            </div>
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
      <MdFavoriteBorder className="text-gray-400 text-5xl mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        Your Wishlist is empty
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

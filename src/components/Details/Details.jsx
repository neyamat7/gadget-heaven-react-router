import { useParams } from "react-router";
import { useGadgets } from "../context/useGadgetsContext";
import ReactStars from "react-stars";
import { FaCartShopping } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { useCartContext } from "../context/useDashboard";

const Details = () => {
  const { cart, wishlist, addToCart, addToWishlist, deleteFromWishlist } =
    useCartContext();

  const { id } = useParams();
  const { gadgets, loading } = useGadgets();

  let showLoading;
  if (loading) {
    showLoading = (
      <p>
        Product is Loading.....{" "}
        <span className="loading loading-spinner loading-xl"></span>
      </p>
    );
    return;
  }

  const product = gadgets.find((gadget) => gadget.product_id === id);
  const {
    product_id,
    product_title,
    description,
    specification,
    price,
    availability,
    rating,
    product_image,
  } = product;

  return (
    <div className="">
      <div className="bg-purple-600 h-[400px] pt-12">
        <div className="text-center">
          <h1 className="text-white text-3xl lg:text-5xl w-[90%] md:w-4/5 mx-auto font-bold pt-10">
            Product Details
          </h1>
          <p className="text-base w-4/5 md:w-3/5 mx-auto text-white mt-10">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className="hero-content w-[80%] flex-col md:flex-row rounded-2xl mx-auto bg-white z-10 -mt-40 mb-4 ">
        <div>{loading && showLoading}</div>
        <div className="w-2/5">
          <img src={product_image} className="w-full rounded-lg" />
        </div>
        <div className="ml-5 w-3/5">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold">{product_title}</h1>
            <h2 className="text-3xl font-bold">${price}</h2>
            <div className="badge badge-outline p-2">
              {availability ? (
                <p className="border py-1 px-2 rounded-2xl border-gray-400">
                  In Stock
                </p>
              ) : (
                <p>Out of Stock</p>
              )}
            </div>
            <p className="">{description}</p>
          </div>
          <div>
            <ol>
              <h3 className="font-bold text-xl">Specification</h3>
              {specification.map((spec, index) => (
                <li key={spec} className="mt-3 ml-4">
                  {index + 1}. {spec}
                </li>
              ))}
            </ol>
          </div>
          <div className="my-3">
            <h3 className="font-bold text-xl">Rating</h3>
            <div className="flex items-center my-2 gap-2">
              <ReactStars
                count={5}
                value={rating}
                size={24}
                color2={"#ffd700"}
              />
              <h4 className="text-lg font-bold mt-1">{rating}</h4>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <button
              onClick={() => {
                addToCart(product_id);
                wishlist.includes(product_id) && deleteFromWishlist(product_id);
              }}
              className={`btn rounded-3xl btn-primary ${
                cart.includes(product_id)
                  ? "cursor-not-allowed bg-gray-400 border-none text-gray-100"
                  : ""
              }`}
            >
              Add to Cart <FaCartShopping />
            </button>

            <button
              disabled={wishlist.includes(product_id)}
              onClick={() => addToWishlist(product_id)}
              className={`text-2xl border p-2 rounded-full  text-gray-200 ${
                wishlist.includes(product_id) || cart.includes(product_id)
                  ? "cursor-not-allowed bg-gray-500"
                  : "cursor-pointer bg-gray-900"
              } `}
            >
              <MdFavoriteBorder />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

// {
//     "product_id": "P991",
//     "product_title": "Apple iPhone 15 Pro Max",
//     "product_image": "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.og.jpg",
//     "category": "iphone",
//     "price": 1299,
//     "description": "Experience the ultimate smartphone with the iPhone 15 Pro Max.",
//     "specification": [
//       "6.7-inch Super Retina XDR display",
//       "A17 Bionic chip",
//       "Triple-camera system (48MP Main, 12MP Telephoto, 12MP Ultrawide)",
//       "LiDAR Scanner",
//       "Up to 2TB storage"
//     ],
//     "availability": true,
//     "rating": 4.8
//   },

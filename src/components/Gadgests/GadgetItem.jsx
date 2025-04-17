import { Link } from "react-router";

const GadgetItem = ({ gadget }) => {
  const { product_title, product_image, price, product_id } = gadget;

  return (
    <div className="bg-white rounded-lg p-4 space-y-3 h-[350px]">
      <div className="w-full h-1/2 border border-gray-100 rounded-lg">
        <img className="h-full mx-auto" src={product_image} alt="" />
      </div>
      <div className="flex flex-col gap-3 text-center">
        <h2 className="text-2xl font-semibold">{product_title}</h2>
        <p className="text-lg font-medium text-gray-500">Price: {price} tk</p>
        <Link to={`/details/${product_id}`}>
          <button className="btn border-purple-500 text-purple-600 font-bold">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GadgetItem;

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

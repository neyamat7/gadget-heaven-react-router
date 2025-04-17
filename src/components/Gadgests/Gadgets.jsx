import { useLocation, useParams } from "react-router";
import { useGadgets } from "../context/useGadgetsContext";
import GadgetItem from "./GadgetItem";

const Gadgets = () => {
  const { category } = useParams();
  const { pathname } = useLocation();
  const { gadgets, loading } = useGadgets();

  let showLoading;
  if (loading) {
    showLoading = (
      <p>
        Product data is loading...{" "}
        <span className="loading loading-spinner loading-xl"></span>
      </p>
    );
    return;
  }

  let filtered = [];
  if (pathname === "/") {
    filtered = gadgets;
  } else {
    gadgets.forEach((singleGadget) => {
      if (singleGadget.category.toLowerCase() === category) {
        filtered.push(singleGadget);
      }
    });
  }

  return (
    <div className="flex-1 grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 gap-4 px-5 sm:px-1">
      {loading && <div>{showLoading}</div>}

      {filtered.map((gadget) => (
        <GadgetItem key={gadget.product_id} gadget={gadget}></GadgetItem>
      ))}
    </div>
  );
};

export default Gadgets;

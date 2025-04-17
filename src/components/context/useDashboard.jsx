import { createContext, useContext, useReducer } from "react";
import { Bounce, toast } from "react-toastify";

export const CartContext = createContext();

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
};

const cartAndWishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM": {
      const newCart = [...state.cart, action.payload];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart,
      };
    }

    case "DELETE_CART_ITEM": {
      const filteredCart = state.cart.filter((item) => item !== action.payload);
      localStorage.setItem("cart", JSON.stringify(filteredCart));
      return {
        ...state,
        cart: filteredCart,
      };
    }

    case "ADD_WISHLIST_ITEM": {
      const newWishlist = [...state.wishlist, action.payload];
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      return {
        ...state,
        wishlist: newWishlist,
      };
    }

    case "DELETE_WISHLIST_ITEM": {
      const filteredWishlist = state.wishlist.filter(
        (preId) => preId !== action.payload
      );
      localStorage.setItem("wishlist", JSON.stringify(filteredWishlist));
      return {
        ...state,
        wishlist: filteredWishlist,
      };
    }

    case "RESET": {
      localStorage.removeItem("cart");
      return {
        ...state,
        cart: [],
      };
    }

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartAndWishlistReducer, initialState);
  const cart = state.cart;
  const wishlist = state.wishlist;

  const addToCart = (id) => {
    if (cart.includes(id)) {
      toast.info("🦄already added to the cart", {
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

    dispatch({
      type: "ADD_CART_ITEM",
      payload: id,
    });
    toast.success("🦄item added successfully to the cart", {
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
  };

  const deleteFromCart = (id) => {
    dispatch({
      type: "DELETE_CART_ITEM",
      payload: id,
    });

    toast.warn("🦄item deleted form cart", {
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
  };

  const addToWishlist = (id) => {
    if (wishlist.includes(id)) {
      toast.success("🦄already added to the wishlist", {
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
    if (cart.includes(id)) {
      toast.success("🦄this item already added to the cart", {
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

    dispatch({
      type: "ADD_WISHLIST_ITEM",
      payload: id,
    });
    toast.success("🦄item successfully added to wishlist", {
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
  };

  const deleteFromWishlist = (id) => {
    dispatch({
      type: "DELETE_WISHLIST_ITEM",
      payload: id,
    });
    toast.warn("🦄item deleted from wishlist", {
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
  };

  const resetCart = () => {
    dispatch({
      type: "RESET",
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteFromCart,
        wishlist,
        addToWishlist,
        deleteFromWishlist,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

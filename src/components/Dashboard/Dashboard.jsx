import { NavLink, Outlet, useLocation } from "react-router";

const Dashboard = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <div className="bg-purple-600 h-[350px] pt-12">
        <div className="text-center">
          <h1 className="text-white text-3xl lg:text-5xl w-[90%] md:w-4/5 mx-auto font-bold pt-10">
            Dashboard
          </h1>
          <p className="text-base w-4/5 md:w-3/5 mx-auto text-white mt-10">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>

          <div className=" justify-center mt-7 flex gap-5">
            <NavLink
              className={`btn ${
                pathname === "/dashboard" ? "bg-gray-600 text-white" : ""
              }`}
              to=""
            >
              Cart
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `btn ${isActive ? "bg-gray-600 text-white" : ""}`
              }
              to="wishlist"
            >
              Wishlist
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;

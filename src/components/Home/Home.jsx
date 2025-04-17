import React from "react";
import { Banner, Categories, Gadgets } from "../index";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto mt-16 space-y-10 pb-10">
        <h1 className="text-center text-3xl font-bold">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="flex flex-col  gap-5 sm:flex-row">
          <Categories></Categories>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;

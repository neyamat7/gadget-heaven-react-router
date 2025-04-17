import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await fetch("/categories.json");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        throw new Error(`Category Data can not be loaded: ${error}`);
      }
    };
    fetchedData();
  }, []);

  return (
    <div className="max-w-full sm:w-[240px] bg-white p-3 py-5 rounded-md flex flex-col text-center gap-4 h-fit">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${
            isActive ? "bg-purple-600 text-white" : "bg-gray-100 text-black"
          } text-xl font-semibold  rounded-2xl py-2 `
        }
      >
        All Products
      </NavLink>

      {categories.map((categoryName) => (
        <CategoryItem
          categoryName={categoryName}
          key={categoryName.id}
        ></CategoryItem>
      ))}
    </div>
  );
};

export default Categories;

function CategoryItem({ categoryName }) {
  const { category, slug } = categoryName;
  return (
    <NavLink
      to={`category/${slug.toLowerCase()}`}
      className={({ isActive }) =>
        `${
          isActive ? "bg-purple-600 text-white" : "bg-gray-100 text-black"
        } text-xl   rounded-2xl py-2  `
      }
    >
      {category}
    </NavLink>
  );
}

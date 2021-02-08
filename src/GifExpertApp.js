import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import { Navbar } from "./components/Navbar";

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <Navbar />
      <hr />
      <div className="container">
        <AddCategory setCategories={setCategories} />

        <ol>
          {categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))}
        </ol>
      </div>
    </>
  );
};

export default GifExpertApp;

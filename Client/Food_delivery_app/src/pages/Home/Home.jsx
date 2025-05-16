import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/ExploreMenu/Menu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import Footer from "../../components/Footer/Footer";

function Home() {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
}

export default Home;

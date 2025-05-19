import React, { useContext, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/ExploreMenu/Menu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import Footer from "../../components/Footer/Footer";
import { CircleFadingArrowUp } from "lucide-react";
import { ScrollContext } from "../../context/ScrollContext";

function Home() {
  const [category, setCategory] = useState("All");

  const { topRef, scrollTo } = useContext(ScrollContext);
  return (
    <div>
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <div
        onClick={() => scrollTo(topRef)}
        className=" mt-10 pt-4 mr-10 flex justify-end"
      >
        <CircleFadingArrowUp
          size={30}
          className="text-gray-700 hover:text-orange-500 cursor-pointer hover:scale-[1.09] "
        />
      </div>
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utls/data";
import { motion } from "framer-motion";
import { RowContainer } from "./index";
import { useStateValue } from "../context/StateProvider";

const MenuContainer = () => {
  const [filter, setFilter] = useState("chicken");
  const [{ foodItems }, dispatch] = useStateValue();

  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold relative capitalize text-headingColor before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 before:bg-orange-500 transition-all ease-in-out duration-100 mr-auto">
          Our Hot Dishes
        </p>
        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((category) => (
              <motion.div
                key={category.id}
                whileTap={{ scale: 0.75 }}
                className={`${
                  filter === category.urlParamName ? "bg-cartNumBg" : "bg-card"
                } group  w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 hover:bg-red-500 items-center justify-center `}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`${
                    filter === category.urlParamName
                      ? "bg-white"
                      : "bg-cartNumBg"
                  } w-10 h-10 rounded-full group-hover:bg-white flex items-center justify-center shadow-lg`}
                >
                  <IoFastFood
                    className={`${
                      filter === category.urlParamName
                        ? "text-textColor"
                        : "text-white"
                    } group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={`${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } text-sm group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>
        <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category === filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;

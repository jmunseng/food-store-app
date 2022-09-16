import React, { useEffect, useRef } from "react";
import {
  CartContainer,
  HomeContainer,
  MenuContainer,
  RowContainer,
} from "./index";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useStateValue } from "../context/StateProvider";

const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const rowContainerRef = useRef();

  const scroll = (scrollOffset) => {
    rowContainerRef.current.scrollLeft += scrollOffset;
  };

  useEffect(() => {}, [cartShow]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <HomeContainer />
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold relative capitalize text-headingColor before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 before:bg-orange-500 transition-all ease-in-out duration-100">
            our fresh & healthy food
          </p>
          <div className=" hidden items-center justify-center md:flex gap-3">
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={() => scroll(-500)}
              className="w-8 h-8 rounded-lg bg-orange-300 flex items-center justify-center hover:bg-orange-500 cursor-pointer hover:shadow-lg"
            >
              <MdChevronLeft className=" text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={() => scroll(+500)}
              className="w-8 h-8 rounded-lg bg-orange-300 flex items-center justify-center hover:bg-orange-500 cursor-pointer hover:shadow-lg"
            >
              <MdChevronRight className=" text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          rowContainerRef={rowContainerRef}
          flag={true}
          data={foodItems?.filter((n) => n.category === "fruits")}
        />
      </section>

      <MenuContainer />
      {cartShow && <CartContainer />}
    </div>
  );
};
export default MainContainer;

import React, { useEffect, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const RowContainer = ({ flag, data, rowContainerRef }) => {
  const [{ cartItems }, dispatch] = useStateValue();
  const [items, setItems] = useState([]);

  const addToCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    addToCart();
  }, [items]);

  return (
    <div
      ref={rowContainerRef}
      className={`w-full flex items-center gap-3 my-12 bg-rowBg scroll-smooth justify-center ${
        flag ? "overflow-x-scroll scrollbar-none" : " flex flex-wrap "
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="w-275 h-[175px] min-w-[275px] md:w-300  md:min-w-[300px]  bg-cardOverlay rounded-lg backdrop-blur-lg py-2 px-4 my-12 hover:drop-shadow-lg flex flex-col justify-evenly items-center relative "
          >
            <div className="w-full flex items-center justify-end">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-40 h-40 drop-shadow-2xl -mt-8 absolute left-0"
              >
                <img
                  src={item?.imageURL}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md "
                onClick={() => setItems([...cartItems, item])}
              >
                <MdShoppingBasket className="text-white " />
              </motion.div>
            </div>
            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item?.calories} Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-textColor font-semibold">
                  <span className="text-sm text-red-500">$</span> {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex items-center justify-center flex-col">
          <img src={NotFound} alt={"nofound"} className="h-340" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items not avaluable
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;

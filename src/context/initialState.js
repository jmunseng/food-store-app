import { fetchCart, fetchUser } from "../utls/LocalStorageData";

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
  user: userInfo,
  footItems: null,
  cartShow: false,
  cartItems: cartInfo,
};

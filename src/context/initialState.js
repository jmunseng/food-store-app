import { fetchUser } from "../utls/LocalStorageData";

const userInfo = fetchUser();

export const initialState = {
  user: userInfo,
};

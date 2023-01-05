import { userEmail, userInfo } from "./atom";
import { selector } from "recoil";

export const getUserEmail = selector({
  key: "getUserEmail",
  get: ({ get }) => {
    const email = get(userEmail);
    return email;
  },
});

export const getUserInfo = selector({
  key: "getUserInfo",
  get: ({ get }) => {
    const info = get(userInfo);
    return info;
  },
});

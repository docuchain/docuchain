import { userEmail, userUid, userInfo, theme } from "./atom";
import { selector } from "recoil";

export const getUserEmail = selector({
  key: "getUserEmail",
  get: ({ get }) => {
    const email = get(userEmail);
    return email;
  },
});

export const getUserUid = selector({
  key: "getUserUid",
  get: ({ get }) => {
    const uid = get(userUid);
    return uid;
  },
});
export const getUserInfo = selector({
  key: "getUserInfo",
  get: ({ get }) => {
    const info = get(userInfo);
    return info;
  },
});

export const getTheme = selector({
  key: "getTheme",
  get: ({ get }) => {
    const darkTheme = get(theme);
    return darkTheme;
  },
});

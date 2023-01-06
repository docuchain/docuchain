import { userEmail, userUid } from "./atom";
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

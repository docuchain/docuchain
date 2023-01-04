import { userEmail } from "./atom";
import { selector } from "recoil";

export const getUserEmail = selector({
  key: "getUserEmail",
  get: ({ get }) => {
    const email = get(userEmail);
    return email;
  },
});

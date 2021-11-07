import { atom } from "recoil";
const currentCartState = atom({
  key: "currentCartState",
  default: [],
});
export { currentCartState };

import React from "react";
import { useRecoilState } from "recoil";
import { currentCartState } from "../atoms/currentCartState";

const CartFunctions = {
  OnAddToCart(item) {
    const [cartItems, setCartItems] = useRecoilState(currentCartState);
    let newCart = Object.assign([], cartItems);
    const foundInCart = newCart.find((v) => v?.name === item?.name);
    const currentItemIndex = newCart.indexOf(foundInCart);
    if (newCart?.length >= 5 && foundInCart === undefined) {
      //check if the entries is more than 5 and currently not in cart
      window.alert("The robot is exceed 5 items");
      return;
    } else if (foundInCart?.qty + 1 > item?.stock) {
      //check if the item in cart is exceeding stock
      window.alert(
        `The currently selected robot is exceeding the stock quantity, stock ${item?.stock} : selected in cart ${foundInCart?.qty}`
      );
      return;
    } else {
      if (currentItemIndex === -1) {
        newCart = [...newCart, { ...item, qty: 1 }];
      } else {
        newCart[currentItemIndex].qty += 1;
      }
    }
    setCartItems(newCart);
  },
  HandleQuantityChange(item, type) {
    const [cartItems, setCartItems] = useRecoilState(currentCartState);
    console.log(item, type);
    let newCart = Object.assign([], cartItems);
    const foundInCart = newCart.find((v) => v?.name === item?.name);
    const currentItemIndex = newCart.indexOf(foundInCart);
    // if (currentItemIndex !== -1) {
    //   if (type === "increase") {
    //     newCart[currentItemIndex];
    //   }
    // }
  },
};

export { CartFunctions };

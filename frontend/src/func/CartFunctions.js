import React from "react";

const CartFunctions = {
  onAddToCart(cartItems, setCartItems, item) {
    const existingItemInCart = cartItems.find((v) => v.name === item.name);
    if (existingItemInCart == undefined) {
      if (cartItems?.length >= 5) {
        //check if the robot is exceed 5 uniques robot
        window.alert("The robot is exceed 5 items");
        return;
      } else {
        let newCart = [...cartItems];
        newCart.push({ ...item, qty: 1 });
        setCartItems(newCart);
        return;
      }
    } else {
      this.modifyCart(cartItems, setCartItems, item, 1);
    }
  },
  modifyCart(cartItems, setCartItems, item, amount) {
    const newCart = cartItems?.map((cartItem) => {
      if (cartItem?.name == item?.name) {
        if (cartItem?.qty + amount > item?.stock) {
          //check if the item in cart is exceeding stock
          window.alert(
            `The currently selected robot is exceeding the stock quantity of ${item?.stock} items`
          );
        } else if (cartItem?.qty + amount <= 0) {
          return null;
        } else {
          cartItem = { ...cartItem, qty: cartItem["qty"] + amount };
        }
      }
      return cartItem;
    });
    setCartItems(newCart.filter((v) => v !== null));
  },
  getTotalAmount(cartItems) {
    const initialValue = { qty: 0, price: 0 };
    if (cartItems.length !== undefined && cartItems.length !== 0) {
      const totalItems = cartItems.reduce((acc, nextValue) => {
        const totalPrice = acc?.price + nextValue?.qty * nextValue?.price;
        const totalQty = acc?.qty + nextValue?.qty;
        return {
          qty: totalQty,
          price: Math.round(totalPrice * 100) / 100,
        };
      }, initialValue);
      return totalItems;
    } else {
      return initialValue;
    }
  },
};

export { CartFunctions };

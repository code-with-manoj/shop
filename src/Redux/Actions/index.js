import actionTypes from "./actionTypes";

export const increaseQuantity = () => {
  return {
    type: `${actionTypes.increase}`,
  };
};

export const decreaseQuantity = () => {
  return {
    type: `${actionTypes.decrease}`,
  };
};

export const addToCart = () => {
  return {
    type: `${actionTypes.addCart}`,
  };
};

export const removeToCart = () => {
  return {
    type: `${actionTypes.removeCart}`,
  };
};

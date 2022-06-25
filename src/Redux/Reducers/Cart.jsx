const product = 0;

const Cart = (state = product, action) => {
  switch (action.type) {
    case "AddToCart":
      return state + 1;
    case "RemoveToCart":
      return state - 1;
    default:
      return state;
  }
};

export default Cart;

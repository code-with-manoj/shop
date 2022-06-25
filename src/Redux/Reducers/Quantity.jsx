const quantity = 1;
const Quantity = (state = quantity, action) => {
  switch (action.type) {
    case "Increase":
      return state + 1;

    case "Decrease":
      return state - 1;
    default:
      return state;
  }
};

export default Quantity;

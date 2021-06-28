const cartReducer = (
  state = {
    numberOfItemsInCart: 0,
    totalPrice: 0,
    productsInCart: [],
  },
  action
) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log(action.payload);
      return {
        ...state,
        numberOfItemsInCart: action.payload.totalItems,
        productsInCart: [...state.productsInCart, action.payload.product],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        productsInCart: state.productsInCart.filter(
          (product) => product.productId !== action.payload.productId
        ),
      };
    default:
      return state;
  }
};
export default cartReducer;

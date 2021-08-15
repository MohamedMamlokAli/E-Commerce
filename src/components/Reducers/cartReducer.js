const cartReducer = (
  state = {
    numberOfItemsInCart: 0,
    totalPrice: 0,
    user: null,
    productsInCart: [],
  },
  action
) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const currentCartProducts = state.productsInCart;
      let totalPrice = 0;
      let productExist = false;
      let newCartProducts = currentCartProducts.map((p) => {
        if (p.productId === action.payload.product.productId) {
          productExist = true;
          p.howManyBought += action.payload.product.howManyBought;
        }

        p.totalPriceForItem = p.howManyBought * p.productPrice;
        totalPrice += p.totalPriceForItem;
        console.log(p);
        return p;
      });

      console.log(totalPrice);
      if (!productExist)
        newCartProducts = [...newCartProducts, action.payload.product];

      return {
        ...state,
        totalPrice: totalPrice,
        numberOfItemsInCart: (state.numberOfItemsInCart +=
          action.payload.product.howManyBought),
        productsInCart: newCartProducts,
      };
      break;
    case 'REMOVE_ITEM':
      const newModifiedProducts = state.productsInCart.filter(
        (product) => product.productId !== action.payload.productId
      );

      console.log(newModifiedProducts);
      console.log(
        state.numberOfItemsInCart,
        action.payload.howManyBought,
        state.numberOfItemsInCart - action.payload.howManyBought
      );
      return {
        ...state,
        totalPrice: state.totalPrice - action.payload.totalPrice,
        numberOfItemsInCart:
          state.numberOfItemsInCart + 1 - action.payload.howManyBought,
        productsInCart: newModifiedProducts,
      };
      break;
    case 'CLEAR_CART':
      return {
        ...state,
        productsInCart: [],
        totalPrice: 0,
        numberOfItemsInCart: 0,
      };
      break;
    case 'ADD_USER':
      return {
        ...state,
        user: action.payload.user,
      };
      break;
    default:
      return state;
  }
};
export default cartReducer;

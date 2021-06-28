const ProductsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCHED':
      return (state = [...action.payload]);
    default:
      return state;
  }
};
export default ProductsReducer;

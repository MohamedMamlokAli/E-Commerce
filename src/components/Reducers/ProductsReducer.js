const ProductsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCHED':
      return (state = [...action.payload]);
  }
  return state;
};
export default ProductsReducer;

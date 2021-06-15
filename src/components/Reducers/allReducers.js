import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import ProductReducer from './ProductsReducer';
const allReducers = combineReducers({
  products: ProductReducer,
  cart: cartReducer,
});
export default allReducers;

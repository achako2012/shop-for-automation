import { combineReducers } from "redux";
import { ProductI } from "types";


interface ProductReducerStateI {
  products: ProductI[];
}

const productsState = {
  products: [],
};

const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const productReducer = (
  state: ProductReducerStateI = productsState,
  action: any
) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { products: [...state.products, action.product] };
    case REMOVE_PRODUCT:
      const filteredProducts = state.products.filter((e) => e.name !== action.name);
      return { products:[...filteredProducts] };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const addProduct = (product: any) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const removeProduct = (productName: string) => ({
  type: REMOVE_PRODUCT,
  payload: productName,
});

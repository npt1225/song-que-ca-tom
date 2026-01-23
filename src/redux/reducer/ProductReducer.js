import { LAY_DANH_SACH_PRODUCTS } from "../actions/ProductsAction";


const stateDefault = {
  arrProducts: [],
};

export const ProductsReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_PRODUCTS:
      return {
        ...state,
        arrProducts: action.arrProducts,
      };

    default:
      return state;
  }
};

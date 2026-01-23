import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { ProductsReducer } from "./reducer/ProductReducer";
import { CartReducer } from "./reducer/cartReducer";




const rootReducer = combineReducers({
    ProductsReducer,
    CartReducer
});

let middleWare = applyMiddleware(reduxThunk);
let composeCustom = compose(middleWare);

export const store = createStore(rootReducer, composeCustom);
import { configureStore } from "@reduxjs/toolkit";
import categorysReducer from "./reducers/categorys";
import productsReducer from "./reducers/products";

const store = configureStore({
    reducer: {
        categorys: categorysReducer,
        products: productsReducer,
    }
});

export default store;
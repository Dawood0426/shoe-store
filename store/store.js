import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./CreateSlice/slice";

export let myStore = configureStore ({
    reducer: {
        productSlice: productSlice.reducer, // Ensures `productSlice` is a key in the store
      },
});


export default myStore;
import { configureStore } from "@reduxjs/toolkit";
import listcardReducer from './cards';

export default configureStore({
    reducer: {
        card: listcardReducer
    },
})
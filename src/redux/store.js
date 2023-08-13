import { configureStore } from "@reduxjs/toolkit";
import listcardReducer from "./cards";
import { loadState } from "./browser-storage";

export default configureStore({
  reducer: {
    card: listcardReducer,
  },
  preloadedState: {
    card: loadState(),
  },
});

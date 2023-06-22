import { configureStore } from "@reduxjs/toolkit";
import adminPanelReducer from "../reducers/adminPanelSlice";

const store = configureStore({
  reducer: {
    adminPanel: adminPanelReducer,
  },
});

export default store;

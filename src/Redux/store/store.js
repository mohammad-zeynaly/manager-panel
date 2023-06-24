import { configureStore } from "@reduxjs/toolkit";
import adminPanelReducer from "../reducers/adminPanelSlice";
import { fetchGetAllData } from "../reducers/adminPanelSlice";

const store = configureStore({
  reducer: {
    adminPanel: adminPanelReducer,
  },
});

store.dispatch(fetchGetAllData());
export default store;

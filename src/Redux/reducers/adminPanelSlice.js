import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarStatus: false,
};

const adminPanelSlice = createSlice({
  name: "adminPanel",
  initialState: initialState,

  reducers: {
    sidebarStatusHandler: (state, action) => {
      state.sidebarStatus = !state.sidebarStatus;
    },
  },
});

export default adminPanelSlice.reducer;
export const { sidebarStatusHandler } = adminPanelSlice.actions;

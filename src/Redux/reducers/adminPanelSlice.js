import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllData } from "../../services/adminPanelServices";

const initialState = {
  sidebarStatus: false,
  status: "idle",
  allPanelData: [],
};

export const fetchGetAllData = createAsyncThunk(
  "/adminPanel/getData",
  async () => {
    const response = await getAllData();
    return response;
  }
);

const adminPanelSlice = createSlice({
  name: "adminPanel",
  initialState: initialState,

  reducers: {
    sidebarStatusHandler: (state, action) => {
      state.sidebarStatus = !state.sidebarStatus;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchGetAllData.fulfilled, (state, action) => {
        state.status = "completed";
        state.allPanelData = action.payload;
        console.log("fetchGetAllData.fulfilled=> ", action);
      })
      .addCase(fetchGetAllData.rejected, (state, action) => {
        state.status = "failed";
        state.status = action.error.message;
      });
  },
});

export default adminPanelSlice.reducer;
export const { sidebarStatusHandler } = adminPanelSlice.actions;

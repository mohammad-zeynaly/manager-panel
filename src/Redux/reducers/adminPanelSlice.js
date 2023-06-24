import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllData,
  createNewProduct,
} from "../../services/adminPanelServices";

const initialState = {
  sidebarStatus: false,
  status: "idle",
  allPanelData: [],
  newImagePath: "",
};

// get all mangerPanel Data
export const fetchGetAllData = createAsyncThunk(
  "/adminPanel/getData",
  async () => {
    const response = await getAllData();
    return response;
  }
);

// add New Product To Send Supabase
export const addNewProduct = createAsyncThunk(
  "/adminPanel/newProduct",
  async (newProduct) => {
    const response = await createNewProduct(newProduct);

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

    newImagePathHandler: (state, action) => {
      state.newImagePath = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchGetAllData.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = "completed";
          state.allPanelData = action.payload;
        }
      })
      .addCase(fetchGetAllData.rejected, (state, action) => {
        state.status = "failed";
        state.status = action.error.message;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        console.log("action add new product=> ", action);
        state.allPanelData.push(action.meta.arg);
      });
  },
});

export default adminPanelSlice.reducer;
export const { sidebarStatusHandler, newImagePathHandler } =
  adminPanelSlice.actions;

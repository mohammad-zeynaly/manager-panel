import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllData,
  createNewProduct,
  deleteMainProduct,
} from "../../services/adminPanelServices";

const initialState = {
  sidebarStatus: false,
  modalStatus: false,
  isDelete: false,
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

export const deleteProduct = createAsyncThunk(
  "/adminPanel/deleteProduct",
  async ({ id, imgUrl }) => {
    const response = await deleteMainProduct({ id, imgUrl });

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

    modalStatusHandler: (state, action) => {
      state.modalStatus = !state.modalStatus;
    },
    isDeleteHandler: (state, action) => {
      state.isDelete = action.payload;
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
        state.allPanelData.push(action.meta.arg);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        console.log("inside deleteProduct reducer => ", state.isDelete);
        if (state.isDelete) {
          const filteredData = state.allPanelData.filter(
            (item) => item.id !== action.meta.arg.id
          );

          state.allPanelData = filteredData;
          state.isDelete = false;
        }
      });
  },
});

export default adminPanelSlice.reducer;
export const { sidebarStatusHandler, modalStatusHandler, isDeleteHandler } =
  adminPanelSlice.actions;

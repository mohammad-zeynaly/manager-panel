import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllData,
  createNewProduct,
  deleteMainProduct,
  updateMainProduct,
} from "../../services/adminPanelServices";

const initialState = {
  sidebarStatus: false,
  modalStatus: false,
  isDelete: false,
  mainEditProduct: {},
  status: "idle",
  allPanelData: [],
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

export const updateProduct = createAsyncThunk(
  "/adminPanel/updateProduct",
  async (mainProduct) => {
    const response = await updateMainProduct(mainProduct);
    return response;
  }
);

const adminPanelSlice = createSlice({
  name: "adminPanel",
  initialState: initialState,

  reducers: {
    sidebarStatusHandler: (state, action) => {
      state.sidebarStatus = action.payload;
    },

    modalStatusHandler: (state, action) => {
      state.modalStatus = action.payload;
    },
    isDeleteHandler: (state, action) => {
      state.isDelete = action.payload;
    },
    mainEditProductHandler: (state, action) => {
      state.mainEditProduct = action.payload;
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
        if (state.isDelete) {
          const filteredData = state.allPanelData.filter(
            (item) => item.id !== action.meta.arg.id
          );

          state.allPanelData = filteredData;
          state.isDelete = false;
        }
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const { id, name, price, img } = action.meta.arg;

        if (state.mainEditProduct && state.mainEditProduct.id === id) {
          state.mainEditProduct = {
            ...state.mainEditProduct,
            name,
            price,
            img,
          };
        }

        const productIndex = state.allPanelData.findIndex(
          (product) => product.id === id
        );

        if (productIndex !== -1) {
          state.allPanelData[productIndex] = {
            ...state.allPanelData[productIndex],
            name,
            price,
            img,
          };
        }
      });
  },
});

export default adminPanelSlice.reducer;
export const {
  sidebarStatusHandler,
  modalStatusHandler,
  isDeleteHandler,
  mainEditProductHandler,
} = adminPanelSlice.actions;

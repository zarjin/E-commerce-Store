import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://vercel-backend-kappa-wine.vercel.app/api/product/create",
        productData
      );

      return response.data.message;
    } catch (error) {
      return (
        rejectWithValue(error.response?.data?.message) || "Product Create Error"
      );
    }
  }
);

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://vercel-backend-kappa-wine.vercel.app/api/product/get/${productId}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://vercel-backend-kappa-wine.vercel.app/api/product/get`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `https://vercel-backend-kappa-wine.vercel.app/api/product/delete/${productId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    product: null,
    allProduct: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Create Product
    builder.addCase(createProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false;
      toast.success(action.payload);
    });

    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
      toast.error(action.payload);
    });
    // Get Product
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = false;
      toast.success(action.payload);
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.loading = false;
      toast.error(action.payload);
    });
    // Get All Product
    builder.addCase(getAllProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.allProduct = action.payload;
    });
    builder.addCase(getAllProduct.rejected, (state, action) => {
      state.loading = false;
      toast.error(action.payload);
    });
    // Delete Product
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
      toast.success(action.payload);
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false;
      toast.error(action.payload);
    });
  },
});

export default productSlice.reducer;

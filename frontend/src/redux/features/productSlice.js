import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (productData) => {
    const response = await axios.post(
      "http://localhost:3000/api/product/create",
      productData
    );

    return response.data.message;
  }
);

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (productId) => {
    const response = await axios.get(
      `http://localhost:3000/api/product/get/${productId}`
    );

    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    product: null,
    allProduct: null,
    loading: false,
    successMessage: null,
    errorMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.successMessage = action.error.message;
    });

    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
    });

    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
    });
  },
});

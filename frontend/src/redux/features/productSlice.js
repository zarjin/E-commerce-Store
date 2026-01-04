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

export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async () => {
    const response = await axios.get(`http://localhost:3000/api/product/get`);

    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (productId) => {
    const response = await axios.delete(
      `http://localhost:3000/api/product/delete/${productId}`
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
    // Create Product
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
    // Get Product
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
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
      state.errorMessage = action.payload;
    });
    // Delete Product
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.successMessage = action.payload;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
    });
  },
});

export default productSlice.reducer;

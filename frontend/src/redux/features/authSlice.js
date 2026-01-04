import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("auth/register", async (user) => {
  const response = await axios.post(
    "http://localhost:3000/api/auth/register",
    user,
    { withCredentials: true }
  );
  return response.data;
});

export const login = createAsyncThunk("auth/login", async (user) => {
  const response = await axios.post(
    "http://localhost:3000/api/auth/login",
    user,
    { withCredentials: true }
  );

  return response.data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  const response = await axios.post("http://localhost:3000/api/auth/logout");
  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    successMessage: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Register
    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.successMessage = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    //Login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.successMessage = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    //Logout
    builder.addCase(logout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.loading = false;
      state.successMessage = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default authSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

/* ======================
   REGISTER
====================== */
export const register = createAsyncThunk(
  "auth/register",
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "https://vercel-backend-kappa-wine.vercel.app/api/auth/register",
        user,
        { withCredentials: true }
      );
      return res.data.message;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

/* ======================
   LOGIN
====================== */
export const login = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "https://vercel-backend-kappa-wine.vercel.app/api/auth/login",
        user,
        { withCredentials: true }
      );
      return res.data.message;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

/* ======================
   LOGOUT
====================== */
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "https://vercel-backend-kappa-wine.vercel.app/api/auth/logout",
        {},
        { withCredentials: true }
      );
      return res.data.message;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

/* ======================
   SLICE
====================== */
const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // REGISTER
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload);
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })

      // LOGIN
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })

      // LOGOUT
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload);
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      });
  },
});

export default authSlice.reducer;

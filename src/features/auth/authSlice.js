
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = authService.getCurrentUser();

const initialState = {
  user: user || null,
  loading: false,
  error: null,
};

export const register = createAsyncThunk("auth/register", async (data, thunkAPI) => {
  try {
    return await authService.register(data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    return await authService.login(data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  authService.logout();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;

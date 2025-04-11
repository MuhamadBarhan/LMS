import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for Signup
export const signupUser = createAsyncThunk(
  "user/signupUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:8080/registration/signup", userData);
      return res.data; // Should return { name, email }
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Signup failed");
    }
  }
);

// Async thunk for Login
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (loginData, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:8080/registration/login", loginData);
      return res.data; // Should return { username, email, userRole }
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    email: "",
    userRole: "",
    isLoggedIn: false,
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.username = "";
      state.email = "";
      state.userRole = "";
      state.isLoggedIn = false;
      localStorage.removeItem("user");
    },
    setUser(state, action) {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.userRole = action.payload.userRole;
      state.isLoggedIn = true;
    },
  },
  
  extraReducers: (builder) => {
    builder
      // Signup
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.username = action.payload.name;
        state.email = action.payload.email;
        state.userRole = action.payload.userRole || "Student"; // optional
        state.isLoggedIn = true;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.userRole = action.payload.userRole;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, setUser } = userSlice.actions;
export default userSlice.reducer;

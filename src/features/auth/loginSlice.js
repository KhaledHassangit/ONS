import { _post } from "@/api/apiInstance";
import { userApis } from "@/api/userEndpoint";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  data: null,
  error: null,
  loginLoading: false,
  activateCodeLoading: false,
  activateData: null,
};

export const handleLogin = createAsyncThunk(
  "loginSlice/handleLogin",
  async (data) => {
    try {
      const response = await _post(userApis.routes.login, data);
      // Return only serializable data from the response
      return {
        status: response.status,
        data: response.data,
        statusText: response.statusText,
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const handleActivateCode = createAsyncThunk(
  "loginSlice/handleActivateCode",
  async (data) => {
    try {
      const response = await _post(userApis.routes.activate_login, data);
      return {
        status: response.status,
        data: response.data,
        statusText: response.statusText,
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(handleLogin.pending, (state) => {
      state.loginLoading = true;
      state.error = null;
    });
    builder.addCase(handleLogin.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loginLoading = false;
    });
    builder.addCase(handleLogin.rejected, (state, action) => {
      state.loginLoading = false;
      state.error = action.error.message || "Login failed";
    });
    builder.addCase(handleActivateCode.pending, (state) => {
      state.activateCodeLoading = true;
    });
    builder.addCase(handleActivateCode.fulfilled, (state, action) => {
      state.activateData = action.payload;
      state.activateCodeLoading = false;
    });
  },
});

export default loginSlice.reducer;

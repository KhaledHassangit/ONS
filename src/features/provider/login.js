import { _post } from "@/api/apiInstance";
import { userApis } from "@/api/userEndpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : null,
    loginProviderLoading : false,
    error : null
}

export const handleLoginProvider = createAsyncThunk("loginProviderSlice/handleLoginProvider", async(data) => {
    const response = await _post(userApis.routes.provider_login, data);
    return response?.data;
})

export const loginProviderSlice = createSlice({
    name : "loginProviderSlice",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(handleLoginProvider.pending, (state) => {
            state.loginProviderLoading = true;
            state.error = null;
        })
        builder.addCase(handleLoginProvider.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loginProviderLoading = false;
        })
    }
})

export default loginProviderSlice.reducer;
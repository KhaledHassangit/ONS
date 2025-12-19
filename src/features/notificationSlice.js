import { _get, getAccessToken } from "@/api/apiInstance";
import { userApis } from "@/api/userEndpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [],
    loading : false, 
    error:null
}

export const fetchNotifications = createAsyncThunk("notification/fetchNotifications", async () => {
    const response = await _get(userApis.routes.fetchNotifications + '?access-token='+getAccessToken());
    return response?.data;
})

export const notificationSlice = createSlice({
    name:"notificationSlice",
    initialState,
    extraReducers : (builder) => {
        builder.addCase(fetchNotifications.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchNotifications.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
    }
})

export default notificationSlice.reducer;
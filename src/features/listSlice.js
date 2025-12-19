import { _get } from "@/api/apiInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    list_data : null,
    list_data_loading:false,
}

export const handleFetchList = createAsyncThunk("listSlice/handleFetchList",async(access_token,{rejectWithValue}) => {
    try{
        const response = await _get(`lists?access-token=${access_token}`);
        return response.data;
    }
    catch(error) {
        return rejectWithValue(error.response.data)
    }
}) 

export const listSlice = createSlice({
    name:"listSlice", 
    initialState,
    extraReducers:(builder) => {
        builder
        .addCase(handleFetchList.pending , (state, action) => {
            state.list_data_loading = true
        })
        .addCase(handleFetchList.fulfilled ,(state,action) => {
            state.list_data_loading = false,
            state.list_data = action.payload
        })
    }
})

export default listSlice.reducer;
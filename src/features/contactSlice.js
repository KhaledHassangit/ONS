import { _post } from "@/api/apiInstance";
import { userApis } from "@/api/userEndpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    is_loading:false,
}

export const handleSendContactData = createAsyncThunk("contactSlice/handleSendContactData",async(data,{rejectWithValue}) => {
    try {
      const response = await _post(userApis.routes.contact , data );
      return response.data
    }catch(error) {
        return rejectWithValue(error.response.data)
    }
})

export const contactSlice = createSlice({
    name:"contactSlice",
    initialState,
    extraReducers:(builder) => {
        builder
        .addCase(handleSendContactData.pending , (state, action) => {
            state.is_loading = true
        })
        .addCase(handleSendContactData.fulfilled ,(state, action)=> {
            state.is_loading = false
        })
    }
})

export default contactSlice.reducer;
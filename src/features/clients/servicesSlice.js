import { _get } from "@/api/apiInstance";
import { userApis } from "@/api/userEndpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    new_cleaning_service_data:null,
    new_cleaning_service_loading:false,
    progress_cleaning_service_data:null,
    progress_cleaning_service_loading:false,
    completed_cleaning_service_data:null,
    completed_cleaning_service_loading:false,
    cancelled_cleaning_service_data:null,
    cancelled_cleaning_service_loading:false,
}

export const handleFetchNewCleaningService = createAsyncThunk("serviceSlice/handleFetchNewCleaningService",async(access_token ,{rejectWithValue}) => {
    try {
         const response = await _get(userApis.routes.client_my_clean_service+`?access-token=${access_token}`)
        return response?.data;
        }
    catch(error) {
        return rejectWithValue(error.response.data)
    }
})

export const handleFetchProgressCleaningService = createAsyncThunk("serviceSlice/handleFetchProgressCleaningService",async(access_token ,{rejectWithValue}) => {
    try {
         const response = await _get(userApis.routes.client_my_progress_clean_service+`?access-token=${access_token}`)
        return response?.data;
        }
    catch(error) {
        return rejectWithValue(error.response.data)
    }
})

export const handleFetchCompletedCleaningService = createAsyncThunk("serviceSlice/handleFetchCompletedCleaningService",async(access_token ,{rejectWithValue}) => {
    try {
         const response = await _get(userApis.routes.client_my_complete_clean_service+`?access-token=${access_token}`)
        return response?.data;
        }
    catch(error) {
        return rejectWithValue(error.response.data)
    }
})

export const handleFetchCancelledCleaningService = createAsyncThunk("serviceSlice/handleFetchCancelledCleaningService",async(access_token ,{rejectWithValue}) => {
    try {
         const response = await _get(userApis.routes.client_my_cancelled_clean_service+`?access-token=${access_token}`)
        return response?.data;
        }
    catch(error) {
        return rejectWithValue(error.response.data)
    }
})


export const serviceSlice = createSlice({
    name:"serviceSlice",
    initialState,
    extraReducers :(builder) => {
        builder
        .addCase(handleFetchNewCleaningService.pending , (state , action) =>{
            state.new_cleaning_service_loading = true
        })
        .addCase(handleFetchNewCleaningService.fulfilled ,(state, action) =>{
            state.new_cleaning_service_data = action.payload ;
            state.new_cleaning_service_loading = false
        })
        .addCase(handleFetchProgressCleaningService.pending , (state , action) =>{
            state.progress_cleaning_service_loading = true
        })
        .addCase(handleFetchProgressCleaningService.fulfilled ,(state, action) =>{
            state.progress_cleaning_service_data = action.payload ;
            state.progress_cleaning_service_loading = false
        })
        .addCase(handleFetchCompletedCleaningService.pending , (state , action) =>{
            state.completed_cleaning_service_loading = true
        })
        .addCase(handleFetchCompletedCleaningService.fulfilled ,(state, action) =>{
            state.completed_cleaning_service_data = action.payload ;
            state.completed_cleaning_service_loading = false
        })
        .addCase(handleFetchCancelledCleaningService.pending , (state , action) =>{
            state.cancelled_cleaning_service_loading = true
        })
        .addCase(handleFetchCancelledCleaningService.fulfilled ,(state, action) =>{
            state.cancelled_cleaning_service_data = action.payload ;
            state.cancelled_cleaning_service_loading = false
        })
    }
})

export default serviceSlice.reducer;
import { _get } from "@/api/apiInstance";
import { userApis } from "@/api/userEndpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [],
    get_training_loading : false,
    get_training_by_id_loading : false,
}

export const handleGetAllTraining = createAsyncThunk("trainingSlice/handleGetAllTraining", async({accesstoken="xfd0Hf0PeFAaAEphlPS6dLLhv_c9lLnt"}) => {
    const response = await _get(userApis.routes.fetch_training + `?access-token=${accesstoken}`)
    // Return only the data property to avoid passing non-serializable values like headers
    return { data: response.data };
})

export const handleGetTrainingById = createAsyncThunk("trainingSlice/handleGetTrainingById", async({accesstoken="xfd0Hf0PeFAaAEphlPS6dLLhv_c9lLnt", id}) => {
    const response = await _get(userApis.routes.fetch_training_by_id + `?access-token=${accesstoken}&id=${id}`)
    return { data: response.data };
})

export const trainingSlice  = createSlice({
    name : "trainingSlice", 
    initialState,
    extraReducers : (builder) => {
        builder.addCase(handleGetAllTraining.pending, (state) => {
            state.get_training_loading = true;
        })
        builder.addCase(handleGetAllTraining.fulfilled, (state, action) => {
            state.get_training_loading = false;
            state.data = action.payload;
        })
        builder.addCase(handleGetTrainingById.pending, (state) => {
        state.get_training_by_id_loading = true;
        })
        builder.addCase(handleGetTrainingById.fulfilled, (state, action) => {
            state.get_training_by_id_loading = false;
            state.data = action.payload;
        })  
    }
})

export default trainingSlice.reducer;
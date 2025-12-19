import { _get, _post } from "@/api/apiInstance";
import { userApis } from "@/api/userEndpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [],
    loading : false,
    error : null,
    addTimeSlot : false,
    addTimeSlotLoading : false,
    addTimeSlotError : null
}

export const handleFetchProviderCalander = createAsyncThunk("providerCalanderSlice/handleFetchProviderCalander",async({accesstoken})=> {
    const response = await _get(userApis.routes.provider_calander + `?access-token=${accesstoken}`)
    return response;
})

export const handleAddTimeSlot = createAsyncThunk("providerCalanderSlice/handleAddTimeSlot",async({accesstoken,formData})=> {
    const response = await _post(userApis.routes.provider_add_time + `?access-token=${accesstoken}` , formData)
    return response;
})

export const providerCalanderSlice = createSlice({
    name:"providerCalanderSlice",
    initialState,
    extraReducers:(builder) => {
        builder.addCase(handleFetchProviderCalander.pending , (state) => {
            state.loading = true;
        })
        builder.addCase(handleFetchProviderCalander.fulfilled , (state , action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(handleAddTimeSlot.pending , (state) => {
            state.addTimeSlotLoading = true;
        })
        builder.addCase(handleAddTimeSlot.fulfilled , (state , action) => {
            state.addTimeSlotLoading = false;
        })
    }
})

export default providerCalanderSlice.reducer;
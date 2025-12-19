import { _get, _post } from "@/api/apiInstance";
import { userApis } from "@/api/userEndpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [],
    loading : false,
    error : null,
    addReport : false,
    addReportLoading : false,
}

export const handleCreateReport = createAsyncThunk("createReportSlice/handleCreateReport",async({accesstoken,formData})=> {
    const response = await _post(userApis.routes.provider_create_report + `?access-token=${accesstoken}` , formData)
    return response?.data;
})

export const createReportSlice = createSlice({
    name:"createReportSlice",
    initialState,
    extraReducers:(builder) => {
        builder.addCase(handleCreateReport.pending , (state) => {
            state.loading = true;
        })
        builder.addCase(handleCreateReport.fulfilled , (state , action) => {
            state.loading = false;
            state.data = action.payload;
        })
    }
})

export default createReportSlice.reducer;
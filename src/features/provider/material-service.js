import { _get } from "@/api/apiInstance";
import { userApis } from "@/api/userEndpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    provider_material_service_loading : false,
    provider_material_service_data : []
}

export const handleProviderMaterialService = createAsyncThunk("materialServiceSlice/handleProviderMaterialService",async({accesstoken})=> {
    const response = await _get(userApis.routes?.fetch_provider_material + `?access-token=${accesstoken}`)
    return response?.data;
})

export const materialServiceSlice = createSlice({
    name:"materialServiceSlice",
    initialState,
    extraReducers : (builder) => {
        builder.addCase(handleProviderMaterialService.pending, (state) => {
            state.provider_material_service_loading = true;
        })
        builder.addCase(handleProviderMaterialService.fulfilled, (state, action) => {
            state.provider_material_service_loading = false;
            state.provider_material_service_data = action.payload;
        })
    }
})

export default materialServiceSlice.reducer;
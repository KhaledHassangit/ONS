import { _get, _post } from "@/api/apiInstance";
import { userApis } from "@/api/userEndpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    all_properites:null,
    all_properites_loading:false,
    property_details:null,
    property_details_loading:false,
    create_property_loading:false
}

export const handleFetchAllProperties = createAsyncThunk("propertiesSlice/handleFetchAllProperties",async(access_token ,{rejectWithValue}) => {
    try{
      const response = await _get(userApis.routes.my_properties+`?access-token=${access_token}`);
      return response?.data
    }catch(error) {
        return rejectWithValue(error.response.data)
    }
})

export const handleFetchPropertyDetail = createAsyncThunk("propertiesSlice/handleFetchPropertyDetail",async({access_token , id} , {rejectWithValue}) => {
    try{
        const response = await _get(userApis.routes.property_view+`?access-token=${access_token}&id=${id}`);
        return response?.data;
    }
    catch(error) {
        return rejectWithValue(error?.response?.data)
    }
})

export const handleCreateProperty = createAsyncThunk("propertiesSlice/handleCreateProperty",async({access_token , data}, {rejectWithValue}) => {
    try {
        const response = await _post(userApis.routes.create_property+`?access-token=${access_token}` , data);
        return response.data;
    }catch(error) {
        return rejectWithValue(error?.response?.data)
    }
})

export const propertiesSlice = createSlice({
    name:"propertiesSlice",
    initialState,
    extraReducers : (builder) => {
        builder
        .addCase(handleFetchAllProperties.pending , (state, action) =>{
            state.all_properites_loading = true
        })
        .addCase(handleFetchAllProperties.fulfilled, (state,action) => {
            state.all_properites_loading = false,
            state.all_properites = action.payload
        })
        .addCase(handleFetchPropertyDetail.pending ,(state, action) => {
            state.property_details_loading = true
        })
        .addCase(handleFetchPropertyDetail.fulfilled , (state,action) => {
            state.property_details = action.payload,
            state.property_details_loading = false
        })
        .addCase(handleCreateProperty.pending , (state, action) => {
            state.create_property_loading = true
        })
        .addCase(handleCreateProperty.fulfilled ,(state, action) => {
            state.create_property_loading = false
        })
    }
})

export default propertiesSlice.reducer;
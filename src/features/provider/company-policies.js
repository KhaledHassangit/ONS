import { _get } from "@/api/apiInstance";
import { userApis } from "@/api/userEndpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const handleGetCompanyPolicies = createAsyncThunk("companyPoliciesSlice/handleGetCompanyPolicies", async() => {
    const response = await _get(userApis.routes.company_policies)
    return { data: response.data };
})

export const companyPoliciesSlice = createSlice({
    name : "companyPoliciesSlice",
    initialState : {
        data : [],
        get_company_policies_loading : false,
    },
   extraReducers : (builder) => {
    builder.addCase(handleGetCompanyPolicies.pending, (state) => {
        state.get_company_policies_loading = true;
    })
    builder.addCase(handleGetCompanyPolicies.fulfilled, (state, action) => {
        state.get_company_policies_loading = false;
        state.data = action.payload;
    })
   }
})

export default companyPoliciesSlice.reducer;
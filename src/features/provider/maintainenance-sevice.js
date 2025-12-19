import { _get, _post } from "@/api/apiInstance";
import { userApis } from "@/api/userEndpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    provider_complete_maintenance_service_loading : false,
    provider_complete_maintenance_service_data : [],
    provider_reported_maintenance_service_loading : false,
    provider_reported_maintenance_service_data : [],
    provider_progress_maintenance_service_loading : false,
    provider_progress_maintenance_service_data : [],
    provider_new_maintenance_service_loading : false,
    provider_new_maintenance_service_data : [],
    provider_maintenance_service_view_loading : false,
    provider_maintenance_service_view_data : [],
    provider_reject_maintenance_service_loading : false,
    provider_reject_maintenance_service_data : [],
    provider_add_maintenance_service_before_loading : false,
    provider_add_maintenance_service_before_data : [],
    provider_add_maintenance_service_after_loading : false,
    provider_add_maintenance_service_after_data : [],
    change_status_maintenance_service_loading : false,
}

export const handleProviderCompleteMaintenanceService = createAsyncThunk("maintainenaceServiceSlice/handleProviderCompleteMaintenanceService",async({accesstoken })=> {
    const response = await _get(userApis.routes.provider_complete_maintenance_service + `?access-token=${accesstoken}`)
    return response?.data;
})

export const handleProviderProgressMaintenanceService = createAsyncThunk("maintainenaceServiceSlice/handleProviderProgressMaintenanceService",async({accesstoken })=> {
    const response = await _get(userApis.routes.provider_progress_maintenance_service + `?access-token=${accesstoken}`)
    return response?.data;
})

export const handleProviderRejectMaintenanceService = createAsyncThunk("maintainenaceServiceSlice/handleProviderRejectMaintenanceService",async({accesstoken , data})=> {
    const response = await _post(userApis.routes.provider_reject_maintenance_service + `?access-token=${accesstoken}`,data)
    return response?.data;
})

export const handleProviderNewMaintenanceService = createAsyncThunk("maintainenaceServiceSlice/handleProviderNewMaintenanceService",async({accesstoken , data})=> {
    const response = await _post(userApis.routes.provider_new_maintenance_service + `?access-token=${accesstoken}`,data)
    return response?.data;
})

export const handleProviderMaintenanceServiceView = createAsyncThunk("maintainenaceServiceSlice/handleProviderMaintenanceServiceView",async({accesstoken , id})=> {
    const response = await _get(userApis.routes.provider_maintenance_service_view + `?access-token=${accesstoken}&id=${id}`)
    return response?.data;
})

export const handleProviderRejectMaintenance= createAsyncThunk("maintainenaceServiceSlice/handleProviderRejectMaintenance",async({accesstoken , data})=> {
    const response = await _post(userApis.routes.provider_reject_maintenance + `?access-token=${accesstoken}`,data)
    return response?.data;
})

export const handleProviderAddMaintenanceServiceBefore = createAsyncThunk("maintainenaceServiceSlice/handleProviderAddMaintenanceServiceBefore",async({accesstoken , data})=> {
    const response = await _post(userApis.routes.provide_add_maintenance_service_before + `?access-token=${accesstoken}`,data)
    return response?.data;
})

export const handleProviderAddMaintenanceServiceAfter = createAsyncThunk("maintainenaceServiceSlice/handleProviderAddMaintenanceServiceAfter",async({accesstoken , data})=> {
    const response = await _post(userApis.routes.provide_add_maintenance_service_after + `?access-token=${accesstoken}`,data)
    return response?.data;
})

export const handleChangeStatusMaintenanceService = createAsyncThunk("maintainenaceServiceSlice/handleChangeStatusMaintenanceService",async({accesstoken , data})=> {
    const response = await _post(userApis.routes.change_status_maintenance_service + `?access-token=${accesstoken}`,data)
    return response?.data;
})


export const maintainenaceServiceSlice = createSlice({
    name:"maintainenaceServiceSlice",
    initialState,
    extraReducers:(builder)=> {
        builder.addCase(handleProviderCompleteMaintenanceService.pending, (state) => {
            state.provider_complete_maintenance_service_loading = true;
        })
        builder.addCase(handleProviderCompleteMaintenanceService.fulfilled, (state, action) => {
            state.provider_complete_maintenance_service_loading = false;
            state.provider_complete_maintenance_service_data = action.payload;
        })
        builder.addCase(handleProviderProgressMaintenanceService.pending, (state) => {
            state.provider_progress_maintenance_service_loading = true;
        })
        builder.addCase(handleProviderProgressMaintenanceService.fulfilled, (state, action) => {
            state.provider_progress_maintenance_service_loading = false;
            state.provider_progress_maintenance_service_data = action.payload;
        })
        builder.addCase(handleProviderRejectMaintenanceService.pending, (state) => {
            state.provider_reported_maintenance_service_loading = true;
        })
        builder.addCase(handleProviderRejectMaintenanceService.fulfilled, (state, action) => {
            state.provider_reported_maintenance_service_loading = false;
            state.provider_reported_maintenance_service_data  = action.payload;
        })
        builder.addCase(handleProviderNewMaintenanceService.pending, (state) => {
            state.provider_new_maintenance_service_loading = true;
        })
        builder.addCase(handleProviderNewMaintenanceService.fulfilled, (state, action) => {
            state.provider_new_maintenance_service_loading = false;
            state.provider_new_maintenance_service_data = action.payload;
        })
        builder.addCase(handleProviderMaintenanceServiceView.pending, (state) => {
            state.provider_maintenance_service_view_loading = true;
        })
        builder.addCase(handleProviderMaintenanceServiceView.fulfilled, (state, action) => {
            state.provider_maintenance_service_view_loading = false;
            state.provider_maintenance_service_view_data = action.payload;
        })
        builder.addCase(handleProviderRejectMaintenance.pending, (state) => {
            state.provider_reject_maintenance_service_loading = true;
        })
        builder.addCase(handleProviderRejectMaintenance.fulfilled, (state, action) => {
            state.provider_reject_maintenance_service_loading = false;
            state.provider_reject_maintenance_service_data = action.payload;
        })
        builder.addCase(handleProviderAddMaintenanceServiceBefore.pending, (state) => {
            state.provider_add_maintenance_service_before_loading = true;
        })
        builder.addCase(handleProviderAddMaintenanceServiceBefore.fulfilled, (state, action) => {
            state.provider_add_maintenance_service_before_loading = false;
            state.provider_add_maintenance_service_before_data = action.payload;
        })
        builder.addCase(handleProviderAddMaintenanceServiceAfter.pending, (state) => {
            state.provider_add_maintenance_service_after_loading = true;
        })
        builder.addCase(handleProviderAddMaintenanceServiceAfter.fulfilled, (state, action) => {
            state.provider_add_maintenance_service_after_loading = false;
            state.provider_add_maintenance_service_after_data = action.payload;
        })
        builder.addCase(handleChangeStatusMaintenanceService.pending, (state) => {
            state.change_status_maintenance_service_loading = true;
        })
        builder.addCase(handleChangeStatusMaintenanceService.fulfilled, (state, action) => {
            state.change_status_maintenance_service_loading = false;
        })
    }
})

export default maintainenaceServiceSlice.reducer;
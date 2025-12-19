import { _get, _post } from "@/api/apiInstance";
import { userApis } from "@/api/userEndpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { use } from "react";

const initialState = {
    isLoading: false,
    error: null,
    success: false,
    team: null,
    teams: null,
    all_pending_teams:null, 
    pending_team_loading:false,
    team_view_data:null, 
    team_view_loading:false,
    accept_user_loading:false
}

export const handleGetAllTeams = createAsyncThunk("joinTeam/handleGetAllTeams", async (access_token ,{ rejectWithValue }) => {
    try {
        const response = await _get(userApis.routes?.all_teams+`?access-token=${access_token}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const handleGetAllPendingTeam = createAsyncThunk("joinTeam/handleGetAllPendingTeam", async(access_token) => {
    const response = await _get(userApis.routes.pending_teams+`?access-token=${access_token}`);
    return response?.data;
})

export const handleGetTeamDetail = createAsyncThunk("joinTeam/handleGetTeamDetail", async({access_token , id}) =>{
    const response = await _get(userApis.routes.provider_team_view+`?access-token=${access_token}&id=${id}`);
    return response.data;
})

export const handleAcceptUser = createAsyncThunk("joinTeam/handleAcceptUser",async({access_token , user_id}) => {
    const response = await _post(userApis.routes.accepet_team+`?access-token=${access_token}`, )
})



export const joinTeamSlice = createSlice({
    name:"joinTeam",
    initialState,
    extraReducers:(builder) => {
        builder.addCase(handleGetAllTeams.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(handleGetAllTeams.fulfilled, (state, action) => {
            state.isLoading = false;
            state.success = true;
            state.teams = action.payload;
        })
        builder.addCase(handleGetAllTeams.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        builder.addCase(handleGetAllPendingTeam?.pending , (state, action) => {
            state.pending_team_loading = true;
        })
        builder.addCase(handleGetAllPendingTeam?.fulfilled,(state, action) => {
            state.pending_team_loading  = false;
            state.all_pending_teams = action.payload;
        })
        builder.addCase(handleGetTeamDetail.pending, (state, action) => {
            state.team_view_loading = true;
        })
        builder.addCase(handleGetTeamDetail.fulfilled , (state , action) =>{
            state.team_view_loading = false,
            state.team_view_data = action.payload
        })
    }
})

export default joinTeamSlice.reducer;
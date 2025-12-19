import { _get, _post } from "@/api/apiInstance";
import { userApis } from "@/api/userEndpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  get_cleaning_service_loading: false,
  add_clean_service_before_loading: false,
  add_clean_service_after_loading: false,
  get_provider_progress_cleaning_service_loading: false,
  get_provider_progress_cleaning_service_data: [],
  reject_clean_service_loading: false,
  provider_completed_clean_service_loading: false,
  provider_reported_clean_service_loading: false,
  provider_completed_clean_service_data: [],
  provider_reported_clean_service_data: [],
  change_status_clean_service_loading: false,
};

export const handleGetCleaningService = createAsyncThunk(
  "cleaningServiceSlice/handleGetCleaningService",
  async ({ accesstoken }) => {
    const response = await _get(
      userApis.routes.fetchProviderCleaningService +
        `?access-token=${accesstoken}`
    );
    return response?.data;
  }
);

export const handleGetProviderProgressCleaningService = createAsyncThunk(
  "cleaningServiceSlice/handleGetProviderProgressCleaningService",
  async ({ accesstoken }) => {
    const response = await _get(
      userApis.routes.provider_progress_clean_service +
        `?access-token=${accesstoken}`
    );
    return response?.data;
  }
);

export const handleAddCleanServiceBefore = createAsyncThunk(
  "cleaningServiceSlice/handleAddCleanServiceBefore",
  async ({ accesstoken, data }) => {
    const response = await _post(
      userApis.routes.provider_add_clean_service_before +
        `?access-token=${accesstoken}`,
      data
    );
    return response?.data;
  }
);

export const handleAddCleanServiceAfter = createAsyncThunk(
  "cleaningServiceSlice/handleAddCleanServiceAfter",
  async ({ accesstoken, data }) => {
    const response = await _post(
      userApis.routes.provider_add_clean_service_after +
        `?access-token=${accesstoken}`,
      data
    );
    return response?.data;
  }
);

export const handleRejectCleanService = createAsyncThunk(
  "cleaningServiceSlice/handleRejectCleanService",
  async ({ accesstoken, data }) => {
    const response = await _post(
      userApis.routes.proider_reject_clean_service +
        `?access-token=${accesstoken}`,
      data
    );
    return response?.data;
  }
);

export const handleProviderCompletedCleanService = createAsyncThunk(
  "cleaningServiceSlice/handleProviderCompletedCleanService",
  async ({ accesstoken, data }) => {
    const response = await _post(
      userApis.routes.provider_completed_clean_service +
        `?access-token=${accesstoken}`,
      data
    );
    return response?.data;
  }
);

export const handleProviderReportedCleanService = createAsyncThunk(
  "cleaningServiceSlice/handleProviderReportedCleanService",
  async ({ accesstoken, data }) => {
    const response = await _post(
      userApis.routes.provider_reported_clean_service +
        `?access-token=${accesstoken}`,
      data
    );
    return response?.data;
  }
);

export const handleChangeStatusCleanService = createAsyncThunk(
  "cleaningServiceSlice/handleChangeStatusCleanService",
  async ({ accesstoken, data }) => {
    const response = await _post(
      userApis.routes.change_status_clean_service +
        `?access-token=${accesstoken}`,
      data
    );
    return response?.data;
  }
);

export const cleaningServiceSlice = createSlice({
  name: "cleaningServiceSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(handleGetCleaningService.pending, (state) => {
      state.get_cleaning_service_loading = true;
    });
    builder.addCase(handleGetCleaningService.fulfilled, (state, action) => {
      state.get_cleaning_service_loading = false;
      state.data = action.payload;
    });
    builder.addCase(handleGetCleaningService.rejected, (state) => {
      state.get_cleaning_service_loading = false;
    });
    builder.addCase(
      handleGetProviderProgressCleaningService.pending,
      (state) => {
        state.get_provider_progress_cleaning_service_loading = true;
      }
    );
    builder.addCase(
      handleGetProviderProgressCleaningService.fulfilled,
      (state, action) => {
        state.get_provider_progress_cleaning_service_loading = false;
        state.get_provider_progress_cleaning_service_data = action.payload;
      }
    );
    builder.addCase(handleRejectCleanService.pending, (state) => {
      state.reject_clean_service_loading = true;
    });
    builder.addCase(handleRejectCleanService.fulfilled, (state, action) => {
      state.reject_clean_service_loading = false;
    });
    builder.addCase(handleRejectCleanService.rejected, (state) => {
      state.reject_clean_service_loading = false;
    });
    builder.addCase(handleProviderCompletedCleanService.pending, (state) => {
      state.provider_completed_clean_service_loading = true;
    });
    builder.addCase(
      handleProviderCompletedCleanService.fulfilled,
      (state, action) => {
        state.provider_completed_clean_service_loading = false;
        state.provider_completed_clean_service_data = action.payload;
      }
    );
    builder.addCase(handleProviderCompletedCleanService.rejected, (state) => {
      state.provider_completed_clean_service_loading = false;
      state.provider_completed_clean_service_data = action.payload;
    });
    builder.addCase(handleProviderReportedCleanService.pending, (state) => {
      state.provider_reported_clean_service_loading = true;
    });
    builder.addCase(
      handleProviderReportedCleanService.fulfilled,
      (state, action) => {
        state.provider_reported_clean_service_loading = false;
        state.provider_reported_clean_service_data = action.payload;
      }
    );
    builder.addCase(handleProviderReportedCleanService.rejected, (state) => {
      state.provider_reported_clean_service_loading = false;
    });
    builder.addCase(handleChangeStatusCleanService.pending, (state) => {
      state.change_status_clean_service_loading = true;
    });
    builder.addCase(
      handleChangeStatusCleanService.fulfilled,
      (state, action) => {
        state.change_status_clean_service_loading = false;
      }
    );
  },
});

export default cleaningServiceSlice.reducer;

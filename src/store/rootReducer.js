import  loginReducer  from "@/features/auth/loginSlice";
import { combineReducers } from "@reduxjs/toolkit";
import cleaningServiceReducer from "@/features/provider/cleaning-service";
import loginProviderReducer from "@/features/provider/login";
import trainingReducer from "@/features/provider/trainingSlice";
import legalReducer from "@/features/provider/company-policies";
import providerMaintainenaceServiceReducer from "@/features/provider/maintainenance-sevice";
import providerMaterialServiceReducer from "@/features/provider/material-service";
import notificationReducer from "@/features/notificationSlice";
import providerCalanderReducer from "@/features/provider/provider-calander";
import createReportReducer from "@/features/provider/create-report";
import joinTeamReducer from "@/features/provider/join-team";
import contactReducer from '@/features/contactSlice';
import properitiesReducer from '@/features/clients/propertiesSlice';
import listReducer from '@/features/listSlice';
import clientServiceManagementReducer from '@/features/clients/servicesSlice';

export const rootReducer = combineReducers({
    login : loginReducer,
    providerCleaningService :   cleaningServiceReducer,
    loginProvider : loginProviderReducer,
    training : trainingReducer,
    legal : legalReducer,
    providermaintainenaceService : providerMaintainenaceServiceReducer,
    providerMaterialService : providerMaterialServiceReducer,
    notification : notificationReducer,
    providerCalander : providerCalanderReducer,
    createReport : createReportReducer,
    joinTeam :  joinTeamReducer,
    contact : contactReducer,
    properties : properitiesReducer,
    lists:listReducer,
    clientServiceManagement: clientServiceManagementReducer
})
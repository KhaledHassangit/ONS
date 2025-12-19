"use client";
import FinishedMaintenanceOrder from "@/components/dashboard/cleaners/ServiceManagment/MaintinanceRequests/FinishedMaintenanceOrder/FinishedMaintenanceOrder";
import InProgressMaintenanceOrder from "@/components/dashboard/cleaners/ServiceManagment/MaintinanceRequests/inProgressMaintenanceOrder/inProgressMaintenanceOrder";
import NewCleaningsMaintenanceOrder from "@/components/dashboard/cleaners/ServiceManagment/MaintinanceRequests/NewCleaningsMaintenanceOrder/NewCleaningsMaintenanceOrder";
import ReportMaintenanceOrder from "@/components/dashboard/cleaners/ServiceManagment/MaintinanceRequests/ReportMaintenanceOrder/ReportMaintenanceOrder";
import ProviderMaintenanceFinishedOrder from "@/components/dashboard/provider/serviceManagement/providerMaintenance/ProviderMaintenanceFinishedOrder/ProviderMaintenanceFinishedOrder";
import ProviderMaintenanceInProgressOrder from "@/components/dashboard/provider/serviceManagement/providerMaintenance/ProviderMaintenanceInProgressOrder/ProviderMaintenanceInProgressOrder";
import ProviderMaintenanceReportedOrder from "@/components/dashboard/provider/serviceManagement/providerMaintenance/ProviderMaintenanceReportedOrder/ProviderMaintenanceReportedOrder";
import ProviderMaintenanceServiceNewOrder from "@/components/dashboard/provider/serviceManagement/providerMaintenance/ProviderMaintenanceServiceNewOrder/ProviderMaintenanceServiceNewOrder";
import SearchInput from "@/components/searchInput/SearchInput";
import React, { useState } from "react";

const tabs = [
  {
    id: 1,
    title: "New orders",
  },
  {
    id: 2,
    title: "In progress orders",
  },
  {
    id: 3,
    title: "Finished orders",
  },
  {
    id: 4,
    title: "reported",
  },
];

export default function page() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <SearchInput
          setValue={setSearch}
          value={search}
          placeholder={"Find a request"}
        />

        <div className="w-full bg-[#F1F4F6] rounded-lg flex flex-wrap sm:flex-nowrap items-center gap-2 p-2">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`py-2 px-3 flex-1 min-w-[120px] h-[40px] rounded-lg flex items-center text-xs font-normal ${
                activeTab === tab?.id
                  ? "bg-(--main-orange-color) text-white"
                  : " text-black"
              }`}
            >
              {tab?.title}
            </button>
          ))}
        </div>
      </div>

      <div className='mt-6 md:mt-8'>
        {activeTab === 1 && <ProviderMaintenanceServiceNewOrder />}
        {activeTab === 2 && <ProviderMaintenanceInProgressOrder />}
        {activeTab === 3 && <ProviderMaintenanceFinishedOrder />}
        {activeTab === 4 && <ProviderMaintenanceReportedOrder />}
      </div>
    </div>
  );
}

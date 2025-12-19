"use client";
import PropertiesCards from "@/components/dashboard/clients/PropertyManagement/PropertiesCards/PropertiesCards";
import LoadingSkeleton from "@/components/loadingSkeleton";
import Pagination from "@/components/pagination/Pagination";
import SearchInput from "@/components/searchInput/SearchInput";
import { handleFetchAllProperties } from "@/features/clients/propertiesSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debounceSearch, setDebounceSearch] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const { all_properites_loading, all_properites } = useSelector(
    (state) => state?.properties
  );

  const allItems = all_properites?.data?.[0]?.items || [];
  const perPage = all_properites?.data?.[0]?._meta?.perPage || 12;
  const numberOfPages = all_properites?.data?.[0]?._meta?.NumberOfPage || 1;

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearch(search);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  const filteredData = React.useMemo(() => {
    if (!debounceSearch) return allItems;
    const searchText = debounceSearch.toLowerCase();
    return allItems.filter(
      (item) =>
        item?.name?.toLowerCase()?.includes(searchText) ||
        item?.property_type_id?.name?.toLowerCase()?.includes(searchText) ||
        item?.address?.toLowerCase()?.includes(searchText)
    );
  }, [debounceSearch, allItems]);

  const paginatedItems = React.useMemo(() => {
    const startIdx = (currentPage - 1) * perPage;
    return filteredData.slice(startIdx, startIdx + perPage);
  }, [filteredData, currentPage, perPage]);

  useEffect(() => {
    setCurrentPage(all_properites?.data[0]?._meta?.currentPage);
  }, [debounceSearch]);

  useEffect(() => {
    const token =
      localStorage.getItem("access_token") &&
      JSON.parse(localStorage.getItem("access_token"))?.access_token;
    dispatch(handleFetchAllProperties(token));
  }, [dispatch]);

  return (
    <div>
      <p className="text-base font-normal text-[#4F617D]">
        Property Management
      </p>
      <div className="flex flex-col sm:flex-row justify-between mt-[32px] items-center gap-4 sm:gap-0">
        <div className="w-full sm:w-auto">
          <SearchInput
            placeholder="Find a property"
            value={search}
            setValue={setSearch}
          />
        </div>
        <button
          onClick={() =>
            router.push("/clients/property-management/create-property")
          }
          style={{ backgroundColor: "var(--main-orange-color)" }}
          className="h-[40px] flex justify-center items-center gap-2 w-full sm:w-[177px] text-white px-[16px] py-[10px] rounded-lg"
        >
          <Image
            src="/images/dash/property/Add_round_duotone.svg"
            alt="add"
            width={18}
            height={18}
          />
          <span>Create Property</span>
        </button>
      </div>

      <PropertiesCards
        all_properites_loading={all_properites_loading}
        allData={paginatedItems?.length > 0 ? paginatedItems : all_properites?.data[0]?.items}
      />

      {numberOfPages > 1 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pages={Array.from({ length: numberOfPages }, (_, i) => i + 1)}
          totalPages={numberOfPages}
        />
      )}
    </div>
  );
}

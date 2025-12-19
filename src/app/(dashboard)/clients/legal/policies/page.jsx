"use client"; 
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetCompanyPolicies } from "@/features/provider/company-policies";

export default function page() {
  const dispatch = useDispatch();
  const {data, get_company_policies_loading} = useSelector(state => state.legal)
  console.log(data);
  const [companyPolicies, setCompanyPolicies] = useState(null);
  
  useEffect(() => {
    dispatch(handleGetCompanyPolicies())
    .unwrap()
    .then(res => {
      console.log(res?.data?.data[0]);
      setCompanyPolicies(res?.data?.data[0]);
    })
    .catch(err => {
      console.log(err);
    })  
  }, [dispatch])


  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="legal-linear-gradient !w-full flex flex-col gap-3 py-8">
        <h3 className="text-[42px] text-center font-medium text-[#0D0D0D] leading-normal">
          {companyPolicies?.title}
        </h3>
        <p className="text-lg max-w-[684px] mx-auto text-center font-normal text-[#4B5563]">
          Important information about company policies, procedures, safety protocols, and compliance requirements for all platform users.
        </p>
      </div>
      <div className="md:!max-w-[797px] text-base font-medium text-[#292760] !text-center mx-auto !bg-[#F6F6F6] p-4 rounded-xl">
      <div dangerouslySetInnerHTML={{__html: companyPolicies?.content}}></div>
      </div>
    </div>
  );
}

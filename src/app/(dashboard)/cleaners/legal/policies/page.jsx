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
      {/* <div className="md:!max-w-[797px] text-base font-medium text-[#292760] !text-center mx-auto !bg-[#F6F6F6] p-4 rounded-xl">
        <p>
          Legal & Contracts We are committed to providing a safe, professional,
          and transparent environment for all users of our platform. The following
          sections outline our company policies that all users must adhere to.
        </p>
        
        <p className="">1. Cleaning Guidelines</p>
        <p>
          Our cleaning procedures are standardized to ensure consistent quality
          service across all properties. Please follow these guidelines:
        </p>
        <ul className="list-disc list-inside">
          <li>Proper use of cleaning agents for different surfaces</li>
          <li>Specific cleaning techniques for bathrooms, kitchens, and living areas</li>
          <li>Waste disposal procedures and recycling requirements</li>
          <li>Checklist completion for every job to maintain quality control</li>
        </ul>
        
        <p className="">2. Safety Protocols</p>
        <p>
          Your safety and the safety of our clients is our top priority:
        </p>
        <ul className="list-disc list-inside">
          <li>Always wear appropriate protective equipment (gloves, masks when necessary)</li>
          <li>Report hazardous conditions immediately through the platform</li>
          <li>Follow proper handling procedures for cleaning chemicals</li>
          <li>Never mix cleaning products unless specifically instructed</li>
          <li>Keep all pathways clear during cleaning to prevent accidents</li>
        </ul>
        
        <p className="">3. Client Interaction Guidelines</p>
        <p>
          When interacting with property owners or guests:
        </p>
        <ul className="list-disc list-inside">
          <li>Maintain professional communication at all times</li>
          <li>Respect privacy and confidentiality</li>
          <li>Follow specific instructions provided by clients</li>
          <li>Report any uncomfortable situations to management immediately</li>
        </ul>
        
        <p className="">4. Quality Standards</p>
        <p>
          We maintain high standards of service through:
        </p>
        <ul className="list-disc list-inside">
          <li>Regular performance evaluations</li>
          <li>Client feedback integration</li>
          <li>Ongoing training programs</li>
          <li>Quality control inspections</li>
        </ul>
        
        <p className="">5. Compliance Requirements</p>
        <p>
          All service providers must:
        </p>
        <ul className="list-disc list-inside">
          <li>Adhere to local labor laws and regulations</li>
          <li>Maintain valid identification and work permits</li>
          <li>Follow proper tax reporting procedures</li>
          <li>Comply with health and safety regulations</li>
        </ul>
        
        <p className="mt-4">
          These policies are designed to create a professional working environment
          that benefits both our service providers and clients. Failure to comply
          with these policies may result in review of your account status.
        </p>
        <p className="mt-2">
          Please contact support if you have any questions about these policies.
        </p>
      </div> */}
    </div>
  );
}

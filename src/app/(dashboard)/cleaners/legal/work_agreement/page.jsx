import React from "react";

export default function page() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="legal-linear-gradient !w-full flex flex-col gap-3 py-8">
        <h3 className="text-[42px] text-center font-medium text-[#0D0D0D] leading-normal">
          Work Agreement
        </h3>
        <p className="text-lg max-w-[684px] mx-auto text-center font-normal text-[#4B5563]">
          Key information about work agreements, company policies, and how to
          report issues or request materials through the platform.
        </p>
      </div>
      <div className="md:!max-w-[797px] text-base font-medium text-[#292760] !text-center mx-auto !bg-[#F6F6F6] p-4 rounded-xl">
        <p>
          Legal & Contracts We are committed to providing a safe, professional,
          and transparent environment for all users of our platform. The following
          sections outline the legal agreements, company policies, and procedures
          for issue resolution.
        </p>
        
        <p className="">1. Work Agreement</p>
        <p>
          Please review the contract details and terms of service carefully before 
          starting any tasks through the platform.
        </p>
        <ul className="list-disc list-inside">
          <li>The agreement outlines the rights and responsibilities of both the service provider and the host.</li>
          <li>By joining the platform, you agree to comply with the terms stated in the agreement.</li>
        </ul>
        
        <p className="">2. Company Policies</p>
        <p>
          To maintain quality and safety across all services, the following company 
          policies must be followed:
        </p>
        <ul className="list-disc list-inside">
          <li>Cleaning Guidelines: Follow the cleaning procedures and standards provided by the platform to ensure consistent service.</li>
          <li>Safety Protocols: Always wear protective gear when required and maintain professional conduct at job sites.</li>
          <li>Compliance Requirements: All users must adhere to local laws and the platform's operational guidelines.</li>
        </ul>
        
        <p className="">3. Report Issues</p>
        <p>
          Transparency is important to us. If you encounter any issues, you can raise 
          a dispute directly through the platform.
        </p>
        <ul className="list-disc list-inside">
          <li>Payment Issues: Report delays or discrepancies in payments.</li>
          <li>Job-Related Problems: Such as rejected tasks or incomplete bookings.</li>
          <li>Host Interactions: Report any inappropriate or uncomfortable behavior during service.</li>
        </ul>
        
        <p className="">4. Request Materials</p>
        <p>
          Hosts can request essential supplies directly through the platform when needed.
        </p>
        <ul className="list-disc list-inside">
          <li>This includes cleaning materials or specific tools required to complete a job.</li>
          <li>All requests are reviewed and approved based on task requirements.</li>
        </ul>
      </div>
    </div>
  );
}

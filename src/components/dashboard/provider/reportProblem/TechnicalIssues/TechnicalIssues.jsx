import React, { useState } from 'react'
import { handleCreateReport } from '@/features/provider/create-report'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
export default function TechnicalIssues({propertyId}) {
  const dispatch = useDispatch();
  const {data , loading} = useSelector(state => state.createReport);
  const [technicalData , setTechnicalData] = useState({
    email : "",
    booking_date : "",
    service_provider_name : "",
    type_of_issue : "",
    problem_description : ""
  })

  function handleSubmit() {
    const formData = new FormData();
    formData.append("type" , 2);
    formData.append("property_id" , propertyId);
    formData.append("email" , technicalData.email);
    formData.append("date" , technicalData.booking_date);
    formData.append("provider_name" , technicalData.service_provider_name);
    formData.append("type_issue" , technicalData.type_of_issue);
    formData.append("description" , technicalData.problem_description);

    dispatch(handleCreateReport({accesstoken : JSON.parse(localStorage.getItem("accessToken"))?.accessToken || "xfd0Hf0PeFAaAEphlPS6dLLhv_c9lLnt" , formData}))
    .unwrap()
    .then(res => {
      console.log(res);
      if(res?.status == 1) {
        toast.success(res?.data[0]?.message)
        setTechnicalData({
          email : "",
          booking_date : "",
          service_provider_name : "",
          type_of_issue : "",
          problem_description : ""
        })
      }else {
        toast.error(res?.data[0]?.message)
      }
    })
  }   

  return (
    <div className="flex flex-col gap-4">
    <p className="text-[#0A0A1F] w-full md:w-[80%] lg:w-[60%] leading-[1.8] text-base font-normal">
      Do you have questions? Feel free to reach out to us for support or more
      information about on next stay. Our team is ready to answer all your
      queries.
    </p>
    <input
      placeholder="E-mail address*"
      className="h-[48px] rounded-lg p-3 border border-[#D5DAE1] outline-none w-full"
      value={technicalData.email}
      onChange={(e) => setTechnicalData({...technicalData, email : e.target.value})}
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input
        value={technicalData.type_of_issue}
        onChange={(e) => setTechnicalData({...technicalData, type_of_issue : e.target.value})}
        placeholder="Type of Issue"
        className="h-[48px] rounded-lg p-3 border border-[#D5DAE1] outline-none"
      />
      <input
        value={technicalData.device_type}
        onChange={(e) => setTechnicalData({...technicalData, device_type : e.target.value})}
        placeholder="Device Type"
        className="h-[48px] rounded-lg p-3 border border-[#D5DAE1] outline-none"
      />
    </div>
    <textarea
      className="h-[245px] rounded-lg p-3 border border-[#D5DAE1] outline-none w-full"
      placeholder="Problem Description"
      value={technicalData.problem_description}
      onChange={(e) => setTechnicalData({...technicalData, problem_description : e.target.value})}
    ></textarea>

    <button onClick={handleSubmit} className="bg-[var(--main-orange-color)] flex justify-center items-center text-white h-[48px] rounded-lg w-full">
      Send
    </button>
  </div>
  )
}

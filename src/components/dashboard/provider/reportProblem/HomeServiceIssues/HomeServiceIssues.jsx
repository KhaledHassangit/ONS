// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { handleCreateReport } from "@/features/provider/create-report";
// import { toast } from "react-toastify";

// export default function HomeServiceIssues({propertyId}) {
//   const dispatch = useDispatch();
//   const {data , loading} = useSelector(state => state.createReport);
//   const [serviceData , setServiceData]  = useState({
//     email : "",
//     booking_date : "",
//     service_provider_name : "",
//     type_of_issue : "",
//     problem_description : ""
//   })

//   function handleSubmit() {
//       const formData = new FormData();
//       formData.append("type" , 1);
//       formData.append("property_id" , propertyId);
//       formData.append("email" , serviceData.email);
//       formData.append("date" , serviceData.booking_date);
//       formData.append("provider_name" , serviceData.service_provider_name);
//       formData.append("type_issue" , serviceData.type_of_issue);
//       formData.append("description" , serviceData.problem_description);

//       dispatch(handleCreateReport({accesstoken : JSON.parse(localStorage.getItem("accessToken"))?.accessToken || "xfd0Hf0PeFAaAEphlPS6dLLhv_c9lLnt" , formData}))
//       .unwrap()
//       .then(res => {
//         console.log(res)
//         if(res?.status == 1) {
//           toast.success(res?.data[0]?.message)
//           setServiceData({
//             email : "",
//             booking_date : "",
//             service_provider_name : "",
//             type_of_issue : "",
//             problem_description : ""
//           })
//         }else {
//           toast.error(res?.data[0]?.message)
//         }
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   }

//   function handleOpenDatePicker() {
//     document.getElementById("booking_date").click();
//   }
   
//   return (
//     <div className="flex flex-col gap-4">
//       <p className="text-[#0A0A1F] w-full md:w-[80%] lg:w-[60%] leading-[1.8] text-base font-normal">
//       Do you have questions? Feel free to reach out to us for support or more information about on next stay. Our team is ready to answer all your queries.
//       </p>
//       <input
//         placeholder="E-mail address*"
//         className="h-[48px] rounded-lg p-3 border border-[#D5DAE1] outline-none w-full"
//         value={serviceData.email}
//         onChange={(e) => setServiceData({...serviceData, email : e.target.value})}
//       />
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         <label 
//         htmlFor="booking_date"
//         className="h-[48px] rounded-lg p-3 border  border-[#D5DAE1] outline-none relative cursor-pointer"
//         > 
//         <span onClick={handleOpenDatePicker} className="">{serviceData.booking_date || "Booking Date (date picker)"}</span>
//         <input
//         id="booking_date"
//           type="date"
//           placeholder="Booking Date (date picker)"
//           className="h-[48px] w-full hidden cursor-pointer absolute top-0 left-0 opacity-0 z-[-1]  pointer-events-none"
//           value={serviceData.booking_date}
//           onChange={(e) => setServiceData({...serviceData, booking_date : e.target.value})}
//         />
//         </label>
//         <input
//           placeholder="Service Provide Name(Optional)"
//           className="h-[48px] rounded-lg p-3 border border-[#D5DAE1] outline-none"
//           value={serviceData.service_provider_name}
//           onChange={(e) => setServiceData({...serviceData, service_provider_name : e.target.value})}
//         />
//         <input
//           placeholder="Type of Issue"
//           className="h-[48px] rounded-lg p-3 border border-[#D5DAE1] outline-none"
//           value={serviceData.type_of_issue}
//           onChange={(e) => setServiceData({...serviceData, type_of_issue : e.target.value})}
//         />
//       </div>
//       <textarea
//         className="h-[245px] rounded-lg p-3 border border-[#D5DAE1] outline-none w-full"
//         placeholder="Problem Description"
//         value={serviceData.problem_description}
//         onChange={(e) => setServiceData({...serviceData, problem_description : e.target.value})}
//       ></textarea>

//       <button 
//       onClick={handleSubmit}
//       className="bg-[var(--main-orange-color)] flex justify-center items-center text-white h-[48px] rounded-lg w-full">
//         Send
//       </button>
//     </div>
//   );
// }


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCreateReport } from "@/features/provider/create-report";
import { toast } from "react-toastify";

export default function HomeServiceIssues({propertyId}) {
  const dispatch = useDispatch();
  const {data , loading} = useSelector(state => state.createReport);
  const [serviceData , setServiceData]  = useState({
    email : "",
    booking_date : "",
    service_provider_name : "",
    type_of_issue : "",
    problem_description : ""
  })

  function handleSubmit() {
      const formData = new FormData();
      formData.append("type" , 1);
      formData.append("property_id" , propertyId);
      formData.append("email" , serviceData.email);
      formData.append("date" , serviceData.booking_date);
      formData.append("provider_name" , serviceData.service_provider_name);
      formData.append("type_issue" , serviceData.type_of_issue);
      formData.append("description" , serviceData.problem_description);

      dispatch(handleCreateReport({accesstoken : JSON.parse(localStorage.getItem("accessToken"))?.accessToken || "xfd0Hf0PeFAaAEphlPS6dLLhv_c9lLnt" , formData}))
      .unwrap()
      .then(res => {
        console.log(res)
        if(res?.status == 1) {
          toast.success(res?.data[0]?.message)
          setServiceData({
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
      .catch(err => {
        console.log(err);
      })
  }

  function handleOpenDatePicker() {
    document.getElementById("booking_date").click();
  }

  // Format date for display
  function formatDateForDisplay(dateString) {
    if (!dateString) return "Booking Date (date picker)";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  }
   
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[#0A0A1F] w-full md:w-[80%] lg:w-[60%] leading-[1.8] text-base font-normal">
      Do you have questions? Feel free to reach out to us for support or more information about on next stay. Our team is ready to answer all your queries.
      </p>
      <input
        placeholder="E-mail address*"
        className="h-[48px] rounded-lg p-3 border border-[#D5DAE1] outline-none w-full"
        value={serviceData.email}
        onChange={(e) => setServiceData({...serviceData, email : e.target.value})}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <input
            id="booking_date"
            type="text"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            placeholder="Select Service Date"
            className="h-[48px] rounded-lg p-3 border border-[#D5DAE1] outline-none relative cursor-pointer flex items-center bg-white"
            value={serviceData.booking_date ? formatDateForDisplay(serviceData.booking_date) : ""}
            onChange={(e) => setServiceData({...serviceData, booking_date : e.target.value})}
          />

        <input
          placeholder="Service Provide Name(Optional)"
          className="h-[48px] rounded-lg p-3 border border-[#D5DAE1] outline-none"
          value={serviceData.service_provider_name}
          onChange={(e) => setServiceData({...serviceData, service_provider_name : e.target.value})}
        />
        <input
          placeholder="Type of Issue"
          className="h-[48px] rounded-lg p-3 border border-[#D5DAE1] outline-none"
          value={serviceData.type_of_issue}
          onChange={(e) => setServiceData({...serviceData, type_of_issue : e.target.value})}
        />
      </div>
      <textarea
        className="h-[245px] rounded-lg p-3 border border-[#D5DAE1] outline-none w-full"
        placeholder="Problem Description"
        value={serviceData.problem_description}
        onChange={(e) => setServiceData({...serviceData, problem_description : e.target.value})}
      ></textarea>

      <button 
        onClick={handleSubmit}
        className="bg-[var(--main-orange-color)] flex justify-center items-center text-white h-[48px] rounded-lg w-full"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </div>
  );
}

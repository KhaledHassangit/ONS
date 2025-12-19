"use client";
import HomeServiceIssues from "@/components/dashboard/provider/reportProblem/HomeServiceIssues/HomeServiceIssues";
import TechnicalIssues from "@/components/dashboard/provider/reportProblem/TechnicalIssues/TechnicalIssues";
import { Check } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleProviderProgressMaintenanceService } from "@/features/provider/maintainenance-sevice";

const initialTasks = [
  { id: 1, text: "Issue with a Home Service", completed: true },
  { id: 2, text: "Technical Issue with the App", completed: false },
];

export default function page() {
  const [tasks, setTasks] = useState(initialTasks);
  const selectedTask = tasks.find((task) => task.completed);
  const dispatch = useDispatch();
  const [propertyId , setPropertyId] = useState(null);
  // const {data , loading} = useSelector(state => state.maintainenanceService);
  const selectTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: true }
          : { ...task, completed: false }
      )
    );
  };

   useEffect(() => {
    dispatch(handleProviderProgressMaintenanceService({accesstoken : JSON.parse(localStorage.getItem("accessToken"))?.accessToken || "xfd0Hf0PeFAaAEphlPS6dLLhv_c9lLnt"}))
    .unwrap()
    .then(res => {
      console.log(res?.data[0]?.items[res?.data[0]?.items?.length - 1]?.property_id?.id)
      if(res?.status == 1) {
        setPropertyId(res?.data[0]?.items[res?.data[0]?.items?.length - 1]?.property_id?.id)
      }
    })
    .catch(err => {
      console.log(err)
    })
   } , [])

  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-base font-normal text-[#4F617D]">Report a problem</p>
      <div className="flex flex-col gap-4">
        <h3 className="text-base font-medium text-[#0A0A1F]">Problem Type:</h3>
        <div className="flex flex-wrap gap-2 items-center">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex !items-center justify-between max-w-full sm:max-w-[260px] w-full sm:w-fit gap-[10px] p-[10px] h-auto min-h-[48px] rounded-lg border ${
                task.completed
                  ? "bg-[#FFECDA] border-(--main-orange-color)"
                  : "text-[#76767B] border-[#76767B]"
              }`}
            >
              <span
                className={`text-sm flex justify-center items-center ${
                  task.completed ? "text-gray-600" : "text-gray-800"
                }`}
              >
                {task.text}
              </span>
              <button
                onClick={() => selectTask(task.id)}
                className={`w-[18px] rounded-[6px] h-[18px] border-[1.13px] flex-shrink-0 flex items-center justify-center transition-all ${
                  task.completed
                    ? "bg-(--main-orange-color) text-white"
                    : "border-[#DDDFDF] bg-white"
                }`}
              >
                {task.completed && <Check size={12} strokeWidth={3} />}
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedTask?.id === 1 && <HomeServiceIssues propertyId={propertyId} />}
      {selectedTask?.id === 2 && <TechnicalIssues propertyId={propertyId} />}
    </div>
  );
}

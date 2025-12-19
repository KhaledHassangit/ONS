import React from 'react'

export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col gap-4 px-2 sm:px-4 animate-pulse">
      <div className="bg-gray-200 rounded-xl p-4 h-32"></div>
      <div className="flex flex-col gap-3">
        <div className="h-7 bg-gray-200 rounded w-48"></div>
        <div className="bg-gray-200 rounded-lg p-3 h-40"></div>
        
        <div className="flex flex-col gap-[16px]">
          <div className="h-7 bg-gray-200 rounded w-64"></div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="bg-gray-200 rounded-lg h-52 w-full sm:w-1/2"></div>
            <div className="bg-gray-200 rounded-lg h-52 w-full sm:w-1/2 mt-3 sm:mt-0"></div>
          </div>
        </div>
        
        <div className="flex flex-col gap-[16px]">
          <div className="h-7 bg-gray-200 rounded w-32"></div>
          <div className="flex gap-2 items-center">
            <div className="rounded-full bg-gray-200 h-12 w-12"></div>
            <div className="flex flex-col">
              <div className="h-6 bg-gray-200 rounded w-40"></div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-[16px]">
          <div className="h-7 bg-gray-200 rounded w-48"></div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="bg-gray-200 rounded-lg h-32 w-full"></div>
          </div>
        </div>
        
        <div className="flex justify-between items-center gap-3">
          <div className="bg-gray-200 rounded-lg h-10 w-32"></div>
          <div className="bg-gray-200 rounded-lg h-10 w-32"></div>
        </div>
      </div>
    </div>
  )
}

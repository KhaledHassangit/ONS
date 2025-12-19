"use client";
import TraningsCards from '@/components/dashboard/cleaners/Tranings/TraningsCards/TraningsCards';
import Pagination from '@/components/pagination/Pagination';
import SearchInput from '@/components/searchInput/SearchInput'
import { handleGetAllTraining } from '@/features/provider/trainingSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function page() {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const {data} = useSelector(state => state.training)
    const [trainingData, setTrainingData] = useState([]);
    const [currentPage, setCurrentPage] = useState(trainingData?._meta?.currentPage || 1);
    console.log(trainingData);
    
    // Generate an array of page numbers for pagination
    const generatePageNumbers = () => {
      if (!trainingData?._meta?.totalPages) return [];
      return Array.from({ length: trainingData._meta.totalPages }, (_, i) => i + 1);
    };

    useEffect(() => {
        dispatch(handleGetAllTraining({accesstoken : "xfd0Hf0PeFAaAEphlPS6dLLhv_c9lLnt"}))
        .unwrap()
        .then(res => {
            if(res?.data?.status){
            console.log(res?.data?.data)
            setTrainingData(res?.data?.data[0])
            }
        })
    } , [])

    return (
        <div className='flex flex-col gap-4 md:gap-6 w-full px-2 sm:px-4 md:px-6'>
            <div className='w-full max-w-full sm:max-w-md mx-auto md:mx-0'>
                <SearchInput placeholder='Find a request' value={search} setValue={setSearch} />
            </div>
            <div className='w-full'>
                <TraningsCards trainingData={trainingData} />
            </div>

            {trainingData?._meta?.NumberOfPage > 0 && (
        <Pagination
          totalPages={trainingData?._meta?.NumberOfPage} 
          currentPage={currentPage} 
          pages={generatePageNumbers()} 
          setCurrentPage={setCurrentPage} 
        />
      )}
        </div>
    )
}

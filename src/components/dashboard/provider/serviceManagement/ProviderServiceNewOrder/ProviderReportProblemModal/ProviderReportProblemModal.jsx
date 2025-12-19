"use client";
import { Modal } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleRejectCleanService } from '@/features/provider/cleaning-service';
import { Loader2 } from 'lucide-react';
import { toast } from 'react-toastify';

export default function ProviderReportProblemModal({open , setOpen , data}) {
    const [comment , setComment] = useState("");
    const dispatch = useDispatch();
    const {reject_clean_service_loading} = useSelector(state => state.providerCleaningService);

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append("service_id", data?.id);
        formData.append("comment", comment);
        dispatch(handleRejectCleanService({accesstoken : JSON.parse(localStorage.getItem("accessToken")) ? JSON.parse(localStorage.getItem("accessToken"))?.accessToken : "xfd0Hf0PeFAaAEphlPS6dLLhv_c9lLnt" , data:formData}))
        .unwrap()
        .then(res => {
            if(res?.status == 1) {
                toast.success(res?.data[0]?.message)
                setOpen(false)
                setComment("")
            }else {
                toast.error(res?.data[0]?.message)
            }
        }).catch(err => {
            toast.error(err?.data[0]?.message)
        })
    }
  return (
    <Modal width={800} open={open} onCancel={()=> setOpen(false)} footer={null}>
        <p className='text-base font-medium text-[#0A0A1F]'>What issue are you facing?</p>
        <div className='flex flex-col gap-3 mt-5'>
            <label className='text-base font-medium text-[#0A0A1F]'>Cause of the problem</label>
            <textarea onChange={(e)=> setComment(e.target.value)} value={comment} className='w-full h-[164px] outline-none border border-[#E0E4EB] rounded-lg p-2' placeholder='Enter Cause of the problem' />
        </div>
        <button onClick={handleSubmit} className='mt-5 flex justify-center items-center !ms-auto p-[10px_16px] h-[48px] bg-(--main-orange-color) text-white rounded-lg'>{reject_clean_service_loading ? <Loader2 className='w-4 h-4 animate-spin' /> : "Submit"}</button>
    </Modal>
)
}

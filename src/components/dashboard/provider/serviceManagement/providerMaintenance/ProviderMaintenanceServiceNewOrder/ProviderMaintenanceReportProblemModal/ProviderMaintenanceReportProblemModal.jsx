import { Modal } from 'antd'
import React from 'react'

export default function ProviderReportProblemModal({open , setOpen , data}) {
  return (
    <Modal width={800} open={open} onCancel={()=> setOpen(false)} footer={null}>
        <p className='text-base font-medium text-[#0A0A1F]'>What issue are you facing?</p>
        <div className='flex flex-col gap-3 mt-5'>
            <label className='text-base font-medium text-[#0A0A1F]'>Cause of the problem</label>
            <textarea className='w-full h-[164px] border border-[#E0E4EB] rounded-lg p-2' placeholder='Enter Cause of the problem' />
        </div>
        <button className='mt-5 flex justify-center items-center !ms-auto p-[10px_16px] h-[48px] bg-(--main-orange-color) text-white rounded-lg'>Submit</button>
    </Modal>
)
}

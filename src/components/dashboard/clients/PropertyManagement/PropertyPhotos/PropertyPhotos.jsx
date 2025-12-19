"use client";
import { Trash2 } from 'lucide-react';
import React, { useRef, useState } from 'react'

export default function PropertyPhotos({
  setCurrentStep,
  propertyData,
  setPropertyData
}) {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(propertyData?.image || null);
  const [fileName, setFileName] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setPropertyData({ ...propertyData, image:file });
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
    setFileName('');
    setPropertyData({ ...propertyData, image: null });
  };

  const isFormComplete = () => {
    return (
      propertyData?.image &&
      propertyData?.specail_note 
    );
  };

  return (
    <div className="flex add-employee-page flex-col gap-4 w-full">
    
      <div className='flex flex-col gap-3'>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm sm:text-base font-medium text-[#0A0A1F]">
            Main image of property
          </label>
          <div className="relative border-2 border-dashed border-gray-300 bg-[#F6F6F6] rounded-lg p-2 flex justify-center sm:justify-start">
            {propertyData?.image ? (
              <img 
                src={URL.createObjectURL(propertyData?.image)} 
                alt="Property" 
                className="w-[117px] h-[117px] rounded-lg object-cover"
              />
            ) : (
              <div className="w-[117px] h-[117px] rounded-lg bg-gray-200 flex items-center justify-center text-gray-400">
                No image
              </div>
            )}
          </div>
        </div>
        
        <div className="flex flex-wrap sm:flex-nowrap border border-[#76767B] min-h-[48px] items-center pr-[4px] rounded-lg gap-2 p-1 sm:p-0">
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="bg-[#292760] min-h-[48px] text-white px-4 py-2 rounded text-sm font-medium"
          >
            Change image
          </button>
          <span className="text-xs text-gray-500 flex items-center">{fileName || 'No file selected'}</span>
          <button 
            type="button"
            onClick={handleDeleteImage}
            className="ml-auto flex justify-center items-center bg-[#FFE2E2] h-[40px] w-[40px] rounded-lg p-3 text-[#FF3B30]"
            aria-label="Delete image"
          >
            <Trash2 size={24} color="#FF3B30" />
          </button>
        </div>
        
        <input 
          ref={fileInputRef}
          type="file" 
          accept="image/*" 
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>

      <div className='flex flex-col gap-2'>
      <label className="text-sm sm:text-base font-medium text-[#0A0A1F] ">
            Special notes
          </label>
          <textarea
          value={propertyData?.specail_note || ''}
          onChange={(e) => setPropertyData({ ...propertyData, specail_note: e.target.value })}
            className="h-[105px] border border-[#76767B] rounded-lg p-3 bg-white placeholder:text-sm font-normal text-[#233B37]"
            placeholder="Enter special notes"
          />
      </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center w-full sm:ms-auto sm:w-auto gap-4 mt-4">
      <button
          onClick={() => setCurrentStep(2)}
          className="h-[48px] rounded-2xl p-[10px] bg-[#F5F5F5] w-full sm:w-[167px] text-[#4F617D] flex justify-center items-center"
        >
          Previous
        </button>
        <button
              disabled={!isFormComplete()}

          onClick={() => setCurrentStep(4)}
          className="h-[48px] rounded-2xl p-[10px] bg-[#FF9900] w-full sm:w-[167px] text-white flex justify-center items-center"
        >
          Next
        </button>
      </div>
    </div>
  )
}

import { Search } from 'lucide-react'
import React from 'react'

export default function SearchInput({value, setValue, placeholder}) {
  return (
    <div className="w-full rounded-lg p-2 sm:p-3 flex gap-2 items-center h-[40px] sm:h-[48px] bg-[#F7F8F9] border border-[#F7F8F9] focus-within:border-[#E0E0E0] transition-colors">
        <Search className='w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] text-gray-500' />
        <input 
          placeholder={placeholder} 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
          className='bg-transparent text-(--main-light-color) text-xs sm:text-sm border-0 outline-none w-full'
        />
    </div>
  )
}

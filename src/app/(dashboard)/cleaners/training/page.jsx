"use client";
import TraningsCards from '@/components/dashboard/cleaners/Tranings/TraningsCards/TraningsCards';
import SearchInput from '@/components/searchInput/SearchInput'
import React, { useState } from 'react'



export default function page() {
    const [search , setSearch] = useState("");
  return (
    <div className='flex flex-col gap-6'>
        <SearchInput placeholder='Find a request' value={search} setValue={setSearch} />
        <div>
            <TraningsCards />
        </div>
    </div>
  )
}

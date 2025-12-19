"use client";
import LeftPropertiesManageSection from '@/components/home/Properties-Manage-Section/left-section';
import RightPropertiesManageSection from '@/components/home/Properties-Manage-Section/right-section';
import React from 'react';

function PropertiesManageSection() {
  return (
    <div className= 'gap-[32.66px]  justify-between flex flex-col md:flex-row w-[100%]  p-[16px]  md:p-[80px_120px]'>
      <LeftPropertiesManageSection /> 
      <RightPropertiesManageSection src="/images/Properties-Manage-Section.svg" />
    </div>
  );
}

export default PropertiesManageSection;

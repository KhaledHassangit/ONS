"use client";
import Banner from '@/components/services/Banner/Banner'
import ServiceChooseUs from '@/components/services/ServiceChooseUs/ServiceChooseUs'
import ServiceContact from '@/components/services/ServiceContact/ServiceContact';
import ServiceOffer from '@/components/services/ServiceOffer/ServiceOffer'
import ServiceTestimonial from '@/components/services/ServiceTestimonial/ServiceTestimonial';
import Footer from '@/layouts/footer';
import Header from '@/layouts/header'
import React from 'react'

export default function ServicesPage() {
  return (
    <div className="mt-[80px]">
        <Banner />
        <div className='container mx-auto'>
        <ServiceChooseUs />
        <ServiceOffer />
        <ServiceContact />
        <ServiceTestimonial />
        </div>
    </div>
  )
}

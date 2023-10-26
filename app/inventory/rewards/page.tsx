"use client";
import React from 'react'
import Navbar from '@/components/hostee/Navbar'
import Showcase from "@/components/inventory/Showcase"
import FooterSection from '@/components/landing/FooterSection';

export default function page() {
  return (
    <div className='bg-inventory text-white w-full overflow-hidden'>
        <Navbar/>
        <div className='flex justify-center items-center'>
            <div className='w-[85%] h-[2px] bg-white/40'></div>
        </div>
        <div>
          <Showcase/>
        </div>
        <FooterSection/>
    </div>
  )
}

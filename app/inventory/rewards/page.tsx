"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/hostee/Navbar'
import FooterSection from '@/components/landing/FooterSection';
import Claimed from "@/components/inventory/Claimed"
import Unclaimed from "@/components/inventory/Unclaimed"

export default function Page() {

  const [choose, setChoose ] = useState(false)

  return (
    <div className='bg-inventory text-white w-full overflow-hidden'>
        <Navbar/>
        <div className='min-h-[50vh]'>
          <div>
            <div className="flex items-center mx-20">
              <div className="relative flex items-center">
                <Link
                  href="/inventory"
                  className="p-4"
                >
                  <Image
                    src={"/icons/back-btn.svg"}
                    width={30}
                    height={20}
                    alt="back-btn"
                    className="back-btn"
                  />
                </Link>
              </div>
              <p className="text-2xl my-3 ">
                My Rewards
              </p>
            </div>

            <div className=" flex flex-col justify-center items-center gap-12">
              <div className="w-[30%] flex justify-center items-center p-0.5 border-2 border-[#A0A0A038] rounded-lg">
                <button className={`flex justify-center items-center px-2 w-[50%] rounded-lg ${choose?"bg-transparent":"bg-[#201A24] border-2 border-[#A0A0A038]"}`} onClick={() => setChoose(false)}>Claimed Rewards</button>
                <button className={`flex justify-center items-center px-2 w-[50%] rounded-lg ${choose?"bg-[#201A24] border-2 border-[#A0A0A038]":"bg-transparent"}`} onClick={() => setChoose(true)}>Unclaimed Rewards</button>
              </div>

              <div className="w-full">
                {choose?<Unclaimed />:<Claimed />}
              </div>
            </div>

          </div>
        </div>
        <FooterSection/>
    </div>
  )
}

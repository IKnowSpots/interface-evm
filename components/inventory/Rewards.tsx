import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Rewards() {
  return (
    <div>
        <div className="w-full flex justify-end">
          <div className="grad1 blur-[50px] flex h-[200px] w-[40%] absolute"></div>
        </div>
        <div className='flex justify-center items-center'>
          <div className="box-background relative flex justify-between items-center p-8 w-[85%] rounded-xl">
            <div className="flex flex-col items-start gap-4">
                <h1 className="text-3xl sm:text-4xl font-semibold">My Rewards</h1>
                <p className="w-[65%] text-[0.9rem] sm:text-[1rem] opacity-75">
                Experience the seamless aggregation of your event-related rewards, earned through your attendance at various curated experiences
                </p>
                <Link href="/inventory/rewards">
                  <div className='flex justify-center items-center gap-4 relative z-20'>
                    <p className='text-base sm:text-lg'>View Rewards</p>
                    <Image
                      src="/icons/arrow.svg"
                      width="25"
                      height="100"
                      alt="arrow icon"
                      className="rotate-180"
                    />
                  </div>
                </Link>
            </div>
          </div>
          <div className='w-[75%] h-0 flex justify-end items-center absolute'>
            <Image src="/rewardCard.png" width="240" height="220" alt="discs" />
          </div>
        </div>
    </div>
  )
}

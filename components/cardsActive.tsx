/* eslint-disable @next/next/no-img-element */
"use client"
import Image from "next/image";
import { useState } from "react";
import { pauseEvent } from "@/utils"
import { currency } from "@/config"

const CardsActive = ({ image, name, price, date, tokenId, remaining, supply }: { image: any; name: string; price: any; date: any; tokenId: any; remaining: any; supply: any }) => {

  const [loading, setLoading] = useState(false)

  async function pauseEventCall(tokenId: any) {
    setLoading(true)
    console.log(tokenId)
    await pauseEvent(tokenId)
    setLoading(false)
  }

    return (
        <div className="text-white w-[23%] px-4 box-background pt-4 pb-5 rounded-xl">
            <div className="flex flex-col gap-6">
                <img
                    src={image}
                    className="h-[250px] rounded-xl"
                    // width="195"
                    // height="200"
                    alt="Event&apos;s Image"
                />
                <div className="flex gap-2 text-[0.85rem] flex-col">
                    <div className="flex justify-between items-center">
                        <p>{name}</p>
                        <p>{price} {currency}</p>
                    </div>
                    <div className="h-[2px] rounded-full bg-white"></div>
                    <div className="flex justify-between items-center">
                        <p>{ supply - remaining }</p>
                        <p>{date}</p>
                    </div>
                    {/* <p>{remaining}/{supply}</p> */}
                    {/* <p>1.20 Weth</p> */}
                    <div className="flex justify-center items-center">
                        <button className="view-btn px-4 py-0.5 outline rounded-lg" onClick={() => pauseEventCall(tokenId)}>
                            Pause
                        </button>
                    </div>
                    
                </div>
                {/* <hr />
                <div className="flex justify-between my-6">
                    <p>End&apos;s In 01.34.45</p>
                    <button className="px-4 py-1 outline rounded-lg">
                        Run
                    </button>
                </div> */}
            </div>
        </div>
    );
};
export default CardsActive;

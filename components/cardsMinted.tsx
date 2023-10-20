"use client"
import Image from "next/image";
import { useState } from "react";
import { publishTickets } from "@/utils"

const CardsMinted = ({ image, name, tokenId }: { image: any, name: string, tokenId: any }) => {

  const [loading, setLoading] = useState(false)

  async function publishTicketsCall(tokenId: any) {
    setLoading(true)
    await publishTickets(tokenId)
    setLoading(false)
  }

    return (
        <div className="text-white px-4 bg-[#0F0F0FD9] pt-4 pb-5 rounded-xl">
            <div className="flex flex-col gap-4">
                <Image
                    src={`/events/${image}`}
                    width="195"
                    height="200"
                    alt="Event&apos;s Image"
                />
                <div className="flex justify-between">
                    <p>{name}</p>
                    {/* <p>1.20 Weth</p> */}
                    <button className="view-btn px-4 py-0.5 outline rounded-lg" onClick={() => publishTicketsCall(tokenId)}>
                        Publish
                    </button>
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
export default CardsMinted;

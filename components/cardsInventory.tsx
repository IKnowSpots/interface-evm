/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { currency } from "@/config";
import { link } from "fs";

const CardsInventory = ({
    image,
    name,
    // description,
    date,
    username,
    remaining, 
    supply,
    price,
    venue,
    tokenId,
}: {
    image: any;
    name: string;
    // description: any;
    date: any;
    username: string;
    remaining: any;
    supply: any;
    price: any;
    venue: string;
    tokenId: any;
}) => {
    // function pushPage() {
    //     redirect(`/${username}/events/${tokenId}`);
    // }

    return (
      
        <div className="flex flex-col md:flex-row w-[90%] gap-4 justify-between items-center box-background p-8 my-6 sm:my-8 rounded-xl">
          <Link href={`/inventory/${username}/${tokenId}`} className="flex w-full flex-col md:flex-row justify-between items-center gap-12" >
          <div  className="flex flex-col gap-4 w-full">
            <div className="flex items-center gap-2">
              <img src="/icons/calender-inventory.png" alt="" />
              <p>{date}</p>
            </div>
            <p className="text-4xl font-semibold">{name}</p>
            <p className="text-lg font-semibold">Hosted by @iamtest</p>
            {/* <p>{description}</p> */}
            <div className="flex justify-between w-[85%]">
              <div className="flex items-center gap-1">
                <img src="/map-pin.png" alt="" />
                <p>{venue}</p>
              </div>
              <p className="text-lg font-semibold">Enrolled: <span className="text-base font-normal">{ supply - remaining }</span></p>
              <p className="text-lg font-normal">{ (price == 0.0) ? "Free" : price +" "+ currency }</p>
            </div>
          </div>
          <img
            src={image}
            // width="219"
            // height="136"
            alt="bubble png"
            className="h-[150px] rounded-xl w-[60%]"
          />
          </Link>
        </div>
    );
};
export default CardsInventory;

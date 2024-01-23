"use client";
import { useState } from "react";
import { currency } from "@/config";
import Link from "next/link";

const CardsShortlist = ({
  image,
  name,
  price,
  date,
  tokenId,
  remaining,
  supply,
}: {
  image: any;
  name: string;
  price: any;
  date: any;
  tokenId: any;
  remaining: any;
  supply: any;
}) => {
  return (
    <div className="text-white w-[23%] px-4 box-background pt-4 pb-5 rounded-xl">
      <div className="flex flex-col gap-6">
        <img
          src={image}
          className="h-[250px] rounded-xl"
          // width="195"
          // height="200"
          alt="Event's Image"
        />
        <div className="flex gap-2 text-[0.85rem] flex-col">
          <div className="flex justify-between items-center">
            <p>{name}</p>
            <p>{price == 0.0 ? "Free" : price + " " + currency}</p>
          </div>
          <div className="h-[2px] rounded-full bg-white"></div>
          <div className="flex justify-between items-center">
            <p>Bought: {supply - remaining}</p>
            <p>{date}</p>
          </div>
          <div className="flex justify-center items-center">
            <Link href={`/dashboard/shortlist/${tokenId}/manage`}>
              <p className="view-btn px-4 py-0.5 outline rounded-lg">
                Add Shortlist
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardsShortlist;

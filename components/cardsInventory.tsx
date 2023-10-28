/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useState } from "react";

const CardsInventory = ({
    image,
    name,
    description,
    date,
    username
}: {
    image: any;
    name: string;
    description: any;
    date: any;
    username: string;
}) => {

    return (
        <div className="flex flex-col md:flex-row w-[90%] gap-4 justify-between items-center bg-[#56565680] p-8 my-6 sm:my-8 rounded-xl gap-12">
          <div className="flex flex-col gap-4">
            <p className="text-3xl font-semibold">{name}</p>
            <p>{description}</p>
          </div>
          <img
            src={image}
            width="219"
            height="136"
            alt="bubble png"
            className="rounded-xl"
          />
        </div>
    );
};
export default CardsInventory;

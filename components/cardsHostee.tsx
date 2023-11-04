/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { currency } from "@/config";

const CardsHostee = ({
    image,
    name,
    price,
    date,
    username,
    tokenId,
    supply,
    remaining,
}: {
    image: any;
    name: string;
    price: any;
    date: any;
    username: string;
    tokenId: any;
    supply: any;
    remaining: any;
}) => {
    function pushPage() {
        redirect(`/${username}/events/${tokenId}`);
    }

    // console.log("tok", tokenId)

    return (
        <div className="text-white w-[23%] px-4 box-background pt-4 pb-5 rounded-xl">
            <div className="flex flex-col gap-4">
                <img
                    src={image}
                    className="h-[250px] rounded-xl"
                    // width="190"
                    // height="200"
                    alt="Event's Image"
                />

                <div className="flex gap-2 text-[0.85rem] flex-col">
                    <div className="flex justify-between items-center">
                        <p>{name}</p>
                        <p>
                            {price} {currency}
                        </p>
                    </div>
                    <div className="h-[2px] rounded-full bg-white"></div>
                    <div className="flex justify-between items-center">
                        <p>
                            Supply: {remaining} / {supply}
                        </p>
                        <p>{date}</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link
                            href={`/${username}/events/${tokenId}`}
                            className="view-btn px-4 py-1 outline rounded-lg"
                            onClick={pushPage}
                        >
                            View
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CardsHostee;

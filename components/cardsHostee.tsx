/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

const CardsHostee = ({
    image,
    name,
    price,
    date,
    username,
    tokenId
}: {
    image: any;
    name: string;
    price: any;
    date: any;
    username: string;
    tokenId: any
}) => {
    function pushPage() {
        redirect(`/${username}/events/${tokenId}`);
    }

    // console.log("tok", tokenId)

    return (
        <div className="text-white px-4 bg-[#0F0F0FD9] pt-4 pb-5 rounded-xl">
            <div className="flex flex-col gap-4">
                <img
                    src={image}
                    width="190"
                    height="200"
                    alt="Event's Image"
                />

                <div className="flex justify-between">
                    <p>{name}</p>
                    <p>{price} Sol</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>{date}</p>
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
    );
};
export default CardsHostee;

"use client";
import Image from "next/image";
import { useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

const CardsInventory = ({
    image,
    name,
    price,
    date,
    username,
}: {
    image: any;
    name: string;
    price: any;
    date: any;
    username: string;
}) => {
    function pushPage() {
        redirect(`/${username}/events/${name}`);
    }

    return (
        <div className="text-white px-4 bg-[#0F0F0FD9] pt-4 pb-5 rounded-xl">
            <div className="flex flex-col gap-4">
                <Image
                    src={`/events/${image}`}
                    width="190"
                    height="200"
                    alt="Event's Image"
                />

                <button className="generate-qr-btn mx-7 mt-[9rem] absolute bg-white text-black py-2 px-4 rounded-lg">Generate QR</button>

                <div className="flex justify-between">
                    <p>{name}</p>
                    <p>{price} Sol</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>{date}</p>
                    <Link
                        href={`/${username}/events/${name}`}
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
export default CardsInventory;

"use client";
import Image from "next/image";
import { useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

const CardsHostee = ({ image, name, price, date, username }: { image: any; name: string, price: any, date: any, username: string }) => {

    function pushPage() {
        redirect(`/${username}/events/${name}`)
    }

    return (
        <div className="flex flex-col gap-4">
            <Image
                src={`/events/${image}`}
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
                <Link href={`/${username}/events/${name}`} className="px-4 py-1 outline rounded-lg" onClick={pushPage}>View</Link>
            </div>
        </div>
    );
};
export default CardsHostee;

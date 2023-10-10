"use client";
import Image from "next/image";
import { useState } from "react";
import { runEvent } from "../utils";

const CardsFeatured = ({ image, name, price, date }: { image: any; name: string, price: string, date: any }) => {
    const [loading, setLoading] = useState(false);

    async function runEventCall() {
        setLoading(true);
        await runEvent;
        setLoading(false);
    }

    return (
        <div className="flex flex-col gap-4">
            <Image
                src={`/events/${image}`}
                width="260"
                height="300"
                alt="Event's Image"
            />
            <div className="flex justify-between">
                <p>{name}</p>
                <p>{price} Sol</p>
            </div>
            <hr />
            <div className="flex justify-between my-6">
                <p>Happening {date}</p>
                <button className="px-4 py-1 outline rounded-lg">Stake</button>
            </div>
        </div>
    );
};
export default CardsFeatured;

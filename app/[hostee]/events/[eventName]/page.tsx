/* eslint-disable @next/next/no-img-element */
"use client";
// import Navbar from "@/components/dashboard/create/Navbar";
import Navbar from "@/components/hostee/Navbar";
import Image from "next/image";
import { useState, useEffect } from "react";
import { fetchActiveEventsWithInfura, buyTicket } from "@/utils";
import { usePathname } from "next/navigation";

const Event = () => {
    const pathName = usePathname();
    const username = pathName?.split("/")[1];
    let eventId = pathName?.split("/")[3];

    const [eventData, setEventData] = useState({
        name: "",
        hostName: "",
        price: "",
        venue: "",
        description: "",
        cover: "",
        tokenId: "",
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchActiveEventsData();
    }, []);

    async function fetchActiveEventsData() {
        // console.log("1");
        let compareId = Number(eventId) ;
        console.log("compareId", compareId);
        console.log("username", username);
        setLoading(true);
        let data: any = await fetchActiveEventsWithInfura(username);
        const event = data.find((obj: any) => obj.tokenId == (eventId));
        // console.log("2");
        setEventData(event);
        console.log("event", event);
        if (event) {
        }
        setLoading(false);
        // console.log("4");
    }

    async function claim(tokenId: any, price: any) {
        await buyTicket(username, tokenId, price)
    }

    return (
        <div className="bg-[#25143a] text-white px-8 w-full h-full ">
            <Navbar />
            <div className="md:flex-row flex flex-col py-4">
                <div>
                    <img
                        src={eventData?.cover}
                        alt="event img"
                        className="w-[75%] h-auto mx-auto "
                    />
                </div>
                <div className="flex flex-col px-24 ">
                    <div className="flex items-center py-2  ">
                        <Image
                            src={"/icons/dollar.svg"}
                            width={20}
                            height={30}
                            alt="dollar svg"
                        />
                        <p className="font-lg pl-2">RSVP Stake</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold py-2">
                            {eventData?.name}
                        </h1>
                    </div>
                    <div>
                        <p>{eventData?.price} SOL</p>
                    </div>
                    <div className="flex py-4">
                        <Image
                            src={"/icons/person_avatar.png"}
                            width={50}
                            height={30}
                            alt="person avatar"
                        />
                        <div className="pl-4">
                            <p className="text-[rgba(255,255,255,0.65)]">
                                Host
                            </p>
                            <h3 className="text-xl">{eventData?.hostName}</h3>
                        </div>
                    </div>
                    <div className="bg-[#1E1E1EA6] my-4 py-8 px-12 rounded-2xl shadow-2xl ">
                        <h1 className="text-3xl pb-4">{eventData?.venue}</h1>
                        <p className="w-96">{eventData?.description}</p>
                    </div>
                    <button
                        className="bg-white text-black px-4 py-2 w-1/3 rounded-xl hover:text-white hover:bg-black mx-auto"
                        onClick={() => claim(eventData.tokenId, eventData.price)}
                    >
                        Claim Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Event;

/* eslint-disable @next/next/no-img-element */
"use client";
// import Navbar from "@/components/dashboard/create/Navbar";
import Navbar from "@/components/hostee/Navbar";
import Image from "next/image";
import { useState, useEffect } from "react";
import { fetchActiveEventsWithInfura, buyTicket } from "@/utils";
import { usePathname } from "next/navigation";
import { currency } from "@/config";
import Link from "next/link";

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
        supply: "",
        remaining: ""
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchActiveEventsData();
    }, []);

    async function fetchActiveEventsData() {
        setLoading(true);
        let data: any = await fetchActiveEventsWithInfura(username);
        const event = data.find((obj: any) => obj.tokenId == (eventId));
        setEventData(event);
        console.log("event", event);
        if (event) {
        }
        setLoading(false);
    }

    async function claim(tokenId: any, price: any) {
        
        await buyTicket(username, tokenId, price)
    }

    return (
        
        <div className="bg-[#25143a] text-white pb-8 px-8 w-full h-full">
            <div>
                <div className="grad1 blur-[220px] w-[80%] h-[100vh] absolute z-[1]"></div>
            </div>
            <Navbar />
            <div className="w-full h-full">
            <div className="md:flex-row flex flex-col py-4 justify-center w-full">
                <div className="w-[40%] h-fit flex justify-center items-center rounded-2xl border-red">
                    <img
                        src={eventData?.cover}
                        alt="event img"
                        className="w-[90%] h-fit rounded-xl flex justify-center items-center mx-auto "
                    />
                </div>
                <div className="flex flex-col px-24 w-[60%] ">
                    <div className="flex items-center py-2  ">
                        <Image
                            src={"/icons/dollar.svg"}
                            width={20}
                            height={30}
                            alt="dollar svg"
                        />
                        <p className="font-lg pl-2">RSVP Escrow</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold py-2">
                            {eventData?.name}
                        </h1>
                    </div>
                    <div>
                    <p>{eventData.remaining} / {eventData.supply}</p>
                        <p>{eventData?.price} {currency}</p>
                    </div>
                    <div className="flex py-4">
                        <Image
                            src={"/icons/person_avatar.png"}
                            width={50}
                            height={30}
                            alt="person avatar"
                        />
                        <div className="pl-4">
                            <p className="text-[rgba(255,255,255,0.65)] text-lg">Host</p>
                            <p className="text-white text-lg font-semibold">
                                {username}
                            </p>
                            <h3 className="text-xl">{eventData?.hostName}</h3>
                        </div>
                    </div>
                    <div className="bg-[#1E1E1EA6] my-4 py-4 px-6 rounded-2xl shadow-2xl ">
                        <div className="flex items-center pb-4 gap-2">
                            <img src="/map-pin.png" className="w-[5%]" alt="" />
                            <h1 className="text-xl font-semibold">{eventData?.venue}</h1>
                        </div>
                        <p className=" text-white mb-4">{eventData?.description}</p>
                        {/* <Link href={"/"} className="text-[#3E8BFF] text-lg font-semibold cursor-pointer flex items-center gap-2">
                            Know More
                            <img src="/external-link.svg" alt="" />
                        </Link> */}
                    </div>
                    <button
                        className="bg-white font-semibold text-black px-4 py-2 w-1/3 rounded-xl hover:text-white hover:bg-black mx-auto"
                        onClick={() => claim(eventData.tokenId, eventData.price)}
                    >
                        Claim Now
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Event;

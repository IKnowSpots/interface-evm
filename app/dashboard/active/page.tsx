"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import Image from "next/image";
import CardsActive from "@/components/cardsActive";
import DashNav from "@/components/dashboard/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchActiveEvents } from "../../../utils";


const ActiveEvents = () => {
    const [activeEvents, setActiveEvents] = useState<any>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchActiveEventsCall;
    }, []);

    async function fetchActiveEventsCall() {
        setLoading(true);
        let data: any = await fetchActiveEvents();
        setActiveEvents(data);
        setLoading(false);
    }

    if (loading == true) return <div>Fetching..</div>;

    // if (loading == false && activeEvents.length == 0)
    //     return (
    //         <div>
    //             ACTIVE EVENTS <br /> No Events
    //         </div>
    //     );

    return (
        <div className="flex h-full w-full">
            <Sidebar />
            <div className="bg-[#25143a] w-[75%]">
                <DashNav />
                <div className="px-8">
                    <p className="text-white font-semibold pl-4 pt-2">
                        Active Events
                    </p>
                    <div className="flex gap-x-10 gap-y-5 flex-wrap pt-4 px-4">
                        <CardsActive image={"3.png"} name="Lorem Ipsum" />
                        <CardsActive image={"3.png"} name="Lorem Ipsum" />
                        <CardsActive image={"3.png"} name="Lorem Ipsum" />
                        <CardsActive image={"3.png"} name="Lorem Ipsum" />
                        <CardsActive image={"3.png"} name="Lorem Ipsum" />
                        <CardsActive image={"3.png"} name="Lorem Ipsum" />

                    {/* <div className="">
                        <Calender className="rounded-xl py-8 px-2 items-center bg-black text-center justify-around " />
                    </div> */}
                    </div>
                    <a href="/dashboard/create">
                        <div className="create-event-btn flex w-[10.5rem] justify-between mx-auto mt-4 px-2 py-2 border">
                            <Image
                                src={"/icons/qr.svg"}
                                width={20}
                                height={20}
                                alt="qr code svg"
                                className=""
                            />
                            <p className=" text-white">Create an Event</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ActiveEvents;

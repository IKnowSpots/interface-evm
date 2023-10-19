"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import Image from "next/image";
import CardsInactive from "@/components/cardsInactive";
import DashNav from "@/components/dashboard/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchPausedEvents } from "../../../utils";


const InactiveEvents = () => {
    const [inactiveEvents, setInactiveEvents] = useState<any>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchInactiveEventsCall;
    }, []);

    async function fetchInactiveEventsCall() {
        setLoading(true);
        let data: any = await fetchPausedEvents();
        setInactiveEvents(data);
        setLoading(false);
    }

    if (loading == true) return <div>Fetching..</div>;

    // if (loading == false && inactiveEvents.length == 0)
    //     return (
    //         <div>
    //             INACTIVE EVENTS <br /> No Events
    //         </div>
    //     );

    return (
        <div className="flex h-full w-full">
            <Sidebar />
            <div className="bg-[#25143a] w-[75%]">
                <DashNav />
                <div className="px-8">
                    <p className="text-white font-semibold pl-4 pt-2">
                    INACTIVE Events
                    </p>
                    <div className="flex gap-x-10 gap-y-5 flex-wrap pt-4 px-4">
                        <CardsInactive image={"3.png"} name="Lorem Ipsum" />
                        <CardsInactive image={"3.png"} name="Lorem Ipsum" />
                        <CardsInactive image={"3.png"} name="Lorem Ipsum" />
                        <CardsInactive image={"3.png"} name="Lorem Ipsum" />
                        <CardsInactive image={"3.png"} name="Lorem Ipsum" />
                        <CardsInactive image={"3.png"} name="Lorem Ipsum" />

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

export default InactiveEvents;

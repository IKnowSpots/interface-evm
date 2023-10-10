"use client"
import Sidebar from "@/components/dashboard/Sidebar";
import Image from "next/image";
import CardsActive from "@/components/cardsActive";
import DashNav from "@/components/dashboard/DashNav";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchActiveEvents } from "../../../utils"

const ActiveEvents = () => {
    const [activeEvents, setActiveEvents] = useState<any>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchActiveEventsCall;
    }, []);

    async function fetchActiveEventsCall() {
        setLoading(true)
        let activeEventsData: any = await fetchActiveEvents()
        setActiveEvents(activeEventsData);
        setLoading(false)
    }

    return (
        <div className="flex h-[100vh] w-[100vw]">
            <Sidebar />
            <div className="bg-[#25143a]">
                <DashNav />
                {/* <div className="grid grid-cols-4 py-4"> */}
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
                    <div className="w-[11rem] mx-auto mt-4">
                        <Link href="/dashboard/create">
                            <p className="text-white flex justify-between items-center px-2 py-2 border">
                                <Image
                                    src={"/icons/qr.svg"}
                                    width={20}
                                    height={20}
                                    alt="qr code svg"
                                />
                                Create an Event
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActiveEvents;

"use client"
import Sidebar from "@/components/dashboard/Sidebar";
import Image from "next/image";
import CardsInactive from "@/components/cardsInactive";
import DashNav from "@/components/dashboard/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchInactiveEvents } from "../../../utils"

const ActiveEvents = () => {
    const [inactiveEvents, setInactiveEvents] = useState<any>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchInactiveEventsCall;
    }, []);

    async function fetchInactiveEventsCall() {
        setLoading(true)
        let inactiveEventsData: any = await fetchInactiveEvents()
        setInactiveEvents(inactiveEventsData);
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
                        Inactive Events
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

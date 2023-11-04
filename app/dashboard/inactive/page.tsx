"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import Image from "next/image";
import CardsInactive from "@/components/cardsInactive";
import DashNav from "@/components/dashboard/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchInactiveEvents } from "../../../utils";

const InactiveEvents = () => {
    const [inactiveEvents, setInactiveEvents] = useState<any>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchInactiveEventsData();
    }, []);

    async function fetchInactiveEventsData() {
        try {
            setLoading(true);
            let data: any = await fetchInactiveEvents();
            setInactiveEvents(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    if (loading == true)
        return (
            <Layout>
                <div className="text-white">Fetching..</div>
            </Layout>
        );

    if (loading == false && inactiveEvents.length == 0)
        return (
            <Layout>
                <div className="text-white p-4">No Events</div>
            </Layout>
        );

    return (
        <Layout>
            <div className="flex gap-x-6 gap-y-5 flex-wrap pt-4 px-6">
                {inactiveEvents.map((nft: any, i: any) => {
                    return (
                        <CardsInactive
                            key={i}
                            tokenId={nft.tokenId}
                            image={nft.cover}
                            name={nft.name}
                        />
                    );
                })}
                {/* <CardsMinted tokenId="01" image={"3.png"} name="Lorem Ipsum" />
                        <CardsInactive tokenId="01" image={"3.png"} name="Lorem Ipsum" />
                        <CardsInactive tokenId="01" image={"3.png"} name="Lorem Ipsum" />
                        <CardsInactive tokenId="01" image={"3.png"} name="Lorem Ipsum" />
                        <CardsInactive tokenId="01" image={"3.png"} name="Lorem Ipsum" />
                        <CardsInactive tokenId="01" image={"3.png"} name="Lorem Ipsum" /> */}

                {/* <div className="">
                        <Calender className="rounded-xl py-8 px-2 items-center bg-black text-center justify-around " />
                    </div> */}
            </div>
        </Layout>
    );

    function Layout({ children }: { children: React.ReactNode }) {
        return (
            <div className="flex h-full w-full">
                <Sidebar />
                <div className="bg-[#25143a] w-[80%]">
                    <DashNav />
                    <div className="px-12 ">
                        <div className="bg-createEvent blur-[220px] absolute w-[70%] h-[700px] z-[-1]" />

                        <p className="text-white font-semibold pl-4 pt-2">
                            INACTIVE EVENTS
                        </p>
                    </div>
                    {children}
                </div>
            </div>
        );
    }
};

export default InactiveEvents;

"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import Image from "next/image";
import CardsActive from "@/components/cardsActive";
import DashNav from "@/components/dashboard/Navbar";
import { useEffect, useState } from "react";
import { fetchActiveEvents } from "../../../utils";

const ActiveEvents = () => {
    // to run this page static comment 42-51 and uncomment 52-57

    const [activeEvents, setActiveEvents] = useState<any>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchActiveEventsData();
    }, []);

    async function fetchActiveEventsData() {
        try {
            setLoading(true);
            let data: any = await fetchActiveEvents();
            setActiveEvents(data);
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

    if (loading == false && activeEvents.length == 0)
        return (
            <Layout>
                <div className="text-white p-4">No Events</div>
            </Layout>
        );

    return (
        <Layout>
            <div className="flex gap-x-6 gap-y-5 flex-wrap pt-4 px-6 ">
                {activeEvents.map((nft: any, i: any) => {
                    return (
                        <CardsActive
                            setActiveEvents={setActiveEvents}
                            key={i}
                            tokenId={nft?.tokenId}
                            image={nft?.cover}
                            name={nft?.name}
                            price={nft?.price}
                            date={nft?.date}
                            remaining={nft?.remaining}
                            supply={nft?.supply}
                        />
                    );
                })}
                {/* <CardsMinted tokenId="01" image={"3.png"} name="Lorem Ipsum" />
                        <CardsActive tokenId="01" image={"3.png"} name="Lorem Ipsum" />
                        <CardsActive tokenId="01" image={"3.png"} name="Lorem Ipsum" />
                        <CardsActive tokenId="01" image={"3.png"} name="Lorem Ipsum" />
                        <CardsActive tokenId="01" image={"3.png"} name="Lorem Ipsum" />
                        <CardsActive tokenId="01" image={"3.png"} name="Lorem Ipsum" /> */}

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
                            ACTIVE EVENTS
                        </p>
                    </div>
                    {children}
                </div>
            </div>
        );
    }
};

export default ActiveEvents;

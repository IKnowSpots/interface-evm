"use client";
import Navbar from "@/components/hostee/Navbar";
import Rewards from "@/components/inventory/Rewards";
import MyCalender from "@/components/inventory/MyCalender";
import Link from "next/link";
import CardsInventory from "@/components/cardsInventory";
import { fetchUsername, fetchCommonInventory } from "@/utils";
import { useEffect, useState } from "react";
import Image from "next/image";
import FooterSection from "@/components/landing/FooterSection";

const EventsByHost = () => {
    const [inventoryData, setInventoryData] = useState<any>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchInventoryData();
    }, []);

    async function fetchInventoryData() {
        setLoading(true);
        const data: any = await fetchCommonInventory();
        setInventoryData(data);
        setLoading(false);
    }
    return (
        <div className="bg-inventory h-[100%] text-white w-full overflow-hidden">
            <Navbar />
            <div className="flex justify-between px-[6rem]">
                <div className="pb-8 flex flex-col gap-1 mx-8">
                    <div>
                        <p className="text-2xl font-semibold">Inventory</p>
                    </div>
                    <p className="opacity-75">
                        Explore the events you&apos;e marked as yours.
                    </p>
                </div>
                <div className="flex justify-center items-center text-white h-[40px] border-white w-[20rem] bg-[#1C1C1C]  rounded-full px-2 py-1 ">
                    <img src="/search.png" className="w-[10%]" alt="" />
                    <input
                        type="text"
                        placeholder="Search events"
                        className="text-white h-[40px] border-white w-[18rem] bg-[#1C1C1C] rounded-full px-4"
                    />
                </div>
            </div>

            <div>
                <Link href="/inventory/rewards">
                    <Rewards />
                </Link>
            </div>

            <div className="w-full mt-[5rem] flex ">
                <div className="flex flex-col md:flex-row gap-6 w-full mx-6">
                    <div className="flex items-center justify-center w-[60%] ">
                        <div className="w-full flex relative z-5">
                            <div className="w-full flex flex-col items-center">
                                <div className="flex justify-center w-[80%] gap-8">
                                    <button className="bg-white text-[0.5rem] md:text-base w-[20%] p-3 rounded-[30px] text-[#090312] font-semibold">
                                        All Events
                                    </button>
                                    <button className="bg-white/50 text-[0.5rem] md:text-base w-[20%] p-3 rounded-[30px] text-[#090312] font-semibold">
                                        Upcoming
                                    </button>
                                    <button className="bg-white/50 text-[0.5rem] md:text-base w-[20%] p-3 rounded-[30px] text-[#090312] font-semibold">
                                        Attended
                                    </button>
                                </div>
                                {inventoryData.map((nft: any, i: any) => {
                                    return (
                                        <CardsInventory
                                            key={i}
                                            image={nft?.cover}
                                            name={nft?.name}
                                            description={nft?.description}
                                            username={""}
                                            date={""}
                                        />
                                    );
                                })}
                                {/* <CardsInventory
                        image="/solidity.jpeg"
                        name="Solidity Bootcamp"
                        description="Intensive Solidity Bootcamp: Develop smart contracts, DApps, and excel in blockchain."
                        username=""
                        date=""
                    />
                    <CardsInventory
                        image="/hacker.jpeg"
                        name="Hacker Hostel"
                        description="Intensive Solidity Bootcamp: Develop smart contracts, DApps, and excel in blockchain."
                        username=""
                        date=""
                    />
                    <CardsInventory
                        image="/tpg.jpeg"
                        name="TPG Meetup"
                        description="Gathering for tech enthusiasts to network,
                        learn, and share industry insights."
                        username=""
                        date=""
                    /> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center md:w-[40%]">
                        <div className="">
                            <MyCalender />
                        </div>
                    </div>
                </div>
            </div>
            <FooterSection/>
        </div>
    );
};

export default EventsByHost;

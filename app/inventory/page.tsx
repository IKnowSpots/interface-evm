"use client";
import CardsInventory from "@/components/cardsInventory";
import Navbar from "@/components/hostee/Navbar";
import Rewards from "@/components/inventory/Rewards";
import Events from "@/components/inventory/Events";
import MyCalender from "@/components/inventory/MyCalender";
import { fetchUsername, fetchCommonInventory } from "@/utils";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EventsByHost = () => {
    const [inventoryData, setInventoryData] = useState<any>();
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     fetchInventoryData();
    // }, []);

    async function fetchInventoryData() {
        setLoading(true)
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
                    <p className="opacity-75">Explore the events you&apos;e marked as yours.</p>
                </div>
                <input
                    type="text"
                    placeholder="Search events"
                    className="text-white h-[40px] border-white w-[20rem] bg-[#1C1C1C]  rounded-full px-4 mx-8"
                />
            </div>

            <div>
                <Link href="/inventory/rewards">
                    <Rewards />
                </Link>
            </div>


            <div className="w-full mt-[5rem]">
                <div className="flex flex-col-reverse lg:flex-row mx-8">
                    <Events />
                    <MyCalender />
                </div>
            </div>
        </div>
    );
};

export default EventsByHost;

"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchUsername } from "@/utils";

const DashNav = () => {
    const [username, setUsername] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchUsernameCall();
    }, []);

    async function fetchUsernameCall() {
        setLoading(true);
        let user = await fetchUsername();
        setUsername(user);
        // setUsername("iamacid");
        setLoading(false);
    }

    function CreateButton() {
        return (
            <a href="/dashboard/create">
                <div className="create-event-btn text-[0.8rem] flex justify-around w-[10.5rem] mx-auto px-4 py-2 border rounded-xl z-[10]">
                    <Image
                        src={"/icons/qr.svg"}
                        width={20}
                        height={20}
                        alt="qr code svg"
                        className=""
                    />
                    <p className="z-[10] text-white">Create an Event</p>
                </div>
            </a>
        );
    }

    return (
        <div id="dash-navbar" className="flex justify-around items-center gap-4 pt-8 pb-4 px-4 w-full">
            <div className="w-[65%] flex justify-center">
            <div className="flex justify-center items-center text-white h-[40px] border-white w-[20rem] bg-black  rounded-full px-2 py-1 ">
            <img src="/search.png" className="w-[10%]" alt="" />
            <input
                type="text"
                placeholder="Search events"
                className="text-white h-[2.5rem] w-[45%] border-white bg-black rounded-full px-4 "
            />
            </div>
            </div>

            <div>
                <CreateButton/>
            </div>

            <div>
                <button className="create-event-btn text-base flex justify-around w-[7.5rem] mx-auto px-2 py-2 rounded-lg z-[10] ml-6 text-white font-semibold bg-[#070708]">Contract</button>
            </div>

            <div className="flex gap-2 w-[22%] justify-end items-center">
                {/* <Link href="/test/events"> */}
                <Link href={`/${username}/events`}>
                    <div className="text-white bg-[#070708] py-2 text-base font-semibold flex items-center gap-2 pl-5 pr-3 border border-transparent rounded-full hover:bg-white hover:text-black">
                        <p className="">Hii, @{username}</p>
                        <div className="h-[1.5rem] w-[1.5rem] grad1 rounded-full"></div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default DashNav;

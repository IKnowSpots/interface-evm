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

    return (
        <div id="dash-navbar" className="flex justify-around items-center pt-8 pb-4 px-4 w-full">
            <div className="w-[75%] flex justify-center">
            <input
                type="text"
                placeholder="Search events"
                className="text-white h-[2.5rem] w-[35%] border-white bg-black rounded-full px-4 "
            />
            </div>

            <div className="flex gap-2 w-[25%] justify-end items-center">
                {/* <Link href="/test/events"> */}
                <Link href={`/${username}/events`}>
                    <div className="text-white bg-[#070708] py-2 text-base font-semibold flex items-center gap-2 pl-5 pr-3 border border-transparent rounded-full hover:bg-white hover:text-black">
                        <p className="">Hii, @{username}</p>
                        <div className="h-[1.5rem] w-[1.5rem] grad1 rounded-full"></div>
                    </div>
                    {/* <Image
                        src={"/icons/Question.svg"}
                        width={35}
                        height={110}
                        alt="Question svg"
                        className="mt-[-0.1rem]"
                    /> */}
                </Link>
            </div>
        </div>
    );
};

export default DashNav;

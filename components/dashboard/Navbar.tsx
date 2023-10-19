"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchUsername } from "@/utils";

const DashNav = () => {
    const [username, setUsername] = useState("iamacid");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchUsernameCall();
    }, []);

    async function fetchUsernameCall() {
        setLoading(true);
        let user = await fetchUsername();
        // setUsername(user);
        setUsername("iamacid");
        setLoading(false);
    }

    return (
        <div id="dash-navbar" className="flex justify-around pt-8 pb-4 px-4 w-full">
            <div className="w-[75%] flex justify-center">
            <input
                type="text"
                placeholder="Search events"
                className="text-white h-[2.75rem] w-[38%] border-white bg-[#1C1C1C] rounded-full px-4 "
            />
            </div>

            <div className="flex gap-2 w-[25%] justify-end">
                <Link href="/test/events">
                    <div className="text-white bg-[#070708] h-[100%] py-2 text-lg font-semibold flex items-center gap-2 pl-5 pr-3 border border-transparent rounded-full hover:bg-white hover:text-black">
                        <p className="">Hii, @{username}</p>
                        <div className="h-[2rem] w-[2rem] grad1 rounded-full"></div>
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

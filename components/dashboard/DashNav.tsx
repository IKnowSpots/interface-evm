"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const DashNav = () => {

    const[ username, setUsername ] = useState("iamacid")

    useEffect(() => {}, [])

    return (
        <div id="dash-navbar" className="flex pt-8 pb-4 px-4">
            <input
                type="text"
                placeholder="Search events"
                className="text-white h-[34px] border-white w-1/3 bg-[#1C1C1C] mx-auto rounded-full px-4 "
            />

            <div className="flex gap-2">
                <p className="text-white h-[90%] text-sm flex items-center gap-1 px-3 border rounded-lg">
                    {/* <Image
                        src={"/bored_ape_image.png"}
                        width={25}
                        height={25}
                        alt="bored ape image avatar"
                        className="rounded-full"
                    /> */}
                    <p className="">@{username}</p>
                </p>
                <Link href="/test/events">
                    <Image
                        src={"/icons/Question.svg"}
                        width={35}
                        height={110}
                        alt="Question svg"
                        className="mt-[-0.1rem]"
                    />
                </Link>
            </div>
        </div>
    );
};

export default DashNav;

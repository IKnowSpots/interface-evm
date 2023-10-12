/* eslint-disable @next/next/no-img-element */
"use client";
import { fetchUsernameValidity, setUsername } from "@/utils";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Dashboard = () => {
    const [username, setUsername] = useState<String>("");
    const [loading, setLoading] = useState<Boolean>(false);

    useEffect(() => {
        getUsernameCall();
    }, []);

    async function getUsernameCall() {
        setLoading(true);
        let varUsername: any = await fetchUsernameValidity();
        setUsername(varUsername);
        // setUsername("");
        setLoading(false);
    }

    function pushPage() {
        // redirect('/',);
        window.location.replace("/dashboard/active");
    }

    console.log("hey", username)

    if (username != "") {
        // redirect("/dashboard/active");
        pushPage();
    }

    return (
        <div>
            <RenderSetUsername />
        </div>
    );
};

function RenderSetUsername() {
    const [username, setUsernameHook] = useState();

    async function setUsernameCall() {
        await setUsername(username);
        pushPage();
    }

    function pushPage() {
        // redirect("/dashboard/active");
        window.location.replace("/dashboard/active");
    }

    return (
        <div className="text-white flex bg-[#25143a] h-[100vh] w-[100vw] gap-4">
            <div className="bg-[#242424BF] border-white border-opacity-60 rounded-lg">
                <div className="w-[50vw] h-[100%] flex justify-center items-center">
                    <img
                        src="/events/3.png"
                        className=" flex w-[92%] h-[92%]"
                        alt="welcome image"
                    />
                </div>
            </div>
            <div className="flex flex-col justify-between items-center w-[100%]">
                <div className="mt-12">
                    <Link href="/">
                        <Image
                            src={"/iks-logo.png"}
                            width={300}
                            height={100}
                            alt="iks logo"
                            className=""
                        />
                    </Link>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-3xl mb-4">Welcome 👋🏻</h3>
                    <p className="w-3/4 text-[rgba(255,255,255,0.65)] font-light">
                        Today is a new day. It&apos;s your day. You shape it.
                        Your username, your entry ticket.{" "}
                    </p>
                    <div className="flex flex-col w-3/4 py-8">
                        <label htmlFor="username" className="font-lg py-2">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="iknowspots"
                            className="px-4 py-2 rounded-xl my-2 text-black"
                            onChange={(e) => setUsernameHook(e)}
                        />
                        <button
                            className="get-started-btn py-3 rounded-xl bg-[#162D3A] my-2"
                            onClick={setUsernameCall}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="py-4">
                    <p className="text-[rgba(255,255,255,0.65)] text-sm">
                        © 2023 ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

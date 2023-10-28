/* eslint-disable @next/next/no-img-element */
"use client";
import { fetchIfDeployed, deploy } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Dashboard = () => {
    const [isDeployed, setIsDeployed] = useState<Boolean>();
    const [loading, setLoading] = useState<Boolean>(false);

    useEffect(() => {
        checkDeployment();
    }, []);

    // useEffect(() => {
    //     if (isDeployed == true) {
    //         pushPage();
    //     }
    // }, [isDeployed]);

    async function checkDeployment() {
        setLoading(true)
        const data = await fetchIfDeployed();
        console.log("deploy", data);
        setIsDeployed(data);
        setLoading(false);
    }

    // comment line 12-20, 32-34 to make this page static

    // function pushPage() {
    //     window.location.replace("/dashboard/active");
    // }

    if (loading == true) return (<div className="text-white">Loading..</div>)

    return (
        <div>
            <RenderSetUsername />
        </div>
    );
};

function RenderSetUsername() {
    const [username, setUsernameHook] = useState<String>();
    const [deployed, setIsDeployed] = useState<Boolean>(false);

    // if deployed is true then change button to Move forward

    async function setUsernameCall() {
        await deploy(username);
        setIsDeployed(true);
    }

    function pushPage() {
        // redirect("/dashboard/active");
        window.location.replace("/dashboard/active");
    }

    return (
        <div className="text-white flex bg-[#25143a] h-[100vh] w-[100vw] gap-4">
            <div className="bg-[#624c9ba6] border-white border-opacity-60 rounded-lg">
                <div className="w-[55vw] h-[100%] flex rounded-xl justify-center items-center">
                {/* <div className="grad2 blur-[220px] absolute w-full h-[700px]"></div> */}
                <div className="bg-createEvent blur-[220px] absolute w-full h-[700px]"/>

                    <img
                        src="/events/3.jpeg"
                        className=" flex w-[80%] h-[80%] rounded-2xl"
                        alt="welcome image"
                    />
                </div>
            </div>

            <div className="flex flex-col justify-between items-center w-[100%]">
            <div className="grad1 blur-[140px] flex h-[1200px] w-[660px] absolute"></div>

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
                    <div className="flex flex-row items-center gap-2">
                        <h3 className="text-3xl mb-4 ">Welcome</h3>
                        <h3 className="text-4xl mb-4 animate-wave ">👋🏻</h3>
                    </div>
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
                            onChange={(e) => setUsernameHook(e.target.value)}
                        />
                        {deployed ? (
                            <button
                            className="get-started-btn py-3 rounded-xl bg-[#162D3A] my-2"
                            onClick={pushPage}
                        >
                            Move Forward
                        </button>
                        ) : (
                            
                            <button
                            className="get-started-btn py-3 rounded-xl bg-[#162D3A] my-2"
                            onClick={setUsernameCall}
                        >
                            Set Username
                        </button>
                        )}
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

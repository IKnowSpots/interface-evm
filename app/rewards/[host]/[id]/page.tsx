/* eslint-disable @next/next/no-img-element */
"use client";
// import Navbar from "@/components/dashboard/create/Navbar";
import Navbar from "@/components/dashboard/claim-rewards/ClaimNavbar";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
    buyTicket,
    fetchAllRewards,
    fetchIfWhitelistedRewards,
    claimReward,
    fetchIndividualReward,
} from "@/utils";
import { usePathname } from "next/navigation";
import { currency } from "@/config";
import Link from "next/link";
import FooterSection from "@/components/landing/FooterSection";
import { useAccount } from "wagmi";

const Reward = () => {
    const {address,isConnected}=useAccount();
    const pathName = usePathname();
    const username = pathName?.split("/")[1];
    let host_Id = pathName?.split("/")[2];
    let reward_Id = pathName?.split("/")[3];
    console.log(host_Id,"host id")
    const [rewardData, setRewardData] = useState({
        name: "",
        hostName: "",
        price: "",
        description: "",
        cover: "",
        rewardId: "",
    });
    const [loading, setLoading] = useState(false);
    const [isWhitelisted, setIsWhitelisted] = useState(false);

    const [toggle, setToggle] = useState(false);
    //const [more, setMore] = useState(rewardData?.description.slice(0, 350));
    // function handleClick() {
    //     toggle
    //         ? setMore(rewardData?.description.slice(0, 350))
    //         : setMore(rewardData?.description);
    //     setToggle(!toggle);
    // }

    useEffect(() => {
        fetchAllRewardsData();
        fetchIsWhitelistedData();
    }, []);

    async function fetchIsWhitelistedData() {
        console.log(1)
        const data = await fetchIfWhitelistedRewards(reward_Id,address);
        console.log(5)
        console.log("d", data)
        setIsWhitelisted(data);
    }

    async function claimRewardFunc() {
        await claimReward();
    }

    async function fetchAllRewardsData() {
        setLoading(true);

        let fetchedRewards: any = await fetchIndividualReward(host_Id);
        const event = fetchedRewards.find(
            (obj: any) => obj.rewardId == reward_Id
        );
        setRewardData(event);
        console.log("event", event);
        if (event) {
        }
        setLoading(false);
    }

    async function claim(tokenId: any, price: any) {
        await buyTicket(username, tokenId, price);
    }

    return (
        <div className="bg-[#25143a] text-white pb-8 px-8 w-full h-screen">
            <div>
                <div className="grad1 blur-[220px] w-[80%] h-screen absolute z-[1]"></div>
            </div>
            <Navbar />
            <div className="w-full mb-12">
                <div className="flex flex-col gap-4 py-4 justify-center items-center w-full">
                    <div className="text-2xl font-bold mb-2">Claim Your Rewards</div>
                    <div className="flex justify-center items-center w-full">
                        <div className="flex flex-col gap-2 w-[26%] bg-white rounded-lg">
                            <img src="/rewardimg.png" className="w-full rounded-lg" alt="" />
                            <div className="flex justify-between p-2 text-black items-center font-semibold">
                                <p>Reward Name</p>
                                {/* <p>Text</p> */}
                            </div>
                        </div>
                    </div>
                    {!isConnected?<div>
                        <button className="bg-white font-semibold text-black mt-4 px-4 py-2 rounded-full hover:text-white hover:bg-black mx-auto">Connect Your Wallet</button>
                    </div>:<></>}
                    
                    <div className="flex flex-col px-24 w-[60%] ">
                        {isWhitelisted ? (
                            <button
                                className="bg-white font-semibold text-black px-4 py-2 w-1/3 rounded-xl hover:text-white hover:bg-black mx-auto"
                                onClick={()=>claimReward(reward_Id)}
                            >
                                Claim
                            </button>
                        ) : isConnected ? (
                            <button className="bg-white font-semibold text-black px-4 py-2 w-1/3 rounded-xl hover:text-white hover:bg-black mx-auto">
                                You are not Whitelisted
                            </button>
                        ) : <></>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reward;

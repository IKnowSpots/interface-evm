/* eslint-disable @next/next/no-img-element */
"use client";
import Navbar from "@/components/navbar/ClaimNavbar";
import { useState, useEffect } from "react";
import {
  fetchRewardsThroughUsername,
  fetchIfWhitelistRewards,
  claimReward,
} from "@/utils";
import { usePathname } from "next/navigation";
import { useAccount } from "wagmi";

const Reward = () => {
  const { address, isConnected } = useAccount();

  const pathName = usePathname();
  let host_username = pathName?.split("/")[2];
  let reward_Id = pathName?.split("/")[3];

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

  useEffect(() => {
    fetchAllRewardsData();
    fetchIsWhitelistedData();
  }, []);

  async function fetchIsWhitelistedData() {
    console.log("params", reward_Id, host_username);
    const data = await fetchIfWhitelistRewards(reward_Id, host_username);
    console.log("whitelisted?", data);
    setIsWhitelisted(data);
  }

  async function fetchAllRewardsData() {
    setLoading(true);

    let fetchedRewards: any = await fetchRewardsThroughUsername(host_username);
    const event = fetchedRewards.find((obj: any) => obj.rewardId == reward_Id);
    setRewardData(event);
    console.log("event", event);
    if (event) {
    }
    setLoading(false);
  }

  async function claimRewardCall() {
    await claimReward(reward_Id, host_username);
  }

  return (
    <div className="bg-[#25143a] text-white pb-2 md:pb-8 px-2 md:px-8 w-full min-h-screen md:h-screen">
      <div>
        <div className="grad1 blur-[220px] w-[80%] h-screen absolute z-[1]"></div>
      </div>
      <Navbar />
      <div className="w-full md:mb-12">
        <div className="flex flex-col gap-4 py-2 sm:py-4 justify-center items-center w-full">
          <div className="text-lg sm:text-2xl font-bold mb-2">
            Claim Your Rewards
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="flex flex-col gap-2 w-[75%] sm:w-[50%] md:w-[25%] box-background">
              <img
                src={rewardData?.cover}
                className="w-full rounded-lg"
                alt=""
              />
              <div className="flex justify-center  p-1 md:p-2 items-center font-semibold">
                <p>{rewardData?.name}</p>
              </div>
            </div>
          </div>
          {!isConnected ? (
            <div>
              <button className="bg-white text-[0.75rem] md:text-base font-semibold text-black mt-2 md:mt-4 px-4 py-2 rounded-full hover:text-white hover:bg-black mx-auto">
                Connect Your Wallet
              </button>
            </div>
          ) : (
            <></>
          )}

          <div className="flex flex-col md:px-24 w-[60%] ">
            {isWhitelisted ? (
              <button
                className="bg-white font-semibold text-black px-4 py-2 md:w-1/3 rounded-2xl hover:text-white hover:bg-black mx-auto text-[0.75rem] md:text-base"
                onClick={() => claimRewardCall()}
              >
                Claim
              </button>
            ) : isConnected ? (
              <button className="bg-white font-semibold text-black px-4 py-2 md:w-1/3 rounded-2xl hover:text-white hover:bg-black mx-auto text-[0.75rem] md:text-base">
                You are not Whitelisted
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;

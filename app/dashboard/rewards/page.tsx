/* eslint-disable @next/next/no-img-element */
"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import Image from "next/image";
import DashNav from "@/components/dashboard/rewardsnav";
import CardsReward from "@/components/cardsRewards";
import { useEffect, useState } from "react";
import { fetchHostedRewards } from "@/utils";
import LoadingModal from "@/components/LoadingModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Rewards = () => {
  const [allRewards, setAllRewards] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAllRewardsData();
  }, []);

  async function fetchAllRewardsData() {
    try {
      setLoading(true);
      let data: any = await fetchHostedRewards();
      setAllRewards(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  function CreateReward() {
    return (
      <a href="/dashboard/create-reward">
        <div className="create-event-btn createEvent flex justify-around w-[11rem] mx-auto px-4 py-2 border border-[#FFFFFF73] rounded-lg z-[10]">
          <Image
            src={"/icons/qr.svg"}
            width={20}
            height={20}
            alt="qr code svg"
            className=""
          />
          <p className="z-[10] text-white">Create a Reward</p>
        </div>
      </a>
    );
  }

  if (loading == true)
    return (
      <Layout>
        <LoadingModal visible={true} />
      </Layout>
    );

  if (loading == false && allRewards.length == 0)
    return (
      <Layout>
        <div className="flex justify-center items-center mt-10 mb-10">
          <img src="/empty.svg" className="w-[50%] h-fit" alt="" />
        </div>
        <div>
          <CreateReward />
        </div>
      </Layout>
    );

  return (
    <Layout>
      <div className="flex gap-x-6 gap-y-5 flex-wrap pt-4 px-6 ">
        {allRewards.map((nft: any, i: any) => {
          return (
            <CardsReward
              key={i}
              rewardId={nft?.rewardId}
              image={nft?.cover}
              name={nft?.name}
              price={nft?.price}
              toast={toast}
            />
          );
        })}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Layout>
  );

  function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex w-full">
        <Sidebar />
        <div className="bg-[#25143a] w-[80%] min-h-screen overflow-y-auto">
          <DashNav />
          <div className="bg-createEvent blur-[220px] absolute w-[80%] h-[75vh] z-[-1]" />
          <div className="px-6">
            <p className="text-white text-xl font-semibold pl-4 pt-2">
              Rewards
            </p>
          </div>
          {children}
        </div>
      </div>
    );
  }
};

export default Rewards;
